apikey="a629321d1bdd7f0bc40423c62f3c0f3e"

var button=document.querySelector(".button")
var inputvalue=document.querySelector(".inputValue")
var name1=document.querySelector(".name")
var desc=document.querySelector(".desc")
var temp=document.querySelector(".temp")
    
button.addEventListener("click",function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputvalue.value+
    "&appid="+apikey+"&units=metric")
        .then(Response=>Response.json())
        .then(data=>{
            var nameValue=data['name']
            var tempValue=data["main"]['temp']
            var descValue=data["weather"][0]['main']
            var iconValue=data["weather"][0]['icon']
            name1.innerHTML=nameValue
            temp.innerHTML=Math.round(tempValue)+"°C"
            desc.innerHTML=descValue
            document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+iconValue+"@2x.png"
            console.log(data)
        })


    .catch(err=>alert("Wrong City!Enter a Correct City"))
    fetch("https://pixabay.com/api/?key=31607599-89fa6d790daae6d87152ac3d8&per_page=200")
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            const imgae=result.hits[Math.round(Math.random() * 200)].largeImageURL
            console.log(imgae)
            document.body.style.backgroundImage=`url(${imgae})`
            
        })
    
})

