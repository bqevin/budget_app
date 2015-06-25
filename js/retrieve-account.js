var myDataRef = new Firebase("https://mybudget1.firebaseio.com");
var newAccount = {},
    accountsNo = 0,
    cashTotal = 0,
    creditTotal = 0;

myDataRef.onAuth(function(authData) {
    if (authData) {
        console.log("Authenticated with uid:", authData.uid);
        var ref = new Firebase("https://mybudget1.firebaseio.com/users/" + authData.uid + "/accounts");
        ref.on("child_added", function(snapshot, prevChildKey) {
            newAccount = snapshot.val();
            $('<a  class="list-group-item"/>').text(newAccount.account_name).appendTo($('#your-accounts'));
            $('#your-accounts')[0].scrollTop = $('#your-accounts')[0].scrollHeight;

            if (newAccount.account_type.trim() === "cash") {
                cashTotal = cashTotal + Number(newAccount.account_bal);
                $('#cashTotal').val(accounting.formatMoney(cashTotal, "Ksh.  ", 2, ",", "."));
            } else if (newAccount.account_type.trim() === "credit-card") {
                creditTotal = creditTotal + Number(newAccount.account_bal);
                $('#creditTotal').val(accounting.formatMoney(creditTotal, "Ksh.  ", 2, ",", "."));
            }

        });
    } else {
        console.log("Client unauthenticated.");
    }
});
