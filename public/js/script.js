
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





