class Account {
  customerName;
  accountNo;
  balance = 0;

  constructor(customerName, balance) {
    this.customerName = customerName;
    this.accountNo = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}

const AfzalAccount = new Account("Afzal", 10000);
// AfzalAccount.deposit(5000);
// AfzalAccount.withdraw(2000);
// console.log(AfzalAccount);

// hoisting will work with function but not with classes give the reference error  because can't use class name before initialization

// hello();
// function hello() {
//   console.log("Hello");
// }
