var myDataRef = new Firebase("https://mybudget1.firebaseio.com");
myDataRef.onAuth(function(authData) {
    if (authData) {
        console.log("Authenticated with uid:", authData.uid);
        $('#user-name').text(authData.google.cachedUserProfile.name);
        $("#user-image").attr("src",authData.google.cachedUserProfile.picture);
        } else {
        console.log("Client unauthenticated.");
    }
});