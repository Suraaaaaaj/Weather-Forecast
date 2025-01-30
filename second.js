const inputbox = document.querySelector(".city-name")
const searchbutton = document.querySelector(".material-symbols-outlined")

const cityname = document.getElementById("city")
const day1 = document.getElementById("day")
const date1 = document.getElementById("date")
const year1 = document.getElementById("year")

const image1 = document.getElementById("image_1")
const temp = document.getElementById("temp-1")
const description = document.getElementById("descr-1")

const humidity_percentage = document.getElementById("humidity-%")

const windspeed_js = document.getElementById("windSpeed")

const firstdiv_date = document.getElementById("first-div-date1")
const firstdiv_month = document.getElementById("first-div-month1")
const firstdiv_img = document.getElementById("first-div-image")
const firstdiv_temp = document.getElementById("temp-div-text")

const seconddiv_date = document.getElementById("second-div-date1")
const seconddiv_month = document.getElementById("second-div-month1")
const seconddiv_img = document.getElementById("second-div-image")
const seconddiv_temp =  document.getElementById("temp-div-text2")

const thirddiv_date = document.getElementById("third-div-date1")
const thirddiv_month = document.getElementById("third-div-month1")
const thirddiv_img = document.getElementById("third-div-image")
const thirddiv_temp = document.getElementById("temp-div-text3")

const wholeDiv = document.querySelector(".whole-div")
const weatherDiv = document.querySelector(".weather-div")
const location_not_foundDiv = document.querySelector(".location-not-found")
const searchcityDiv = document.querySelector(".search-city")




