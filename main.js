console.log('connected with main.js');

var ticketsubmit = document.querySelector('.ticketsubmit');
var seatingselect = document.getElementById('seatingselect');
let numberofpeople = document.getElementById('numberofpeople');
let printtickethere = document.querySelector('.printtickethere');

//this is for input submit
//ticketsubmit.addEventListener('click', ticketsubmitevent);
//var checker = document.getElementById('exambutton');


//this is for button
//checker.addEventListener('click', valuprinter);
//function valuprinter () {
//    let totalnumbervalue = document.createElement('p');
//    totalnumbervalue.setAttribute('class', 'totalnumbervalue');
//    totalnumbervalue.innerHTML = `Total number of people: ${numberofpeople.value}`;
//    printtickethere.appendChild(totalnumbervalue);
//    let seatingval = document.createElement('p');
//    seatingval.innerHTML = seatingselect.value;
//    printtickethere.appendChild(seatingval);
//    console.log(seatingval); 
//    console.log(seatingselect);
//    console.log(numberofpeople);
//    console.log(numberofpeople.value);
//}


//why doesnt input type submit work but only button works to get values?


//adding event listener to the submit button
ticketsubmit.addEventListener('click', function(event) {
    event.preventDefault();
    let totalnumbervalue = document.createElement('p');
    totalnumbervalue.setAttribute('class', 'totalnumbervalue');
    totalnumbervalue.innerHTML = `Total number of people: ${numberofpeople.value}`;
    printtickethere.appendChild(totalnumbervalue);
    let seatingval = document.createElement('p');
    seatingval.innerHTML = seatingselect.value;
    printtickethere.appendChild(seatingval);
    
    //passing numberofpeople.value as arguement for ticketprice function later on for reusability in that function.
    ticketprice(numberofpeople.value);
    let seasonticket = document.getElementById('seasonticket').value;
    console.log(seasonticket);
    seasonchecker(seasonticket);    
});


//various pricing per ticket for different sections
function ticketprice () {
    let totalprice = 0;
     if (seatingselect.value === 'stretford') {
        totalprice = (20*numberofpeople.value);
    } else if (seatingselect.value === 'safstand') {
        totalprice = (25*numberofpeople.value);
    } else if (seatingselect.value === 'eaststand') {
       totalprice = (30*numberofpeople.value);
    } else if (seatingselect.value === 'southstand') {
       totalprice = (35*numberofpeople.value);
    }
    console.log(numberofpeople.value);
    alert(totalprice);
    seasonchecker(totalprice);
}

//function to check if they have season ticket and offer 10% discount
// it says totalprice is not a number/undefined
function seasonchecker (seasonticket, totalprice) {
    let finalprice = 0;
    if (seasonticket === 'yesseason') {
        console.log('i have a seasonticket');
        finalprice = (totalprice - (totalprice*10/100));
        console.log(finalprice);
    } else if 
        (seasonticket === 'noseason') {
        console.log('no season ticket');
        finalprice = totalprice;
        console.log(finalprice);
    }
};


// I am trying to create function for each task and do not want to pollute my javascript with global variables as i heard it was a bad practice. 
//On line 53 I have a function that checks the value of the selected stadium selection and gives out total price based on the number of people who want to buy ticket and the section which they chose and stored it to a variable called totalprice.

//Then I created another function called seasonchecker on line 71 and passed totalprice as arguement (is that how we access variables of one function from another function?). seasonchecker function basically gives out a discount of 10% on the totalprice if they have a seasonticket. But when i try to console log finalprice it says its not a number. idk what im doing wrong and i cant access the value of totalprice in seasonchecker function. I know ticketprice has a value and it shows up in the alert when i click on the submit button but i just cant access it in seasonchecker function.

