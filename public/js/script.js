
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