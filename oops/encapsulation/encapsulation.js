class Account {
  customerName;
  accountNo;
  #balance = 0; // _before now instead of this we have private keyword to use private or #

  constructor(customerName, balance) {
    this.customerName = customerName;
    this.accountNo = Date.now();
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    this.#balance -= amount;
  }
  set Balance(amount) {
    this.#balance = amount;
  }
  get Balance() {
    return this.#balance;
  }
}

class CurrentAccount extends Account {
  transactionLimit = 500;
  constructor(customerName, balance) {
    super(customerName, balance);
    // this.#balance so we cant use the private property in sub class also
  }
}

cla;

const afzalAccount = new CurrentAccount("Ahmad", 4000);
// afzalAccount.#balance = 6000;

// so problem is we are able to change the class properties from outside

// so private filed can't we use outside the class
// afzalAccount.Balance = 4;

// console.log(afzalAccount.Balance);
console.log(afzalAccount);
