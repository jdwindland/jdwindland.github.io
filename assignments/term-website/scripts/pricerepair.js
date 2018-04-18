var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
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
    }
};
xmlhttp.open("GET", "https://jdwindland.github.io/assignments/term-website/data/repairprice.json", true);
xmlhttp.send();

