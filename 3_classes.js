class BankAccount {
    customerName;
    accountNumber;
    balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

// const rakeshAccount = new BankAccount('Rakesh K', 1000);
// rakeshAccount.deposit(4000);

// const johnAccount = new BankAccount('John Doe');
// johnAccount.deposit(500);
// johnAccount.withdraw(200);
// console.log(rakeshAccount);
