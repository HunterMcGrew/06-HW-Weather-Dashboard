// start of working code 
// text input field on page
var inputField = document.getElementById("cityInput");
// define submit from "search" button on page
var submit = document.getElementById("submit");

// define elements we need to create
var createButton = document.createElement("button");

// global for userCity
var userCity;

// function for handling search button event
function submitHandler (event) {
    event.preventDefault();
    userCity = document.getElementById("cityInput").value;
    // clear text field
    inputField.textContent = "";
    fetchWeather();
};

// function to get weather data for user defined city
function fetchWeather() {
    // event.preventDefault();

    
    var key = "88f56688097f82e5c0a415624cb95159";
    var units = "imperial";
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + userCity + "&appid=" + key + "&units=imperial";
    // let url = requestUrl + city + userCity;

    fetch(requestUrl) 
        .then(function (response) {
            if (response.ok) {
                return response.json()
            .then(function (data) {
                // console.log(data);
                var city = data.city.name;
                // console.log(city);
                var temp = data.list[0].main.temp;
                // console.log(temp);
                var wind = data.list[0].wind.speed;
                // console.log(wind);
                var humidity = data.list[0].main.humidity;
                // console.log(humidity);
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
                searchHistory(userCity);
                printResults(city, temp, temp1, temp2, temp3, temp4, temp5, wind, wind1, wind2, wind3, wind4, wind5, humidity, humidity1, humidity2, humidity3, humidity4, humidity5);
            })
            };
            
        })
       
};

// function for printing data to page
function printResults(city, temp, temp1, temp2, temp3, temp4, temp5, wind, wind1, wind2, wind3, wind4, wind5, humidity, humidity1, humidity2, humidity3, humidity4, humidity5) {

    var searchedCity = document.getElementById("searchedCity");
    var searchedTemp = document.getElementById("searchedTemp");
    var searchedWind = document.getElementById("searchedWind");
    var searchedHumidity = document.getElementById("searchedHumidity");
    var weatherFive = document.getElementById("weatherFive");
    var forecastText = document.getElementById("forecastText");
    var now = moment().format("MM/DD/YYYY");
    var day1 = moment(now).add(1, "days").format("MM/DD/YYYY");
    var day2 = moment(now).add(2, "days").format("MM/DD/YYYY");
    var day3 = moment(now).add(3, "days").format("MM/DD/YYYY");
    var day4 = moment(now).add(4, "days").format("MM/DD/YYYY");
    var day5 = moment(now).add(5, "days").format("MM/DD/YYYY");

    forecastText.textContent = "5-Day Forecast: ";
    forecastText.style.display = "block";
    weatherFive.style.display = "block";
    searchedCity.textContent = city + "    (" + moment().format('L') + ")" ;
    searchedTemp.textContent = "Temp: " + temp + "\u2109";
    searchedWind.textContent = "Wind: " + wind + " MPH";
    searchedHumidity.textContent = "Humidity: " + humidity + "%";

    var day1Date = document.getElementById("day1Date");
    var day1Temp = document.getElementById("day1Temp");
    var day1Wind = document.getElementById("day1Wind");
    var day1Humidity = document.getElementById("day1Humidity");

    day1Date.textContent = day1;
    day1Temp.textContent = "Temp: " + temp1 + "\u2109";
    day1Wind.textContent = "Wind: " + wind1 + " MPH";
    day1Humidity.textContent = "Humidity: " + humidity1 + "%";

    day2Date.textContent = day2;
    day2Temp.textContent = "Temp: " + temp2 + "\u2109";
    day2Wind.textContent = "Wind: " + wind2 + " MPH";
    day2Humidity.textContent = "Humidity: " + humidity2 + "%";

    day3Date.textContent = day3;
    day3Temp.textContent = "Temp: " + temp3 + "\u2109";
    day3Wind.textContent = "Wind: " + wind3 + " MPH";
    day3Humidity.textContent = "Humidity: " + humidity3 + "%";

    day4Date.textContent = day4;
    day4Temp.textContent = "Temp: " + temp4 + "\u2109";
    day4Wind.textContent = "Wind: " + wind4 + " MPH";
    day4Humidity.textContent = "Humidity: " + humidity4 + "%";

    day5Date.textContent = day5;
    day5Temp.textContent = "Temp: " + temp5 + "\u2109";
    day5Wind.textContent = "Wind: " + wind5 + " MPH";
    day5Humidity.textContent = "Humidity: " + humidity5 + "%";

};

// function for search history being clicked
function historyHandler(event) {

    var clickedCity = event.currentTarget.textContent;
    userCity = clickedCity;
    fetchWeather();
};

let cities = [];
// console.log("cities", cities);
let historyBtns = document.getElementsByClassName("newCity");

// console.log("historyBtns", historyBtns);

function searchHistory() {
    
    // array of cities for history, no local storage so it only saves until refresh
    if (cities.includes(userCity) == false) {
        cities.push(userCity);
    };
    // console.log("cities", cities);
    
    var append = document.getElementById("append");
    
    // forEach city, make a button and append it
    cities.forEach(function (city, i) {
        
        let data = [].map.call(historyBtns, item => item.innerText);
        // console.log("data", data);

        if (data.includes(city)) {
            return;
        };

        var createButton = document.createElement("button");
        createButton.setAttribute("type", "submit");
        createButton.setAttribute("class", "btn btn-primary search newCity");
        createButton.innerText = city;
        append.append(createButton);
        createButton.addEventListener("click", historyHandler);
        
    });
    
};

// api.openweathermap.org/data/2.5/forecast?q=${userCity}&appid=${key}&units=imperial

// event listener on submit button, fetch weather
submit.addEventListener("click", submitHandler);

