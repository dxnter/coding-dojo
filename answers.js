/*
    Daniel Foster
    Coding Dojo
*/

//  Chapter 1 - Fundamentals


//  Setting and Swapping
var myNumber = 42;
var myName = "Danny";
var temp = 0;

temp = myNumber;
myNumber = myName;
myName = temp;

console.log(myName);
console.log(myNumber);

//  Print -52 to 1066
for(var i = -52; i <=1066; i++){
    console.log(i);
}

//  Don't Worry, Be Happy
function beCheerful(){
    console.log("good morning!");
}
for(var i = 0; i < 98; i++){
    beCheerful(i);
}

//  Multiple of Three - but Not All
for (var i = -300; i <= 0; i++) {
    if (i % 3 === 0) {
        if (i === -3 || i === -6) {
            continue;
        }
        console.log(i);
    }
}

//  Printing Integers with While
var count = 2000;
while (count <= 5280) {
    console.log(count);
    count++;
}

//  You Say It's Your Birthday
var month = 8;
var day = 23;

function birthdayCheck (a, b) {
    if (a === month || b === month) {
        if (b === day || b === day) {
            console.log("How did you know?");
        } else {
            console.log("Just another day....");
        }
    } 
}

//  Leap Year
function leapYear (year) {
    if (year % 4 === 0 || year % 400 === 0) {
        console.log("It's a leap year");
    } else if (year % 100 === 0) {
        console.log("It's not a leap year")
    } else {
        console.log("It's not a leap year!");
    }
}

//  Print and Count
var count = 0
for (var i = 512; i <= 4096; i++) {
    if (i % 5 === 0) {
        console.log(i);
        count++
    }
}
console.log(count);

//  Multiples of Six
var num = 0;
while (num < 60000) {
    if (num % 6 === 0) {
        console.log(num);
    } num++;
} 

//  Counting, the Dojo Way
for(var i = 1; i <= 100; i++){
    if (i % 10 === 0) {
        console.log("Dojo");
    } else if (i % 5 === 0) {
        console.log("Coding");
    } else {
        console.log(i);
    }
}

//  What Do You Know?
function youKnow(incoming) {
    console.log(incoming);
}

//  Whoah, That Sucker's Huge...
var sum = 0;
for (var i = -300000; i < 300000; i++) {
    if(i % 2 !== 0) {
        sum += i;
    }
}

//Countdown by Fours
var i = 2016;
while (i > 0) {
    if(i %  4 === 0) {
        console.log(i);
    } i--;
}

//  Flexible Countdown
function flexCount(lowNum, highNum, mult) {
    for (var i = highNum; i >= lowNum; i--) {
        if (i % mult === 0) {
            console.log(i);
        }
    }
}

//  The Final Countdown
function finalCount(param1, param2, param3, param4) {
    var i = param2;
    while (i <= param3) {
        if (i !== param4 && i % param1 === 0) {
            console.log(i);
        } i++;
    }
}

//  Countdown
function countDown(num) {
    var arr = [];
    for (var i = num; i >= 0; i--) {
        arr.push(i);
    } 
    console.log(arr);
    console.log("This array is " + (arr.length - 1) + " numbers long!");
}

//  Print and Return
function printReturn(a, b) {
    console.log(a);
    return b;
}

//  First Plus Length
var num = ['cat', 2, "cat", 5];
function firstPlus (arr) {
    if (!isNaN(arr[0])){
        var sum = arr[0] + arr.length;
        console.log(sum);
    } else if (isNaN(arr[0])){
        console.log("This operation cannot be done!");
    }
}

//  Values Greater than Second
var arr = [1, 3, 5, 7, 9, 13];
var count = 0;
function greaterThan(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[1] < arr[i]) {
            console.log(i);
            count++;
        }
    } console.log(count + " total numbers in the array greater than " + arr[1]);
}

//  Values Greather than Second, Generalized
function greaterSecond(array) {
    var sec = [];
    array.forEach(function(current) {
        if (current > array[1]) {
            sec.push(current);
        }
    });
} 

//  This Length, That Value
function lengthValue (a, b) {
    if (a === b){
        console.log("Jinx!");
    } else if() {
        Array.from(a);
    }
}

//  Fit the First Value
function firstValue(array) {
    if (array[0] > array.length) {
        console.log("Too big!");
    } else if (array[0] < array.length) {
        console.log("Too small!");
    } else {
        console.log("Just right!");
    }
}

//  Fahrenheit to Celsius
function fahrenheitToCelsius(fDegrees) {
    cDegrees = ((fDegrees - 32) * 5/9);
    console.log(cDegrees);
}

//  Celsius to Fahrenheit
function celsiusToFahrenheit(cDegrees) {
    fDegrees = cDegrees * 9/5 + 32;
    console.log(fDegrees);
}

//  Biggie Size
function biggieSize (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        } 
    } return console.log(arr);
}

//  Print Low, Return High
function printLow(arr) {
    var low = Math.min.apply(null, arr);
    var high = Math.max.apply(null, arr);
    console.log(low);
    return high;
}

//  Print One, Return Another
function printAnother(arr) {
    var second = arr[arr.length - 2];
    console.log(second);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return console.log(arr[i]);
        }
    }
}

//  Double Vision
var single = [1, 2, 3, 4, 5, 6, 7, 8];
var double = single.map(function(x) {
    return x * 2;
});

//  Count Positives
function countPositives(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    } arr[arr.length - 1] = sum; return sum;
} 

//  Evens and Odds
function evensOdd(arr) {
    var even = 0;
    var odd = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            odd = 0;
            even++;
        } else {
            even = 0;
            odd++;
        }
        if (even === 3) {
            console.log("Even more so!");
        } else if (odd === 3) {
            console.log("That's odd!");
        }
    }
}

//  Increment the Seconds
function aSec(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr[i]++;
        }
    } return arr;
}

//  Previous Lengths
function prevLeng(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = (i - 1);
    } console.log(arr);
}

//  Add Seven to Most
function seven(x) {
    x.shift();
    var j = x.map(c => c + 7);
    console.log(j);
}

//  Reverse Array
var array = [3, 1, 6, 4, 2];
var reverse = array.reverse();

//  Outlook: Negative
var array = [1, -3, 5];
var negative = array.map(c => -Math.abs(c));

//  Always Hungry
function alwaysHungry(x) {
    var j = x.filter(c => c === "food");
    var a = (j.length > 0 ? console.log("yummy") : console.log("I'm hungry"));
}

//Scale the Array
function scaleArray(arr, num) {
    var scaled = arr.map(function(x) {
        return(x * num);
    }); 
}


