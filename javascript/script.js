const URl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey="412e35b16b0d30f992f56e2cc2ef7142";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

  async function checkweather(city){
    let response = await fetch(URl + city + `&appid=${apikey}`);
    console.log(response);
    let data = await response.json();
    console.log(data)
    
  document.querySelector(".city-name").innerHTML = data.name;  
  document.querySelector(".weather-data").innerHTML = data.main.temp;
  document.querySelector("#min-temp").innerHTML = data.main.temp_min;
  document.querySelector("#max-temp").innerHTML = data.main.temp_max;
  document.querySelector("#humidity").innerHTML = data.main.humidity;
  document.querySelector("#Wind-speed").innerHTML = data.wind.speed;

  console.log(searchBox.value);
  

};
searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    checkweather(searchBox.value)
});






