var ref = new Firebase("https://mybudget1.firebaseio.com");
var googleId="";
ref.onAuth(function(authData) {
    if (authData) {
        googleId = authData.uid;
        console.log("Authenticated with uid:", authData.uid);
    } else {
        console.log("Client unauthenticated.");
    }
});
