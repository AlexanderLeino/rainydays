//The user has the option of selecting either a preselected city or by typing their own city
// When the user clicks on either the search button or the preselected options it will run a function that will either retrieve the value in input box or it will use the data from one of the preselect options.
// If the user entered their own city it will firstly check to see if it exists if it doesnt exist it will give an alert popup saying please entered a different city name. 
// IF the city matches directory then it will run a function that will generate the html elements form 
var cityPicked = document.getElementById('cityPicked')
var austinTx = document.getElementById('austin')
var chicagoIl = document.getElementById('chicago')
var newYork = document.getElementById('newYork')
var orlando = document.getElementById('orlando')
var sanFrancisco = document.getElementById('sanFrancisco')
var seattle = document.getElementById('seattle')
var denver = document.getElementById('denver')
var atlanta = document.getElementById('atlanta')
var weatherIcon1 = document.getElementById('weather-icon1')
var weatherIcon2 = document.getElementById('weather-icon2')
var weatherIcon3 = document.getElementById('weather-icon3')
var weatherIcon4 = document.getElementById('weather-icon4')
var weatherIcon5 = document.getElementById('weather-icon5')




var searchBtn = document.getElementById('searchbtn').addEventListener('click',function getUserResponse(event){
    event.preventDefault()
})
var userResponse
austinTx.addEventListener('click', getUserResponse)
chicagoIl.addEventListener('click', getUserResponse)
newYork.addEventListener('click', getUserResponse)
orlando.addEventListener('click', getUserResponse)
sanFrancisco.addEventListener('click', getUserResponse)
seattle.addEventListener('click', getUserResponse)
denver.addEventListener('click', getUserResponse)
atlanta.addEventListener('click', getUserResponse)
var currentDay = moment().format("L")
currentDate = document.getElementById('currentday').innerText= `(${currentDay})`


function getUserResponse(){
    var userLocationInput = document.getElementById('userLocationInput').value
    if (userLocationInput){
        cityPicked.innerText=userLocationInput
        retrieveData(userLocationInput)
        document.getElementById('userLocationInput').value = ''
        
    }
    else {
        cityPicked.innerText = userResponse
        retrieveData(userResponse)
    }
}



function retrieveData (userPick){
    console.log(userPick)
    
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + userPick + "&units=imperial&appid=18c94be380dd6c1b79b8d296cad1794d"
    fetch(url)
    .then(function (response) {
        if (response.ok){
            
            return response.json();
        }
        else {
            alert('Please insert a valid City Name')
        }
    })
    .then(function (data) {
        console.log(data)
        updateHTMLPage(data)
    }
    )
    if(userLocationInput){
        userLocationInput.value = ''
        userLocationInput = ""
    }
}   
function updateHTMLPage(data) {
    currentTemp = document.getElementById('currentTemp').innerText = data.list[0].main.temp
    currentWind = document.getElementById('currentWind').innerText = data.list[0].wind.speed + 'MPH'
    currentHumidity = document.getElementById('currentHumidity').innerText = data.list[0].main.humidity + '%'
    console.log(data.list[0].main.temp)
   
    // Card 1 Information

    dateDay1 = document.getElementById('dateDay1').innerText = moment().add(1, 'days').format('L')
    day1Temp = document.getElementById('day1Temp').innerText = data.list[1].main.temp
    day1Wind = document.getElementById('day1Wind').innerText = data.list[1].wind.speed + 'MPH'
    day1Humidity = document.getElementById('day1Humidity').innerText = data.list[1].main.humidity + '%'
    var iconCode = data.list[0].weather[0].icon
    var iconUrl = ("http://openweathermap.org/img/w/" + iconCode + ".png");
    var iconImage = document.createElement('img')
    iconImage.setAttribute('src', iconUrl)
    iconImage.setAttribute('alt','An icon representative of type of weather for this particular day.')
    weatherIcon1.appendChild(iconImage)
    
    //Card 2 Information

    dateDay2 = document.getElementById('dateDay2').innerText = moment().add(2, 'days').format('L')
    day2Temp = document.getElementById('day2Temp').innerText = data.list[2].main.temp
    day2Wind = document.getElementById('day2Wind').innerText = data.list[2].wind.speed + 'MPH'
    day2Humidity = document.getElementById('day2Humidity').innerText = data.list[2].main.humidity + '%'
    var iconCode1 = data.list[1].weather[0].icon
    var iconUrl = ("http://openweathermap.org/img/w/" + iconCode1 + ".png");
    var iconImage1 = document.createElement('img')
    iconImage1.setAttribute('src', iconUrl)
    iconImage1.setAttribute('alt','An icon representative of type of weather for this particular day.')
    weatherIcon2.appendChild(iconImage1)
   
    // Card 3 Information

dateDay3 = document.getElementById('dateDay3').innerText = moment().add(3, 'days').format('L')
day3Temp = document.getElementById('day3Temp').innerText = data.list[3].main.temp
day3Wind = document.getElementById('day3Wind').innerText = data.list[3].wind.speed + 'MPH'
day3Humidity = document.getElementById('day3Humidity').innerText = data.list[3].main.humidity + '%'
var iconCode3 = data.list[2].weather[0].icon
    var iconUrl = ("http://openweathermap.org/img/w/" + iconCode3 + ".png");
    var iconImage3 = document.createElement('img')
    iconImage3.setAttribute('src', iconUrl)
    iconImage3.setAttribute('alt','An icon representative of type of weather for this particular day.')
    weatherIcon3.appendChild(iconImage3)

//Card 4 Information

dateDay4 = document.getElementById('dateDay4').innerText = moment().add(4, 'days').format('L')
day4Temp = document.getElementById('day4Temp').innerText = data.list[4].main.temp
day4Wind = document.getElementById('day4Wind').innerText = data.list[4].wind.speed + 'MPH'
day4Humidity = document.getElementById('day4Humidity').innerText = data.list[4].main.humidity + '%'
var iconCode4 = data.list[4].weather[0].icon
    var iconUrl = ("http://openweathermap.org/img/w/" + iconCode4 + ".png");
    var iconImage4 = document.createElement('img')
    iconImage4.setAttribute('src', iconUrl)
    iconImage4.setAttribute('alt','An icon representative of type of weather for this particular day.')
    weatherIcon4.appendChild(iconImage4)
//Card 5 Information
dateDay5 = document.getElementById('dateDay5').innerText = moment().add(5, 'days').format('L')
day1Temp = document.getElementById('day5Temp').innerText = data.list[5].main.temp
day1Wind = document.getElementById('day5Wind').innerText = data.list[5].wind.speed + 'MPH'
day1Humidity = document.getElementById('day5Humidity').innerText = data.list[5].main.humidity + '%'
var iconCode5 = data.list[5].weather[0].icon
    var iconUrl = ("http://openweathermap.org/img/w/" + iconCode5 + ".png");
    var iconImage5 = document.createElement('img')
    iconImage5.setAttribute('src', iconUrl)
    iconImage5.setAttribute('alt','An icon representative of type of weather for this particular day.')
    weatherIcon5.appendChild(iconImage5)

}
