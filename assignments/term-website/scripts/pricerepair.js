var myJSON = '{"minor":"$50","major":"$85","overhaul":"$90 – $150","drivetrain":"$45","tire":"$5 - $15","brake":"$30/wheel","spoke":"$20 + Parts","assemblenew":"$50 - $150","assembleused":"$25 - $50","box":"$45 - $65"}';

var myObj = JSON.parse(myJSON);
document.getElementById("price1").innerHTML = myObj.minor;
document.getElementById("price2").innerHTML = myObj.major;
document.getElementById("price3").innerHTML = myObj.overhaul;
document.getElementById("price4").innerHTML = myObj.drivetrain;
document.getElementById("price5").innerHTML = myObj.tire;
document.getElementById("price6").innerHTML = myObj.brake;
document.getElementById("price7").innerHTML = myObj.spoke;
document.getElementById("price8").innerHTML = myObj.assemblenew;
document.getElementById("price9").innerHTML = myObj.assembleused;
document.getElementById("price10").innerHTML = myObj.box;

document.getElementById("price").innerHTML = myObj.box;

