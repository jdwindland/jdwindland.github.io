//FRANKLIN MN

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/ca74112c3b021142/conditions/q/MN/Franklin.json','true')

weatherObject.send();

weatherObject.onload = function() {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('current_f').innerHTML = weatherInfo.current_observation.weather;

    document.getElementById('temp_f').innerHTML = weatherInfo.current_observation.temp_f;

    document.getElementById('wind_f').innerHTML = weatherInfo.current_observation.wind_mph;

    document.getElementById('wind_dir_f').innerHTML = weatherInfo.current_observation.wind_dir;

    document.getElementById('w_icon_f').src = weatherInfo.current_observation.icon_url;

} //end of onload


var weatherForecast = new XMLHttpRequest();

weatherForecast.open('GET','http://api.wunderground.com/api/ca74112c3b021142/forecast/q/MN/Franklin.json','true')

weatherForecast.send();

weatherForecast.onload = function() {

    var weatherInfo = JSON.parse(weatherForecast.responseText);
    console.log(weatherInfo);

    document.getElementById('high_f').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;

    document.getElementById('low_f').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;

    document.getElementById('forecast_f').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["0"].fcttext;

} //end of onload

