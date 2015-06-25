jQuery('#saveBtn').click(function() {
    var accountType = $('#account-type').val();
    var accountName = $('#account-name').val();
    var accountDesc = $('#account-desc').val();
    var accountBal = $('#account-bal').val();
    var account = {
        account_type: accountType,
        account_name: accountName,
        account_desc: accountDesc,
        account_bal: accountBal
    };
    var ref = new Firebase("https://mybudget1.firebaseio.com");
    ref.onAuth(function(authData) {
        if (authData) {
            console.log("Authenticated with uid:", authData.uid);
            ref.child("users").child(authData.uid).child("accounts").push(account);
            alert('You have successfully added an account');
        } else {
            console.log("Client unauthenticated.");
        }
    });

});
