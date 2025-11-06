class Rectangle {

  constructor(length, width) {
    this.length = length
    this.width = width
  }

  getArea() {
    return this.length * this.width
  }

  getPerimeter() {
    return (2 * this.length) + (2 * this.width)
  }

  isSquare() {
    return this.length === this.width ? true : false
  }
}

class Vehicle {

  passengers = []

  constructor(type, capacity, color) {
    this.type = type
    this.capacity = capacity
    if (!color) {
      this.color = "black"
    } else {
      this.color = color
    }
  }

  paint(color) {
    this.color = color
    return color
  }

  addPassenger(passenger) {
    if (this.passengers.length === this.capacity) {
      return -1
    }
    this.passengers.push(passenger)
    return this.passengers.length
  }
}

class PasswordManager {

/**
 * PASSWORD MANAGER CONSTRUCTOR
 * create a private password(str)
 * CHECK PASSWORD METHOD
 * check to see if the inputted password is the same as the stored password
 * return false if they don't
 * return true if they do
 * SET PASSWORD METHOD
 * check if the oldPassword input matches original password
 * return false if they don't match
 * if they do, update old password to new password
 * return true
 */

  #password;

  constructor(password) {
    this.#password = password
  }

  checkPassword(attempt) {
    if (attempt !== this.#password) {
      return false
    } else {
      return true
    }
  }

  setPassword(oldPassword, newPassword) {
    if (oldPassword === this.#password) {
      this.#password = newPassword
      return true
    } else {
      return false
    }
  }

}

class TodoList {

  /**
   * private array of items
   * TO DO LIST CONSTRUCTOR
   * title(str) param
   * ADD ITEM METHOD
   * arr.push the item with the given description input
   * returns list.length
   * REMOVE ITEM METHOD
   * check if an item that matches the input exists in the array
   * return null if it doesn't exist
   * if it exists, use splice to return the removed value
   * GET ITEMS METHOD
   * return a mapped items array
   */

  #items = []

  constructor(title) {
    this.title = title
  }

  addItem(description) {
    this.#items.push(description)
    return this.#items.length
  }

  removeItem(description) {
    if (this.#items.includes(description)) {
      this.#items.splice(this.#items.indexOf(description), 1);
      return description
    } else {
      return null
    }
  }

  getItems() {
    return this.#items.map((item) => item)
  }
}

class BankAccount {

  /**
   * BANK ACCOUNT() CONSTRUCTOR
   * firstName param
   * lastName param
   * balance param
   * DEPOSIT() METHOD
   * adds amount to balance
   * returns a message
   * WITHDRAW() METHOD
   * return message if not enough
   * subtracts inputted amount from balance
   * returns a message
   * GET TOTAL HOLDINGS() STATIC METHOD
   * return the total balance among all BankAccount instances
   */

  #balance = 0;
  static #totalBalance = 0;

  constructor(firstName, lastName, balance) {

    this.firstName = firstName;
    this.lastName = lastName;

    if (!balance) {
      this.#balance = 0
    } else {
      this.#balance = balance
    }

    BankAccount.#totalBalance += this.#balance;
  }

  showBalance() {
    if (this.#balance % 2 !== 0) {
      return `Your balance is $${this.#balance}`
    } else {
      return `Your balance is $${this.#balance}.00`
    }
  }

  deposit(amount) {
    if (Number.isNaN(amount)) {
      return
    }

    this.#balance += amount
    BankAccount.#totalBalance += amount

    if (this.#balance % 1 !== 0) {
      return `Your balance is $${this.#balance}`
    } else {
      return `Your balance is $${this.#balance}.00`
    }
  }

  withdraw(amount) {
    if (Number.isNaN(amount)) {
      return
    }
    if (amount > this.#balance) {
      return `You do not have enough funds.`
    }

    this.#balance -= amount;
    BankAccount.#totalBalance -= amount;

    if(this.#balance % 2 !== 0) {
      return `Your balance is $${this.#balance}.`
    } else {
      return `Your balance is $${this.#balance}.00.`
    }

  }

  static getTotalHoldings()  {
    return BankAccount.#totalBalance
  }
}

module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
