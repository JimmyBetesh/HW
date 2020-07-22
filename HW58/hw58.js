(function () {
    "use strict";
    function bankAccountObjectCreator(initialDeposit) {
        return {
            balance: initialDeposit,
            performTransaction: function (transactionAmount) {
                this.balance += transactionAmount;
            }
        };

    }
    const person1 = bankAccountObjectCreator(500);
    const person2 = bankAccountObjectCreator(5000000);


    console.log(person1.balance);
    person1.performTransaction(200);
    console.log(person2.balance);
    person2.performTransaction(-50);
    console.log(person2.balance);


}());
