const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const fs = require('fs');
const path = require('path');
const url = `mongodb://localhost:27017/in-and-out`;
const google = require('../web-app-deploy/google-api')({}, []);

const ImportCsv = require('./import-csv');
const BillSummary = require('./bill-summary');
const CashSummary = require('./cash-summary');
const BankSummary = require('./bank-summary');


MongoClient.connect(url, async function (err, db) {
    if (err) return;

    await google.authorize();
    await google.initDriveSheets();

    // ImportCsv(db);
    /** TRIMESTRAL SUMMARY **/
    await BankSummary(db, google, {
        from: new Date('2018-10-01 02:00:00').getTime(),
        to: new Date('2018-12-31 21:59:59').getTime()
    });
    await BillSummary(db, google, {
        from: new Date('2018-10-01 02:00:00').getTime(),
        to: new Date('2018-12-31 21:59:59').getTime()
    });
    await CashSummary(db, google, {
        from: new Date('2018-10-01 02:00:00').getTime(),
        to: new Date('2018-12-31 21:59:59').getTime(),
        maxCashAmount: 2650
    });

    console.log('finish');
});
