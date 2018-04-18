var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("fmotto").innerHTML = myObj.towns[0].motto;
        document.getElementById("fyear").innerHTML = myObj.towns[0].yearFounded;
        document.getElementById("fpop").innerHTML = myObj.towns[0].currentPopulation;
        document.getElementById("frain").innerHTML = myObj.towns[0].averageRainfall;
        document.getElementById("fevent1").innerHTML = myObj.towns[0].events[0];
        document.getElementById("fevent2").innerHTML = myObj.towns[0].events[1];
        document.getElementById("fevent3").innerHTML = myObj.towns[0].events[2];
        document.getElementById("gmotto").innerHTML = myObj.towns[1].motto;
        document.getElementById("gyear").innerHTML = myObj.towns[1].yearFounded;
        document.getElementById("gpop").innerHTML = myObj.towns[1].currentPopulation;
        document.getElementById("grain").innerHTML = myObj.towns[1].averageRainfall;
        document.getElementById("gevent1").innerHTML = myObj.towns[1].events[0];
        document.getElementById("gevent2").innerHTML = myObj.towns[1].events[1];
        document.getElementById("gevent3").innerHTML = myObj.towns[1].events[2];
        document.getElementById("smotto").innerHTML = myObj.towns[3].motto;
        document.getElementById("syear").innerHTML = myObj.towns[3].yearFounded;
        document.getElementById("spop").innerHTML = myObj.towns[3].currentPopulation;
        document.getElementById("srain").innerHTML = myObj.towns[3].averageRainfall;
        document.getElementById("sevent1").innerHTML = myObj.towns[3].events[0];
        document.getElementById("sevent2").innerHTML = myObj.towns[3].events[1];
        document.getElementById("sevent3").innerHTML = myObj.towns[3].events[2];
    }
};
xmlhttp.open("GET", "https://byui-cit230.github.io/weather/data/towndata.json", true);
xmlhttp.send();
