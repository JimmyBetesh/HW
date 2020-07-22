(function(){
    'use strict';
    function bankAccountStarter(initialDeposit){
        return {
            balance: initialDeposit
        };
    }
    function performTransaction(dollarAmount){
        this.balance += dollarAmount;
    }
    const acct1 = bankAccountStarter(525);
    const acct2 = bankAccountStarter(620);
    console.log(acct1.balance);
    console.log(acct2.balance);
    performTransaction.call(acct1, 1000);
    performTransaction.apply(acct2, [2000]);
    let doLater = performTransaction.bind(acct1);

    doLater(485);

    console.log(acct1.balance);
    console.log(acct2.balance);





}());