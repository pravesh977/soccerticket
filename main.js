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
        finalprice = totalprice;
        console.log(finalprice);
    } else if 
        (seasonticket === 'noseason') {
        console.log('no season ticket');
        finalprice = totalprice;
        console.log(finalprice);
    }
};


