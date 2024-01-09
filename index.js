const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

search.addEventListener('click', () =>{
    const APIKey = "6b58924fc67d6b5236f1a1d6b5721f98"
    const city = document.querySelector(".search-box input").value;

    if(city === '')
        return;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json)
        .then(json =>{
            if(json.cod ==='404'){
                container.style.height = "400px";
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display= "block";
                error404.classList.add("fadeIn")
                return;
            }
        })

})