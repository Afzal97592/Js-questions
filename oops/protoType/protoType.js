function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNum = Date.now();
  this.balance = balance;

  //   this.deposit = function (amount) {
  //     this.balance = this.balance + amount;
  //   };

  //   this.withdraw = (amount) => {
  //     this.balance -= amount;
  //   };
}

const afzalAccount = new BankAccount("Afzal A", 500);
const afzalAccount2 = new BankAccount("Afzal A", 700);
// console.log(afzalAccount);
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

afzalAccount.deposit(200);
afzalAccount2.withdraw(10);

console.log(afzalAccount, afzalAccount2);

// Array and object are inbuilt contructor in javascript
