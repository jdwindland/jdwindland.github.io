//SPRINGFIELD IL

var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/ca74112c3b021142/conditions/q/IL/Springfield.json','true')

weatherObject.send();

weatherObject.onload = function() {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('current_s').innerHTML = weatherInfo.current_observation.weather;

    document.getElementById('temp_s').innerHTML = weatherInfo.current_observation.temp_f;

    document.getElementById('wind_s').innerHTML = weatherInfo.current_observation.wind_mph;

    document.getElementById('wind_dir_s').innerHTML = weatherInfo.current_observation.wind_dir;

    document.getElementById('w_icon_s').src = weatherInfo.current_observation.icon_url;

} //end of onload


var weatherForecast = new XMLHttpRequest();

weatherForecast.open('GET','http://api.wunderground.com/api/ca74112c3b021142/forecast/q/IL/Springfield.json','true')

weatherForecast.send();

weatherForecast.onload = function() {

    var weatherInfo = JSON.parse(weatherForecast.responseText);
    console.log(weatherInfo);

    document.getElementById('high_s').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;

    document.getElementById('low_s').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;

    document.getElementById('forecast_s').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["0"].fcttext;

} //end of onload

