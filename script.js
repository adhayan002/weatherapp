apikey="a629321d1bdd7f0bc40423c62f3c0f3e"

var button=document.querySelector(".button")
var inputvalue=document.querySelector(".inputValue")
var name1=document.querySelector(".name")
var desc=document.querySelector(".desc")
var temp=document.querySelector(".temp")

async function image(){
    const response = await fetch("https://pixabay.com/api/?key=31607599-89fa6d790daae6d87152ac3d8&per_page=200")
    const json=await response.json()
    const imgae=json.hits[Math.round(Math.random() * 200)].largeImageURL
    document.body.style.backgroundImage=`url(${imgae})`
}


async function WeatherApp(){
    const response=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputvalue.value+
    "&appid="+apikey+"&units=metric")
    if(!response.ok){
        alert("Error: Enter a valid city name")
    }
    else{
        image()
        const json=await response.json()
        var nameValue=json['name']
        var tempValue=json["main"]['temp']
        var descValue=json["weather"][0]['main']
        var iconValue=json["weather"][0]['icon']
        name1.innerHTML=nameValue
        temp.innerHTML=Math.round(tempValue)+"°C"
        desc.innerHTML=descValue
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+iconValue+"@2x.png"
    }

}
    
button.addEventListener("click",function(){
    WeatherApp()
    
    
})
