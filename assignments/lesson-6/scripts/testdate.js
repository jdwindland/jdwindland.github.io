
//Date Format       Monday, 6 April 2020
//getDate()         Get the day as a number (1-31)
//getDay()          Get the weekday as a number (0-6)
//getFullYear()     Get the four digit year (yyyy)
//getMonth          Get the month (0-11)




var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var date = days[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
document.getElementById("demo").innerHTML = date;
