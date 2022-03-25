// class Config {
//     static dbUser = 'usename';
//     static dbPassword = 'secret';
//     static apiToken = 'abcd';
// }

// console.log(Config.apiToken);

// // Increment
class User {
    // static id = 1;
    static cache = {
        1: 'some value',
    };

    constructor(name, age, income) {
        this.name = name;
        this.age = age;
        this.income = income;
        this.id = User.id++;
    }

    // checkCache() {}

    static {
        console.log('Initialized');
    }

    static hasInCache() {
        console.log(User.cache);
    }

    // static compareByAge(user1, user2) {
    //     return user1.age - user2.age;
    // }

    // static compareByIncome(user1, user2) {
    //     return user1.income - user2.income;
    // }
}

// User.hasInCache();
// const user1 = new User('Rakesh K', 30, 5000);
User.hasInCache();
User.hasInCache();
// const user2 = new User('John Doe', 40, 10000);
// const user3 = new User('Jane Doe', 20, 7000);

// console.log(user1, user2, user3);
