jQuery('#saveBtn').click(function() {
    var budgetName = $('#budget-name').val();
    var accountType = $('#account-type').val();
    var budgetMonth = $('#budget-month').val();
    var budgetType = $('#budget-type').val();
    var budgetDesc = $('#budget-desc').val();
    var budgetAmount = $('#budget-amount').val();
    var budgetPriority = $("input:radio[name='priority']:checked").val();
    var budget = {
        budget_name: budgetName,
        account_type: accountType,
        budget_month: budgetMonth,
        budget_type: budgetType,
        budget_desc: budgetDesc,
        budget_amount: budgetAmount,
        budget_priority: budgetPriority
    };
    console.log(budget);
    var ref = new Firebase("https://mybudget1.firebaseio.com");
    ref.onAuth(function(authData) {
        if (authData) {
            console.log("Authenticated with uid:", authData.uid);
            ref.child("users").child(authData.uid).child("budgets").push(budget);
            alert('You have successfully added a budget');
        } else {
            console.log("Client unauthenticated.");
        }
    });

});
