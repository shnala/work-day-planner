//Adding time to page
var now = moment();
$('#currentDay').text(now.format("dddd, MMM Do"))

//Defining variable that grabs the current hour as an integer from 1 to 24
var currentHour = moment().format("H");

//Grabbing each time slot
var nine = $('#nine');
var ten = $('#ten');
var eleven = $('#eleven');
var twelve = $('#twelve');
var one = $('#one');
var two = $('#two');
var three = $('#three');
var four = $('#four');
var five = $('#five');

//Other global variables
//NTS: Need to use JQuery to grab button. Not sure why. ¯\_(ツ)_/¯
var saveBtnNine = $('.saveBtn')
// var formInput = $('input[type="text"]').val();


//TODO: Save form input to local storage when SAVE button is CLICKED and return that input on refresh.
const saveForm = function(event) {

    var formNine = nine.val().trim();
    localStorage.setItem("formNine", formNine);

    var formTen = ten.val().trim();
    localStorage.setItem("formTen", formTen);

    var formEleven = eleven.val().trim();
    localStorage.setItem("formEleven", formEleven);

    var formTwelve = twelve.val().trim();
    localStorage.setItem("formTwelve", formTwelve);

    var formOne = one.val().trim();
    localStorage.setItem("formOne", formOne);

    var formTwo = two.val().trim();
    localStorage.setItem("formTwo", formTwo);

    var formThree = three.val().trim();
    localStorage.setItem("formThree", formThree);

    var formFour = four.val().trim();
    localStorage.setItem("formFour", formFour);

    var formFive = five.val().trim();
    localStorage.setItem("formFive", formFive);

}


function pullForm() {
    var nineText = localStorage.getItem("formNine");
    console.log(nineText);
    nine.text = nineText

}

// const saveFormTen = function(event) {

//     var formTen = ten.val().trim();
//     localStorage.setItem("formTen", formTen);
// }

//Functionality for SAVE button
saveBtnNine.click('click', function() {
    saveForm();
});

//Traditional javascript doesn't work w/ Jquery?
// saveBtn.addEventListener("click", function(event) {
//     event.preventDefault();
//     saveFormInput();
// })


//Code for dynamically altering timeblocks according to current time of day
if (currentHour == 9) {
    nine.addClass('present');
} else if 
    (currentHour > 9) {
    nine.addClass('past');
} else
    nine.addClass('future');

    
if (currentHour == 10) {
    ten.addClass('present');
} else if 
    (currentHour > 10) {
    ten.addClass('past');
} else
    ten.addClass('future');


if (currentHour == 11) {
    eleven.addClass('present');
} else if 
    (currentHour > 11) {
    eleven.addClass('past');
} else
    eleven.addClass('future');


if (currentHour == 12) {
    twelve.addClass('present');
} else if 
    (currentHour > 12) {
    twelve.addClass('past');
} else
    twelve.addClass('future');


if (currentHour === 13) {
    one.addClass('present');
} else if 
    (currentHour > 13) {
    one.addClass('past');
} else
    one.addClass('future');


if (currentHour == 14) {
    two.addClass('present');
} else if 
    (currentHour > 14) {
    two.addClass('past');
} else
    two.addClass('future');


if (currentHour == 15) {
    three.addClass('present');
} else if 
    (currentHour > 15) {
    three.addClass('past');
} else
    three.addClass('future');


if (currentHour == 16) {
    four.addClass('present');
} else if 
    (currentHour > 16) {
    four.addClass('past');
} else
    four.addClass('future');


if (currentHour == 17) {
    five.addClass('present');
} else if 
    (currentHour > 17) {
    five.addClass('past');
} else
    five.addClass('future');

//Fires on load and pulls form input and appends it to page.
function init () {
        pullForm(); 
    }
    init();
//Testing different arrays. Ignore this
// let hours = [nine, ten, eleven, twelve, one, two, three, four, five]
// let hoursValue = [9, 10, 11, 12, 1, 2, 3, 4, 5]




// for (let i = 0; i < hours.length; i++) {
//     const element = hours[i].hourValue;
//     if (currentHour == element) {
//         element.addClass('present');
//     } else if 
//         (currentHour > element) {
//         element.addClass('past');
//     } else
//         element.addClass('future');
// }

// hours.forEach(element => {
//     // element.addClass('present');

//     if (currentHour == element) {
//         element.addClass('present');
//     } else if 
//         (currentHour > element) {
//         element.addClass('past');
//     } else
//         element.addClass('future');
// });


//Below demonstrates proper way to grab elements w/ jquery, cannot use old javascript methods for some reason.
// nine.addClass('present');

//Scripting Timeblocks:
//IF timeslot is BEFORE current time, THEN the timeslot BACKGROUNDCOLOR is GRAY.
//IF timeslot is AT current time, THEN the timeslot BACKGROUNDCOLOR is RED.
//IF timeslot is AFTER current time, THEN the timeslot BACKGROUND is GREEN.

//Syntax for if/else statements:
// if (currentHour == 9) {
//     nine.addClass('present');
// } else if 
//     (currentHour > 9) {
//     nine.addClass('past');
// } else
//     nine.addClass('future');


//Below I am trying to create an array that will assign a numerical value to each hour so that
//I can compare each hour to the current moment().
// let hours = [
//     {
//         whichHour: "nine",
//         hourValue: 9,
//     },
//     {
//         whichHour: "ten",
//         hourValue: 10,
//     },
//     {
//         whichHour: "eleven",
//         hourValue: 11,
//     },
//     {
//         whichHour: "twelve",
//         hourValue: 12,
//     },
//     {
//         whichHour: "one",
//         hourValue: 1,
//     },
//     {
//         whichHour: "two",
//         hourValue: 2,
//     },
//     {
//         whichHour: "three",
//         hourValue: 3,
//     },
//     {
//         whichHour: "four",
//         hourValue: 4,
//     },
//     {
//         whichHour: "five",
//         hourValue: 5,
//     }
// ]
// console.log(hours)

//Line for testing moment format
// $('#testingLine').text(currentHour);