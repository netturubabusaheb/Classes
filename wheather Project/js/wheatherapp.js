

function getData(){
    const city = document.getElementById("city").value;

 fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q='+city+'&days=3',{

	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a8224cb799msh9de07580f11552bp140c70jsnef23c17ae86b',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
})

.then(response => response.json())
.then(data => {

    console.log(data.location);

    const Wheather = document.querySelector(".report");

    var Cards = document.createElement("div");
    Cards.className = "cards";
    var card = document.createElement("div");
    card.className = "card";

    var country = document.createElement("h1");
    country.innerHTML = "Country :"+ data.location.country;
    card.appendChild(country);

    
    var region = document.createElement("h1");
    region.innerHTML = "Region :"+ data.location.region;
    card.appendChild(region);
    
    var name = document.createElement("h1");
    name.innerHTML = "Name :"+ data.location.name;
    card.appendChild(name);

    var tz = document.createElement("h1");
    tz.innerHTML = "TZ ID :"+ data.location.tz_id;
    card.appendChild(tz);

    var localtime = document.createElement("h1");
    localtime.innerHTML = "Local Time :"+ data.location.localtime;
    card.appendChild(localtime);

    var localtime_epoch = document.createElement("h1");
    localtime_epoch.innerHTML = "Local Time Epoch :"+data.location.localtime_epoch;
    card.appendChild(localtime_epoch);

    var latitude = document.createElement("h1");
    latitude.innerHTML = "Latitude :"+ data.location.lat;
    card.appendChild(latitude);

    var longitude = document.createElement("h1");
    longitude.innerHTML ="Longitude :"+ data.location.lon;
    card.appendChild(longitude);

    Cards.appendChild(card);
    Wheather.appendChild(Cards);

})
}

function Cleardata(){
    const Wheather = document.querySelector(".report");
    Wheather.innerHTML = "";
}