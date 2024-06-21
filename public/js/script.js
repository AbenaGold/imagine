
const btn=document.getElementById('btn');
btn.onclick = function(){
    const name = prompt('Enter your full name:');
    document.getElementById('name').innerText = name;
}
//variables
const pi = 3.142;
let username = 'Abenagold';
let age = 101;
let present = false;

// Objects
const person = {
    username: 'Abenagold',
    age: 101,
    present: false,
    child: {
        name: 'lily',
        friend: 'zara',
    }

}
console.log(person.username);
person.age = 120;
console.log(person);
console.log(person.child);


// Arrays
const bottle1 = {
    size: 'large',
    color: 'yellow'
    
  }
  
  const bottle2 ={
    size: 'small',
    color:'blue'
  }
  
  const bottles = [bottle1, bottle2];
  
  bottles.push(bottle1);
  bottles;
  
  bottles[1].size;
  bottles[0].color;
  
  const date = new Date();
  date.toString();
  date.getDay();
  
  // If/Else
  // const age = 18;
  if (age >=17) {
    'you are true';
  } else {
   'you are false';
  }
  
  // For loop
  for (let i = 0; i <= 50; i+=1) {
    console.log('we did it!', i);
  }
  
  for (let i = 0; i < bottles.length; i+=1) {
    console.log(bottles[i]);
  }


  // Functions
// Defining a function
function login(username, password) {
  if (!username || !password) { 
      return 'username or password not provided';
    }
  if (username == "priscyangel" && password == "1234") {
    // Validate username and password
    
    // Verify username and password
    
    return "user is logged in";
  } else {
    return "Invalid username or password";
  }
}
// invoking a function
login('priscyangel',);



// Basic Arithmetic Operations
11+12
1+0.5
43-12;
45/8
52*8
180*2
45 / 24;
45 % 24;
Math.round(45 / 24);
Math.floor(45 / 24);
Math.random() *1000;
Math.max(84, 22, 55, 86,94);
2 * 5 + 4 -3 / 2;
'2'+2
Number('2') + 2
Number('ty') + 2


// Strings in javascript
// concatenation
const firstName = 'Priscilla';
const lastName = 'Arthur';
firstname + ' ' + lastname; 

// Template literal
`${firstname} ${lastname}`;



// Strings in javascript
// concatenation
const firstname = 'Priscilla';
const lastname = 'Arthur';
firstname + ' ' + lastname; 

// Template literal
`${firstname} ${lastname}`;


let fullname = 'priscilla arthur'
fullname.length
fullname.toUpperCase()
fullname.charAt(5)
fullname.slice(9,16)
fullname.split('')
fullname.replace('arthur', 'Gold')
fullname.indexOf('cilla')
fullname.indexOf('i')

// string conversion
Number('3.243')
parseInt('3.243')
parseFloat('3.243')
parseInt('7.999')
let amount = 18000
console.log(`GHS${amount}`)
amount.toString()



// Write a function that will add a participant to our Google classroom
// array
const participants = [];

function addParticipant(email){
  // check if email was provided
  if (!email) {
    return ' No email provided'; 
  // check if email is valid
  if (!email.includes('@'))
    {
      return 'Invalid email provided';
    }
                                             }
  // Add email to participants
  participants.push(email);
  return 'Participant added';
}

addParticipant('priscyangel91@gmail.com'); 
addParticipant('priscy.o.arthur91@gmail.com'); 
addParticipant();
addParticipant('priccyaaf');


// Arrays in Javascript
const users = [
  {
    username: 'abenagold',
    password: '1234',
    email: 'priscyangel91@gmail.com'
  }, 
   {
    username: 'priscyangel',
    password: '12345',
    email: 'priscy.o.arthur@gmail.com'
  } 
];
users;





participants; 




// // write a function that will take a user with firstname, lastname and return fullname;

// function fullname(){
//   return 'Priscilla Arthur'
// }
// fullname();


// // write a function that will take a user with firstname, lastname and return fullname;

// function fullName(user) {
//   return `${user.firstname} ${user.lastname}` ;
// }

// const user= {
//   firstname: 'Priscilla',
//   lastname: 'Arthur',
// }
// fullName(user);



// // write a function that will take a user with firstname, lastname and return fullname;

// function fullName(user) {
//   return {
//     ...user,
//     fullName: `${user.firstname} ${user.lastname}`
//   } ;
// }

// const user= {
//   firstname: 'Priscilla',
//   lastname: 'Arthur',
// }
// fullName(user);


// // Array map
// const users = [
//   {firstname: 'Mick', lastname: 'Hammond'},
//   {firstname: 'Elon', lastname: 'Musk'},
//   {firstname: 'Barry', lastname: 'Alen'},
//   {firstname: 'Oliver', lastname: 'Queen'},
//   {firstname: 'Will', lastname: 'Smith'},
// ]
// // to call out all the names or return, use
// // users.map(fullName);

// // Square of numbers
// function square(number){
//   return number **2;
// }
// square(5)

// function x(number){
//   return number **2;
// }

// x(10)

// function Dollars(amount){
//   return amount *15
// }
// Dollars(50);


// square(7);
// const numbers = [5, 8, 7, 6];
// numbers.map(square);

// // Array filter
// function isEven(number){
//   return number % 2 === 0;
// }
// isEven(6)
// isEven(9)
// numbers.filter(isEven);

// function isOdd(number){
//   return number % 2 === 1;
// }
// isOdd(5)


// // Write a function that will alllow a user to reset their password
// const user = {
//   email: 'example@gmail.com',
//   password: '1234'
// }

function resetPassword(email, Password) {
  // check if email and new password was provided
  if (!email || !newPassword) {
     return 'Email or Password not provided' }

     // Check if provided email is correct
if (email !==username.email) {
  return 'Incorrect email'
}
 
// update password with new one
username.password = newPassword;
return 'password reset'

}

user;
resetPassword('example@gmail.com', '99999')
user;











