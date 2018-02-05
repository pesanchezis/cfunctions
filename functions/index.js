const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sendMailData = require('./SendMailData.js');


admin.initializeApp(functions.config().firebase);
exports.sendMailData = functions.database.ref('/nodo/{dataForm}').onWrite(sendMailData.handler);