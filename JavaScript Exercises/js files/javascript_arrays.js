//19 April Practice 2 Exercise #3
var xValue = 5;
while (xValue >0) { //once while loop reach 0 value, the while loop will stop being executed
    xValue-=0.5;    //xValue = xValue - 0.5;        xValue-- means to decrease by 1
    console.log(xValue);
// the program will not execute while loop when xValue is = 0
}

//Print out all the odd numbers between 1 and 100

for (var i = 1; i<=100; i+=2) {
    console.log(i);
}

//alt
for (var i=1; i<=100; i++) {
    //! means "not equal to"
    if (i%2 != 0)   //% modular - return the remainder
    // 1/2 = 0.5 =>odd number
    // 2/2 = 0 => remainder = 0 => even number
    // 3/2 = 1.5 => odd number
    // 4/2 = 2  => remainder = 0 => even number
    //5/2 = 2.5  => odd 
    {
        console.log(i)  //print the odd numbers
    }

else { // this else loop is pointless, so no need to do
    //do nothing
}
}


//print 1 through n using while loop
var n = 6;  // this means the same: var n=6, loops = 0, answer = '';
var loops = 0;
var answer = '';
while (loops <=n) {
    answer += "[" + loops + "]";
    loops ++;
}
console.log(answer);


function justPrint(value) {
    var count = 0, returnOutput = '';
    while (count <= value) {
    returnOutput += `[${count}] `;  //return backtick, beside 1 on keyboard not single bracket
    count++;
    }
    return returnOutput;
    }
    console.log(justPrint(6));

    // sum initial n numbers
    var n = 5;
    var i =1;
    var sum = 0;
    while (i <=n) {
        sum +=1;
        i++;
    }
    console.log(sum);
