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

// const rakeshAccount = new BankAccount('Rakesh K', 1000);
// const johnAccount = new BankAccount('John Doe');
// rakeshAccount.deposit(5000);
// johnAccount.deposit(1000);
// rakeshAccount.withdraw(2000);

// console.log(rakeshAccount, johnAccount);

// ============================
const accounts = [];
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = new BankAccount(customerName.value, +balance.value);
    accounts.push(account);
    console.log(accounts);
});

depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find(
        (account) => account.accountNumber === +accountNumber.value
    );
    account.deposit(+amount.value);
    console.log(accounts);
});
