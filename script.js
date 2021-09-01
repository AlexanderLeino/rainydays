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
var searchBtn = document.getElementById('searchbtn').addEventListener('submit',function getUserResponse(event){
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
var url = "https://api.openweathermap.org/data/2.5/forecast?q=New+York&units=imperial&appid=18c94be380dd6c1b79b8d296cad1794d"
currentDate = document.getElementById('currentday').innerText= `(${currentDay})`


fetch(url)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)
    retrieveData(data)
}
)
function getUserResponse(){
    var userLocationInput = document.getElementById('userLocationInput').value
    console.log(userLocationInput)
    cityPicked.innerText=userLocationInput
    
   
    
}   
function retrieveData (data){
    console.log(data.list[0].main.temp)
}
