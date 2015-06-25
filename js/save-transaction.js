jQuery('#saveBtn').click(function() {
    var transDate = $('#transaction-date').val();
    var payee = $('#payee').val();
    var transAmount = $('#transaction-amount').val();
    var transType = $('#transaction-type').val();
    var transDesc = $('#transaction-desc').val();
    var transaction = {
        trans_date: transDate,
        payee: payee,
        trans_amount: transAmount,
        trans_type: transType,
        trans_desc: transDesc
    };
    console.log(transaction);
    var ref = new Firebase("https://mybudget1.firebaseio.com");
    ref.onAuth(function(authData) {
        if (authData) {
            console.log("Authenticated with uid:", authData.uid);
            ref.child("users").child(authData.uid).child("transactions").push(transaction);
            alert('You have successfully added a transaction');
        } else {
            console.log("Client unauthenticated.");
        }
    });

});
