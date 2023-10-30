const URL = "https://restcountries.com/v3.1/all";

const myreq = new XMLHttpRequest();
myreq.addEventListener("load", function () {
    const obj = JSON.parse(this.response);
    const filteredCountries = obj.filter(country => country.population < 200000);
    
     for (let country of filteredCountries) {
            console.log("Country Name: " + country.name.common);
            console.log("Population: " + country.population);
        }
});

myreq.open("GET", URL);
myreq.send();