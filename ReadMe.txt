Getting Started:

I will need to use fetch to get data from the openweather API.
How to write the fetch Request

Fetch(url)
    .then (result => result.json())
    .then (data => console.log(data))