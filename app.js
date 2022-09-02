


let weather = {
     apiKey : "23c3c09c3fd7a97eb372b226212e8eca",
     fetchWeather : function(city){
         fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+this.apiKey+"&units=metric"
         )
         .then((response)=>{
             if(!response.ok){
                 alert("no weather found.")
                 throw new Error("no weather found")
             }
            //  console.log( city);
             return response.json();
         })
         .then((data)=> this.displayWeather(data));
         
     },

     displayWeather : function(data){
         const {name} = data;
         const {icon , description} = data.weather[0];
         const {temp, humidity} = data.main;
         const {speed} = data.wind;
         document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + " °C";
    
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";




     },
     search : function (){
         this.fetchWeather(document.querySelector(".search-bar").value)
     },

};
document.querySelector(".search-btn").addEventListener("click" , function(){
    weather.search()
})