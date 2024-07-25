// OOP - Object oriented programming

// Why OOP -

// class Afzal {
//   constructor(customerName, balance) {
//     this.customerName = customerName;
//     this.accountNum = Date.now();
//     this.balance = balance;
//   }
// }
// const afzalAccount = new Afzal("Afzal A", "100000");

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNum = Date.now();
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance = this.balance + amount;
  };

  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

const afzalAccount = new BankAccount("Afzal A", 100000);
const johnAccount = new BankAccount("John AAAA A");
//  so afzalAccount is instance of BankAccount constructor
// and JohnAcoount is another instance of BankAccount constructor
//  every instance create new object in different memory location
// afzalAccount.deposit(8000);
// afzalAccount.withdraw(50000);

// console.log(afzalAccount);

// ===========================================

const accounts = [];

const accountFrom = document.querySelector("#accountform");
const customerName = document.querySelector("#CustomerName");
const balance = document.querySelector("#balance");

// console.log(accountFrom, customerName, balance);

accountFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new BankAccount(customerName.value, +balance.value);
  accounts.push(account);
  console.log(accounts);
});

const depositForm = document.querySelector("#depositForm");
const accountNum = document.querySelector("#accountNum");
const depositAmount = document.querySelector("#depositAmount");

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountNum === +accountNum.value
  );
  //   console.log("account", account);
  account.deposit(+depositAmount.value);
  console.log(accounts);
});
