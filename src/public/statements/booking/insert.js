export default async function ({ system, wait }) {
    const {model, hour} = this;
    const date = new Date(model.date);
    date.setUTCHours(hour[0], hour[1], 0, 0);
    alert(system.store.spainOffset)
    date.setTime(date.getTime() - system.store.spainOffset * 60 * 60 * 1000);
    const req = RetryRequest('/google/calendar/insert', {
        timeout: 10000,
        headers: { 'Content-Type': 'application/json' }
    });
    const body = JSON.stringify({
        locationIndex: model.center,
        start: date.toISOString(),
        treatments: model.treatments
    });
    try {
        const res = await req.post(body);
        return JSON.parse(res.responseText)
    } catch(e) {
        system.throw('booking-insert')
    }
    return {};
}
