// let userCity = document.getElementById("#cityInput").value;
// let requestUrl = "https://api.openweathermap.org/data/2.5/weather";
// let city = "?q=";
// let url = requestUrl + city + userCity;
let submit = document.querySelector("#submit");

let createH2 = document.createElement("h2");
let createH3 = document.createElement("h3");
let createH6 = document.createElement("h6");
let createButton = document.createElement("button");

function fetchWeather(event) {
    event.preventDefault();

    let userCity = document.querySelector("#cityInput").value;
    let key = "88f56688097f82e5c0a415624cb95159";
    let units = "imperial";
    let requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + userCity + "&appid=" + key + "&units=imperial";
    // let url = requestUrl + city + userCity;

    fetch(requestUrl) 
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });

    let weatherEl = document.querySelector()
    let city = data.city[3];
    let wind = data.list.wind[2];
    let humidity = data.list.main[2];

    let weatherNow = document.querySelector("#weatherNow");
    let weatherFive = document.querySelector("#weatherFive");
    
    weatherNow
    


};

// api.openweathermap.org/data/2.5/forecast?q=${userCity}&appid=${key}&units=imperial

// event listener on submit button, fetch weather
submit.addEventListener("click", fetchWeather);

