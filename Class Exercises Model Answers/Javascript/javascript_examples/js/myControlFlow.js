function businessHours(dayNumber, hourNumber)
{
    if (hourNumber >=9 && hourNumber <= 18)
    {
        switch(dayNumber)
        {
            case 0:
                console.log("Sunday, this is not a work day!");
                break;
            case 1:
                console.log("Monday, this is a business work day!");
                break;
            case 2:
                console.log("Tuesday, this is a business work day!");
                break;
            case 3:
                console.log("Wednesday, this is a business work day!");
                break;
            case 4:
                console.log("Thursday, this is a business work day!");
                break;
            case 5:
                console.log("Friday, this is a business work day!");
                break;
            case 6:
                console.log("Saturday, this is not a work day!");
                break;
            default:
                console.log("Invalid day number!");
                break;
        }
    }
    else
    {
        console.log("This is not a business hour, try again tomorrow");
    }
}


//Replace the yearDayNumber and hourNumber parameters with a Date() variable.
//businessHours(1, 10);

//Challenge #1
var dayDate = new Date();
var todayDate = dayDate.getDay();
var currentHour = dayDate.getHours();

businessHours(todayDate, currentHour);



//Exercise 1 Part 2
function getDayNumber(janFirstDayNumber, yearDayNumber)
{
     //calculate and return the day of the week corresponding to the yearDayNumber passed.
     var getDayNum = (yearDayNumber+janFirstDayNumber) % 7;
     return getDayNum;
}

var janFirstDayNumber = 1;
var yearDayNumber = 365;

console.log("Day of week : " + getDayNumber(janFirstDayNumber, yearDayNumber));

console.log("Day of week : " + getDayNumber(2, 365));

//Function expression
var x = function rubric(score)
       {
            //Part 2 & Part 3
            if (score == 11)
            {
                console.log("Perfect");
            }
            else if (score > 8 && score < 11)
            {
                console.log("Excellent");
            }
            else if (score >= 5 && score <8) 
            {
               console.log("You passed");
            }
            else if (score >= 0 && score < 5)
            {
                console.log("You failed");
            }
            else if (score < 0 || score > 11)
            {
                console.log("Invalid Score");
            }
       }

    x(0); 
    x(6);
    x(9);
    x(11);
    x(-1);
    x(13);
