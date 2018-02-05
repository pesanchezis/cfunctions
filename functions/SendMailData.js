
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

const mailTransport = nodemailer.createTransport({
    service: 'Gmail',
        auth: {
            user: 'pesanchez.is.pe@gmail.com',
            pass: 'adivina'
        }
});

exports.handler = (event) => {
    console.log("estamos en el handler");
    var arbol = event.data.val();
    console.log(arbol);
    const nombre = arbol.nombre;
    const telefono = arbol.telefono;
    const correo = arbol.email;

    //console.log(`email enviado ${correo}`);

    const mailOptions = {
        from: 'pesanchez.is.pe@gmail.com',
        to: 'pesanchez.is.pe@gmail.com'
    };

    mailOptions.subject = "Nueva cotización";
    mailOptions.text = `Hola soy ${nombre}, mi número de teléfono es ${telefono} además puede contactarme al correo ${correo}. Saludos!` ;

    return mailTransport.sendMail(mailOptions).then(() => {
        console.log("Correo enviado");
    }).catch(error => {
        console.error(error);
    });

}