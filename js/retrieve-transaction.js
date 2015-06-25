var myDataRef = new Firebase("https://mybudget1.firebaseio.com");
var newTrans = {};

myDataRef.onAuth(function(authData) {
    if (authData) {
        console.log("Authenticated with uid:", authData.uid);
        var ref = new Firebase("https://mybudget1.firebaseio.com/users/" + authData.uid + "/transactions");
        ref.on("child_added", function(snapshot, prevChildKey) {
            newTrans = snapshot.val();
            $('<a  class="list-group-item"><ul class="no-bullets"><li><b>Transaction Date:</b> ' + newTrans.trans_date + '<li><b>Payee:</b> ' + newTrans.payee + '</li>' + '<li><b>Transaction Amount:</b> ' + newTrans.trans_amount + '</li>' + '<li><b>Transaction Type:</b> ' + newTrans.trans_type + '</li>' + '<li><b>Transaction Notes:</b> ' + newTrans.trans_desc + '</li></ul></a>').appendTo($('#your-transactions'));
            $('#your-transactions')[0].scrollTop = $('#your-transactions')[0].scrollHeight;


        });
    } else {
        console.log("Client unauthenticated.");
    }
});
