// // inherit basically means properties and methods from parent class cn excess in child class means in derived class

// // and in very simple word baap ki biraasat uske child k under aa jana 😂😂

// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.accountNum = Date.now();
//   this.balance = balance;
// }

// // function CurrentAccount(customerName, balance = 0) {
// //   this.customerName = customerName;
// //   this.accountNum = Date.now();
// //   this.balance = balance;
// //   this.transactionLimit = 50000;
// // }

// // problems is repetition is happening

// // so to prevent this  inheritance

// function CurrentAccount(customerName, balance = 0) {
//   BankAccount.call(this, customerName, balance);
//   this.customerName = customerName;
//   this.accountNum = Date.now();
//   this.balance = balance;
//   this.transactionLimit = 50000;

//   //   but prototype declared functions is not coming
// }
// //  will add the bank account declared prototype
// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//   console.log("taking loan: ", +amount);
// };

// BankAccount.prototype.deposit = function (amount) {
//   this.balance = this.balance + amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

// const afzalAccount = new CurrentAccount("Afzal", 10000);
// afzalAccount.deposit(5000);
// afzalAccount.takeBusinessLoan(50000000);
// console.log(afzalAccount);

class Account {
  customerName;
  accountNo;
  balance = 0;

  constructor(customerName, balance) {
    this.customerName = customerName;
    this.accountNo = Date.now();
    this.balance = balance;
  }

  //   deposit(amount) {
  //     this.balance += amount;
  //   }
  withdraw(amount) {
    this.balance -= amount;
  }
}

Account.prototype.deposit = function (amount) {
  this.balance += amount;
};

class CurrentAccount extends Account {
  transactionLimit = 500;
  constructor(customerName, balance) {
    super(customerName, balance);
  }
}

const current = new CurrentAccount("Afzal", 900);
console.log(current);
// current.withdraw(5);
