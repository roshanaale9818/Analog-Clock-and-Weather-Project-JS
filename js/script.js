window.onload = function() {
    setInterval(showClock, 1000);
    this.getWeather();
}

function showClock() {
    const deg = 6;
    const hr = document.querySelector("[data-hour-hand]");
    const mn = document.querySelector("[data-minute-hand]");
    const sc = document.querySelector("[data-second-hand]");
    let date = new Date();
    let today = date.getDate();
    document.getElementById('today').innerHTML = today;
    console.log(today)
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * deg;
    let ss = date.getSeconds() * deg;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg`;
}

function getWeather() {
    var weatherIcon = document.getElementById('weatherIcon');
    date = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayName = dayNames[date.getDay()];
    document.getElementById('dayName').innerHTML = dayName;
    var month = monthNames[date.getMonth()];
    document.getElementById('month').innerHTML = month;
    var day = date.getDate();
    document.getElementById('dayNum').innerHTML = day;

    var temperature;
    var response;
    var key = 'fa45760c7fae4ec65f894c4008061082';
    const api = "http://api.openweathermap.org/data/2.5/weather?q=";
    cityName = "Kathmandu,np";
    console.log(date);
    fetch(api + cityName + '&units=metric&appid=' + key).then(function(res) {
        return res.json();
    }).then(
        function(data) {
            // console.log(data);
            // console.log(data.name)
            console.log(data.weather[0].icon);
            weatherIcon.innerHTML =
                `<img src="icons/${data.weather[0].icon}.png"/>`;
            console.log(data.weather[0].description)
            document.getElementById('weatherDesc').innerHTML = data.weather[0].description;
            temperature = data.main.temp;
            document.getElementById('temp').innerHTML = temperature;
            console.log(temperature);
            document.getElementById('cityName').innerHTML = data.name;
        }
    ).catch(error => {
        console.log(error);
        alert(error)
    })



}