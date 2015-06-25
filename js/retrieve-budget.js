var myDataRef = new Firebase("https://mybudget1.firebaseio.com");
var newAccount = {},
    accountsNo = 0,
    cashTotal = 0,
    creditTotal = 0;

myDataRef.onAuth(function(authData) {
    if (authData) {
        console.log("Authenticated with uid:", authData.uid);
        var ref = new Firebase("https://mybudget1.firebaseio.com/users/" + authData.uid + "/budgets");
        ref.on("child_added", function(snapshot, prevChildKey) {
            newAccount = snapshot.val();
            $('<a  class="list-group-item"/>').text(newAccount.budget_type).appendTo($('#your-budgets'));
            $('#your-budgets')[0].scrollTop = $('#your-budgets')[0].scrollHeight;


        });
    } else {
        console.log("Client unauthenticated.");
    }
});
