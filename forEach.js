const URL = "https://restcountries.com/v3.1/all";

const myreq = new XMLHttpRequest();
myreq.addEventListener("load", function () {
    const obj = JSON.parse(this.response);
    
    obj.forEach(country => {
        console.log("Name: " + country.name.common);
        console.log("Capital: " + country.capital);
        console.log("Flag: " + country.flags.svg);
    });
});

myreq.open("GET", URL);
myreq.send();
