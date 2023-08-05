const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '667605e4cemsh774e4713fce2e26p1c499ejsn8af14f1bbb86',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
    cityName.innerHTML=city


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
        .then(response=>response.json())
        .then((response)=>{

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct 
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset      

        })
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
        .then(response=>response.json())
        .then((response)=>{

            console.log(response)

            cloud_pctdelhi.innerHTML = response.cloud_pct 
            tempdelhi.innerHTML = response.temp
            feels_likedelhi.innerHTML = response.feels_like
            humiditydelhi.innerHTML = response.humidity
            min_tempdelhi.innerHTML = response.min_temp
            max_tempdelhi.innerHTML = response.max_temp
            wind_speeddelhi.innerHTML = response.wind_speed
            sunrisedelhi.innerHTML = response.sunrise
            sunsetdelhi.innerHTML = response.sunset      

        })
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
        .then(response=>response.json())
        .then((response)=>{

            console.log(response)

            cloud_pctbangalore.innerHTML = response.cloud_pct 
            tempbangalore.innerHTML = response.temp
            feels_likebangalore.innerHTML = response.feels_like
            humiditybangalore.innerHTML = response.humidity
            min_tempbangalore.innerHTML = response.min_temp
            max_tempbangalore.innerHTML = response.max_temp
            wind_speedbangalore.innerHTML = response.wind_speed
            sunrisebangalore.innerHTML = response.sunrise
            sunsetbangalore.innerHTML = response.sunset      

        })
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
        .then(response=>response.json())
        .then((response)=>{

            console.log(response)

            cloud_pcttokyo.innerHTML = response.cloud_pct 
            temptokyo.innerHTML = response.temp
            feels_liketokyo.innerHTML = response.feels_like
            humiditytokyo.innerHTML = response.humidity
            min_temptokyo.innerHTML = response.min_temp
            max_temptokyo.innerHTML = response.max_temp
            wind_speedtokyo.innerHTML = response.wind_speed
            sunrisetokyo.innerHTML = response.sunrise
            sunsettokyo.innerHTML = response.sunset      

        })
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
        .then(response=>response.json())
        .then((response)=>{

            console.log(response)

            cloud_pctnewyork.innerHTML = response.cloud_pct 
            tempnewyork.innerHTML = response.temp
            feels_likenewyork.innerHTML = response.feels_like
            humiditynewyork.innerHTML = response.humidity
            min_tempnewyork.innerHTML = response.min_temp
            max_tempnewyork.innerHTML = response.max_temp
            wind_speednewyork.innerHTML = response.wind_speed
            sunrisenewyork.innerHTML = response.sunrise
            sunsetnewyork.innerHTML = response.sunset      

        })
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
        .then(response=>response.json())
        .then((response)=>{

            console.log(response)

            cloud_pctlondon.innerHTML = response.cloud_pct 
            templondon.innerHTML = response.temp
            feels_likelondon.innerHTML = response.feels_like
            humiditylondon.innerHTML = response.humidity
            min_templondon.innerHTML = response.min_temp
            max_templondon.innerHTML = response.max_temp
            wind_speedlondon.innerHTML = response.wind_speed
            sunriselondon.innerHTML = response.sunrise
            sunsetlondon.innerHTML = response.sunset      

        })
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris', options)
        .then(response=>response.json())
        .then((response)=>{

            console.log(response)

            cloud_pctparis.innerHTML = response.cloud_pct 
            tempparis.innerHTML = response.temp
            feels_likeparis.innerHTML = response.feels_like
            humidityparis.innerHTML = response.humidity
            min_tempparis.innerHTML = response.min_temp
            max_tempparis.innerHTML = response.max_temp
            wind_speedparis.innerHTML = response.wind_speed
            sunriseparis.innerHTML = response.sunrise
            sunsetparis.innerHTML = response.sunset      

        })
    .catch(err=>console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Hisar")