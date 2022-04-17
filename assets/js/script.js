// start of working code 
var submit = document.getElementById("submit");

var createH2 = document.createElement("h2");
var createH3 = document.createElement("h3");
var createH6 = document.createElement("h6");
var createButton = document.createElement("button");

function fetchWeather(event) {
    event.preventDefault();

    var userCity = document.getElementById("cityInput").value;
    var key = "88f56688097f82e5c0a415624cb95159";
    var units = "imperial";
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + userCity + "&appid=" + key + "&units=imperial";
    // let url = requestUrl + city + userCity;

    fetch(requestUrl) 
        .then(function (response) {
            if (response.ok) {
                return response.json()
            .then(function (data) {
                console.log(data);
                var city = data.city.name;
                console.log(city);
                var temp = data.list[0].main.temp;
                console.log(temp);
                var wind = data.list[0].wind.speed;
                console.log(wind);
                var humidity = data.list[0].main.humidity;
                console.log(humidity);
                // future forecast temps! can i use a loop to accomplish this? prob.
                var temp1 = data.list[1].main.temp;
                var temp2 = data.list[2].main.temp;
                var temp3 = data.list[3].main.temp;
                var temp4 = data.list[4].main.temp;
                var temp5 = data.list[5].main.temp;
                // future forecast winds!
                var wind1 = data.list[1].wind.speed;
                var wind2 = data.list[2].wind.speed;
                var wind3 = data.list[3].wind.speed;
                var wind4 = data.list[4].wind.speed;
                var wind5 = data.list[5].wind.speed;
                // future forecast humidity!
                var humidity1 = data.list[1].main.humidity;
                var humidity2 = data.list[2].main.humidity;
                var humidity3 = data.list[3].main.humidity;
                var humidity4 = data.list[4].main.humidity;
                var humidity5 = data.list[5].main.humidity;
                printResults(city, temp, temp1, temp2, temp3, temp4, temp5, wind, wind1, wind2, wind3, wind4, wind5, humidity, humidity1, humidity2, humidity3, humidity4, humidity5);
            })
            };
            
        })
       
};

function printResults(city, temp, temp1, temp2, temp3, temp4, temp5, wind, wind1, wind2, wind3, wind4, wind5, humidity, humidity1, humidity2, humidity3, humidity4, humidity5) {

    var searchedCity = document.getElementById("searchedCity");
    var searchedTemp = document.getElementById("searchedTemp");
    var searchedWind = document.getElementById("searchedWind");
    var searchedHumidity = document.getElementById("searchedHumidity");
    var weatherFive = document.getElementById("weatherFive");
    var createH3 = document.createElement("h3");

    weatherFive.appendChild(createH3);
    createH3.textContent = "5-Day Forecast";
    searchedCity.textContent = city + "    (" + moment().format('L') + ")" ;
    searchedTemp.textContent = "Temp: " + temp + "\u2109";
    searchedWind.textContent = "Wind: " + wind + " MPH";
    searchedHumidity.textContent = "Humidity: " + humidity + "%";

    var day1Date = document.getElementById("day1Date");
    var day1Temp = document.getElementById("day1Temp");
    var day1Wind = document.getElementById("day1Wind");
    var day1Humidity = document.getElementById("day1Humidity");

    // day1Date.textContent = moment().formmat('MMM/DD/YYYY').add(1, 'days')
    day1Temp.textContent = temp1;
    day1Wind.textContent = wind1;
    day1Humidity.textContent = humidity1;

    day2Temp.textContent = temp2;
    day2Wind.textContent = wind2;
    day2Humidity.textContent = humidity2;

    day3Temp.textContent = temp3;
    day3Wind.textContent = wind3;
    day3Humidity.textContent = humidity3;

    day4Temp.textContent = temp4;
    day4Wind.textContent = wind4;
    day4Humidity.textContent = humidity4;

    day5Temp.textContent = temp5;
    day5Wind.textContent = wind5;
    day5Humidity.textContent = humidity5;

};

// api.openweathermap.org/data/2.5/forecast?q=${userCity}&appid=${key}&units=imperial

// event listener on submit button, fetch weather
submit.addEventListener("click", fetchWeather);

