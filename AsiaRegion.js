const URL = "https://restcountries.com/v3.1/all";

const myreq = new XMLHttpRequest();
myreq.addEventListener("load", function () {
    const obj = JSON.parse(this.response);
    const asiaCountries = obj.filter(country => country.region === "Asia");

     for (let country of asiaCountries) {
        console.log("Country: " + country.name.common );
    } 
});

myreq.open("GET", URL);
myreq.send();
