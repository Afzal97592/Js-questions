// utility functions

class User {
  static id = 1;
  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
    this.id = User.id++;
    // cant use this.id because this refer to class object instance and when we give the statice to id so it store within a class
  }
  static compareByAge(user1, user2) {
    return user1.age - user2.age;
  }

  static compareByIncome(user1, user2) {
    return user1.income - user2.income;
  }
}

const user1 = new User("John", 25, 40000);
const user2 = new User("APJ", 32, 500);
// const user3 = new User("Ahmad", 30, 20000);

const users = [user1, user2, user3];

// console.log(user1, user2, user3);
// users.sort((a, b) => {
//   return a.age - b.age;
// });

// console.log(users);
// users.sort(User.compareByAge);
users.sort(User.compareByIncome);
console.log(users);

// short the user on the age property
