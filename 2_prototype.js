function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    // this.deposit = function (amount) {
    //     this.balance += amount;
    // };

    // this.withdraw = (amount) => {
    //     this.balance -= amount;
    // };
}

const rakeshAccount = new BankAccount('Rakesh K');
const johnAccount = new BankAccount('John Doe', 1000);
// console.log(rakeshAccount, johnAccount);

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
};

BankAccount.prototype.withdraw = (amount) => {
    this.balance -= amount;
};

// johnAccount.deposit(3000);

console.log(johnAccount);