async function checkWeather(city){
      const api_key = '7d743b89876128ab67a0c9700ce9e4c4';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`   //in place of weather we can use forecast word to get more info


      const weather = await fetch(`${url}`);
      const final_weather = await weather.json();

      console.log(final_weather)

      let now = new Date();
      // console.log(now);
          
      let final_day = now.getDay();
      let final_date = now.getDate();
      let final_year = now.getFullYear();

      if(final_day == 0){
        day1.innerHTML = `${"Sun" + ","}`;
      }

      else if(final_day == 1){
        day1.innerHTML = `${"Mon" + ","}`;
      }

      else if(final_day == 2){
        day1.innerHTML = `${"Tues" + ","}`;
      }

      else if(final_day == 3){
        day1.innerHTML = `${"Wed" + ","}`;
      }

      else if(final_day == 4){
        day1.innerHTML = `${"Thurs" + ","}`;
      }

      else if(final_day == 5){
        day1.innerHTML = `${"Fri" + ","}`;
      }

      else if(final_day == 6){
        day1.innerHTML = `${"Sat" + ","}`;
      }

      date1.innerHTML= final_date;
      year1.innerHTML = final_year;


      if(final_weather.cod == "404"){
        wholeDiv.style.display = "none";
        weatherDiv.style.display = "none"
        searchcityDiv.style.display = "none"
        location_not_foundDiv.style.display ="flex"
       }

       if(final_weather.cod == "200"){
         wholeDiv.style.display = "block";
         weatherDiv.style.display = "block"
         searchcityDiv.style.display = "none"
         location_not_foundDiv.style.display ="none"
       }

      temp.innerHTML = `${Math.round(final_weather.main.temp-273.15) + "°C"}`
      description.innerHTML = `${final_weather.weather[0].main}`
      humidity_percentage.innerHTML = `${final_weather.main.humidity+ "%"}`
      windspeed_js.innerHTML = `${final_weather.wind.speed +" km/h"}`

      if(final_weather.weather[0].main == "Clouds"){
        image1.src = "/clouds.png";
       }
       else if(final_weather.weather[0].main == "Clear"){
        image1.src = "/clear.png";
       }
       else if(final_weather.weather[0].main == "Snow"){
        image1.src = "/snow.png";
       }
       else if(final_weather.weather[0].main == "Rain"){
        image1.src = "/rain.png";
       }
       else if(final_weather.weather[0].main == "Drizzle"){
        image1.src = "/drizzle.png";
       }
       else if(final_weather.weather[0].main == "Snow"){
        image1.src = "/snow.png";
       }
       else if(final_weather.weather[0].main == "Thunderstorm"){
        image1.src = "/thunderstorm.png";
       }

       cityname.innerHTML = `${final_weather.name}`

       

}


async function forcastWeather(city){
    const api_key_2 = '7d743b89876128ab67a0c9700ce9e4c4';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key_2}` 

    const weather_2 = await fetch(`${url}`);
    const final_weather_2 = await weather_2.json();

    console.log(final_weather_2)

    // console.log(final_weather_2.daily)

    const date_1 = final_weather_2.list[0].dt;
    const final = new Date(date_1 * 1000);
    const final_date_1 = final.getDate(); 
    const final_month_1 = final.getMonth(); 
    console.log(final_date_1,final_month_1)


    const date_2 = final_weather_2.list[0].dt_txt;
    // const dateString = "2025-01-30 09:00:00"; 
    const date_3 = new Date(date_2.replace(" ", "T")); // Replace space with 'T' for better compatibility

    // Get hours
    const hours = date_3.getHours();
    const remaining_hour_1 = (21-`${hours}`)/3;
    console.log(remaining_hour_1)

    const nextIter = remaining_hour_1+1;
    


    const date_5 = final_weather_2.list[nextIter].dt;
    const final_2 = new Date(date_5 * 1000);
    const final_date_2 = final_2.getDate(); 
    const final_month_2 = final_2.getMonth(); 
    console.log(final_date_2,final_month_2)

    const date_6 = final_weather_2.list[nextIter].dt_txt;
    // const dateString = "2025-01-30 09:00:00"; 
    const date_7 = new Date(date_6.replace(" ", "T")); // Replace space with 'T' for better compatibility
    console.log(date_7)

    // Get hours
    const hours3 = date_7.getHours();
    const remaining_hour_2 =hours3+7 ;
    console.log(remaining_hour_2)    
    
    const nextIter_2 = remaining_hour_2+nextIter+1;
    console.log(nextIter_2)

    const date_8 = final_weather_2.list[nextIter_2].dt;
    const final_3 = new Date(date_8 * 1000);
    const final_date_3 = final_3.getDate(); 
    const final_month_3 = final_3.getMonth(); 
    console.log(final_date_3,final_month_3)
    

    firstdiv_date.innerHTML = final_date_1;
    if(final_month_1 == 0 ){
      firstdiv_month.innerHTML = "Jan"
    }

    if(final_month_1 == 1 ){
      firstdiv_month.innerHTML = "Feb"
    }

    if(final_month_1 == 2 ){
      firstdiv_month.innerHTML = "Mar"
    }

    if(final_month_1 == 3 ){
      firstdiv_month.innerHTML = "Apr"
    }

    if(final_month_1 == 4 ){
      firstdiv_month.innerHTML = "May"
    }

    if(final_month_1 == 5 ){
      firstdiv_month.innerHTML = "Jun"
    }

    if(final_month_1 == 6 ){
      firstdiv_month.innerHTML = "July"
    }

    if(final_month_1 == 7 ){
      firstdiv_month.innerHTML = "Aug"
    }

    if(final_month_1 == 8 ){
      firstdiv_month.innerHTML = "Sep"
    }

    if(final_month_1 == 9 ){
      firstdiv_month.innerHTML = "Oct"
    }

    if(final_month_1 == 10 ){
      firstdiv_month.innerHTML = "Nov"
    }

    if(final_month_1 == 11 ){
      firstdiv_month.innerHTML = "Dec"
    }




    seconddiv_date.innerHTML = final_date_2;
    if(final_month_2 == 0 ){
      seconddiv_month.innerHTML = "Jan"
    }

    if(final_month_2 == 1 ){
      seconddiv_month.innerHTML = "Feb"
    }

    if(final_month_2 == 2 ){
      seconddiv_month.innerHTML = "Mar"
    }

    if(final_month_2 == 3 ){
      seconddiv_month.innerHTML = "Apr"
    }

    if(final_month_2 == 4 ){
      seconddiv_month.innerHTML = "May"
    }

    if(final_month_2 == 5 ){
      seconddiv_month.innerHTML = "Jun"
    }

    if(final_month_2 == 6 ){
      seconddiv_month.innerHTML = "July"
    }

    if(final_month_2 == 7 ){
      seconddiv_month.innerHTML = "Aug"
    }

    if(final_month_2 == 8 ){
      seconddiv_month.innerHTML = "Sep"
    }

    if(final_month_2 == 9 ){
      seconddiv_month.innerHTML = "Oct"
    }

    if(final_month_2 == 10 ){
      seconddiv_month.innerHTML = "Nov"
    }

    if(final_month_2 == 11 ){
      seconddiv_month.innerHTML = "Dec"
    }

    thirddiv_date.innerHTML = final_date_3;
    if(final_month_3 == 0 ){
      thirddiv_month.innerHTML = "Jan"
    }

    if(final_month_3 == 1 ){
      thirddiv_month.innerHTML = "Feb"
    }

    if(final_month_3 == 2 ){
      thirddiv_month.innerHTML = "Mar"
    }

    if(final_month_3 == 3 ){
      thirddiv_month.innerHTML = "Apr"
    }

    if(final_month_3 == 4 ){
      thirddiv_month.innerHTML = "May"
    }

    if(final_month_3 == 5 ){
      thirddiv_month.innerHTML = "Jun"
    }

    if(final_month_3 == 6 ){
      thirddiv_month.innerHTML = "July"
    }

    if(final_month_3 == 7 ){
      thirddiv_month.innerHTML = "Aug"
    }

    if(final_month_3 == 8 ){
      thirddiv_month.innerHTML = "Sep"
    }

    if(final_month_3 == 9 ){
      thirddiv_month.innerHTML = "Oct"
    }

    if(final_month_3 == 10 ){
      thirddiv_month.innerHTML = "Nov"
    }

    if(final_month_3 == 11 ){
      thirddiv_month.innerHTML = "Dec"
    }
    
  
    firstdiv_temp.innerHTML = `${Math.round(final_weather_2.list[4].main.temp -273.15) + "°C"}`
    seconddiv_temp.innerHTML = `${Math.round(final_weather_2.list[11].main.temp -273.15) + "°C"}`
    thirddiv_temp.innerHTML = `${Math.round(final_weather_2.list[19].main.temp -273.15) + "°C"}`
    


    if(final_weather_2.list[4].weather[0].main == "Clouds"){
      firstdiv_img.src = "/clouds.png";
      seconddiv_img.src = "/clouds.png";
      thirddiv_img.src = "/clouds.png";
     }
     else if(final_weather_2.list[4].weather[0].main == "Clear"){
      firstdiv_img.src = "/clear.png";
      seconddiv_img.src = "/clear.png";
      thirddiv_img.src = "/clear.png";
     }
     else if(final_weather_2.list[4].weather[0].main == "Snow"){
      firstdiv_img.src = "/snow.png";
      seconddiv_img.src = "/snow.png";
      thirddiv_img.src = "/snow.png";

     }
     else if(final_weather_2.list[4].weather[0].main == "Rain"){
      firstdiv_img.src = "/rain.png";
      seconddiv_img.src = "/rain.png";
      thirddiv_img.src = "/rain.png";
     }
     else if(final_weather_2.list[4].weather[0].main == "Drizzle"){
      firstdiv_img.src = "/drizzle.png";
      seconddiv_img.src = "/drizzle.png";
      thirddiv_img.src = "/drizzle.png";

     }
     else if(final_weather_2.list[4].weather[0].main == "Snow"){
      firstdiv_img.src = "/snow.png";
      seconddiv_img.src = "/snow.png";
      thirddiv_img.src = "/snow.png";

     }
     else if(final_weather_2.list[4].weather[0].main == "Thunderstorm"){
      firstdiv_img.src = "/thunderstorm.png";
      seconddiv_img.src = "/thunderstorm.png";
      thirddiv_img.src = "/thunderstorm.png";

     }
}


searchbutton.addEventListener('click' , function(){
    checkWeather(inputbox.value)
})

searchbutton.addEventListener('click' , function(){
    forcastWeather(inputbox.value)
})

