const { confirmRegistrationUrl } = require('../../serverInfo');

module.exports = function ({ grayColor, name, greenColor, host, activationCode, footer, header }) {
    return `
    ${header(`Bienvenid@ ${name}!`)}
    <!-- COPY -->
    <tr>
        <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: 'Arial', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;" >
            <p style="margin: 0;">Por favor haz click en este boton para confirmar la creación de tu cuenta.</p>
        </td>
    </tr>
    <!-- BULLETPROOF BUTTON -->
    <tr>
        <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px;">
                        <table border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td align="center" style="border-radius: 3px;" bgcolor="#56ab2a">
                                    <a href="${host}${confirmRegistrationUrl}?activationCode=${activationCode}" target="_blank" 
                                        style="font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; 
                                            text-decoration: none; text-decoration: none; padding: 15px 25px; 
                                            border-radius: 2px; border: 1px solid #56ab2a; display: inline-block;">
                                        Confirmar Cuenta
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    ${footer()}
    `;
};
