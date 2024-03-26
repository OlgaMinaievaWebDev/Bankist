'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
         <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        
          <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

//calculating and displaying balance
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};
calcDisplayBalance(account1.movements);

//
const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);

//create username property in the object and make it first letters of the name
const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(item => item.at(0))
      .join('');
  });
};

console.log(createUserNames(accounts));
console.log(accounts);

//////////////////////c///////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// filter method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposits);

const depositFor = [];
for (const mov of movements) {
  if (mov > 0) depositFor.push(mov);
}
console.log(depositFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

const withdrawFor = [];
for (const mov of movements) {
  if (mov < 0) withdrawFor.push(mov);
}
console.log(withdrawFor);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

// Maximum value
/////////////////////////////////////////////////
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements.at(0));
console.log(max);

const arr = [5, 2, 4, 1, 15, 8, 3];
const arr2 = [16, 6, 10, 5, 6, 1, 4];

const calcAges = function (arr) {
  const humanAge = arr.map(age => {
    if (age <= 2) return 2 * age;
    else return 16 + age * 4;
  });
  console.log(humanAge);
  const elderDog = humanAge.filter(age => age >= 18);
  console.log(elderDog);

  const averageAge = elderDog.reduce((acc, curr) => {
    return Math.floor((acc + curr) / arr.length);
  }, 0);
  console.log(averageAge);
  return averageAge;
};

const pipeline = arrs =>
  arrs
    .map(arr => (arr <= 2 ? 2 * arr : 16 + arr * 4))
    .filer(arr => arr >= 18)
    .reduce((acc, arr) => {
      Math.floor((acc + arr) / arr.length);
    }, 0);

pipeline(arr);
console.log(average);
calcAges([5, 2, 4, 1, 15, 8, 3]);
calcAges([16, 6, 10, 5, 6, 1, 4]);

const eurToUSD = 1.1;

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUSD)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalDepositsUSD.toFixed(0));
