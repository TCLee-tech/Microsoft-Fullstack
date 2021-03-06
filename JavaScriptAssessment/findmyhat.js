// console.log("Start findmyhat.js");

const prompt = require('prompt-sync')({sigint: true});  //sigint means signal interrupt, sigint: true allows users to exit using ^C
const clear = require('clear-screen');
 
const hat = '^';
const hole = 'O';
const fieldCharacter = '▊';
const pathCharacter = '*';

// const name = prompt('What is your name?');
// console.log(`Hey there ${name}`);

//create a class controller for the game
class Field
{
    // initialise the variables in the class
   constructor(field) {
   this.field = field;

   //this.start is the default for char "*"
   this.start = {
     x: 0,
     y: 0
   };
   //this.hatPos is the default for hat "^"
   this.hatPos = {
     x: 0,
     y: 0
   };

  this.locationX = 0;
  this.locationY = 0;
 }  //End of constructor

 //call a Static method directly from the Class Object
 static generateField(fieldH, fieldW, percentage = 0.1) {

    const field = new Array(fieldH)
                  .fill(0)
                  .map(element => new Array(fieldW));   //JavaSript map method, w3School
   
    //console.log(field); 
    for(let y = 0; y < fieldH; y++) {
      for(let x = 0; x < fieldW; x++) {
        const prob = Math.random();    //return a value betwen 0 and 1
        //console.log(prob);
        field[y][x] = prob > percentage ? fieldCharacter : hole
      }
    }
    return field;
  } //End of generateField method

//create instance of Field Class to initiate the Constructor, generating rows and columns from generateField method.
//call runGame to run the game  
const myField = new Field(Field.generateField(10,10,0.2));
myField.runGame();

  runGame() {
      //other methods in the class
    this.setStart();    //set the random position of my char "*"
    this.setHat();      //set the radom position of the hat "^"
  
    this.print();       //print out the rows and columns
    this.getInput();    //get input from the user

    let playing = true;
    while (playing) {
      this.print();
      this.askQuestion();
      if (!this.isInBounds()) {
        console.log('Out of bounds instruction!');
        playing = false;
        break;
      } else if (this.isHole()) {
        console.log('Sorry, you fell down a hole!');
        playing = false;
        break;
      } else if (this.isHat()) {
        console.log('Congrats, you found your hat!');
        playing = false;
        break;
      }
      // Update the current location on the map
      this.field[this.locationY][this.locationX] = pathCharacter;
    }
  }

 }
 
 setStart() {
    this.start = this.setPos(); //returns random x and y position (value)
    this.locationX = this.start.x;  ///fixes character x position to this random x position
    this.locationY = this.start.y;  
    this.field[this.locationX][this.locationY] = pathCharacter; //*
  }

setHat() {
  this.hatPos = this.setPos(this.start)
  this.field[this.hatPos.y][this.hatPos.x] = hat; //^
}
 
print() {
  clear();
  this.field.forEach(element => console.log(element.join('')));
}
 
 getInput() {
    const input = prompt('Which way? ').toUpperCase();
    switch (answer) {
      case 'U':
        this.locationY -= 1;
        break;
      case 'D':
        this.locationY += 1;
        break;
      case 'L':
        this.locationX -= 1;
        break;
      case 'R':
        this.locationX += 1;
        break;
      default:
        console.log('Enter U, D, L or R.');
        this.getInput();
        break;
 }

    //check input - u, d, l, r, and others (to warn user if wrong key entered)

 setPos() {
 
    const pos = {
      x: 0,
      y: 0
    }
 
    where (pos.y >= 0 &&
      pos.x >= 0 &&
      pos.y < this.field.length &&
      pos.x < this.field[0].length) {

    pos.x = Math.floor(Math.random() * this.field[0].length);   //randomise x position, x = 10
    pos.y = Math.floor(Math.random() * this.field[1].length);   //randomise y position, y = 10
    }
  
    console.log(pos.x);
    console.log(pos.y);
   
    return pos;
  }

  isHat() {
    return this.field[this.locationY][this.locationX] === hat;
  }

  isHole() {
    return this.field[this.locationY][this.locationX] === hole;
  }

  print() {
    const displayString = this.field.map(row => {
        return row.join('');
      }).join('\n');
    console.log(displayString);
  }

 

}   //end of Field Class


//create an instance of Field Class and call generateField directly from Class name
const myField = new Field(Field.generateField(10,10, 0.2));
myField.runGame();