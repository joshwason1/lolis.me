const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
const countRef = admin.database().ref('count');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.increase = functions.https.onRequest((request, response) => {
    countRef.transaction(function(count) {
        count++;
        return count;
    });
    response.send("Value Increased")
});
