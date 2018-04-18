//GREENVILLE IL

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/ca74112c3b021142/conditions/q/IL/Greenville.json','true')

weatherObject.send();

weatherObject.onload = function() {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('current_g').innerHTML = weatherInfo.current_observation.weather;

    document.getElementById('temp_g').innerHTML = weatherInfo.current_observation.temp_f;

    document.getElementById('wind_g').innerHTML = weatherInfo.current_observation.wind_mph;

    document.getElementById('wind_dir_g').innerHTML = weatherInfo.current_observation.wind_dir;

    document.getElementById('w_icon_g').src = weatherInfo.current_observation.icon_url;

} //end of onload


var weatherForecast = new XMLHttpRequest();

weatherForecast.open('GET','http://api.wunderground.com/api/ca74112c3b021142/forecast/q/IL/Greenville.json','true')

weatherForecast.send();

weatherForecast.onload = function() {

    var weatherInfo = JSON.parse(weatherForecast.responseText);
    console.log(weatherInfo);

    document.getElementById('high_g').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;

    document.getElementById('low_g').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;

    document.getElementById('forecast_g').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["0"].fcttext;

} //end of onload

