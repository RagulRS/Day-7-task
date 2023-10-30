const URL = "https://restcountries.com/v3.1/all";

const myreq = new XMLHttpRequest();
myreq.addEventListener("load", function () {
    const obj = JSON.parse(this.response);

    const totalPopulation = obj.reduce((total, country) => {
        
            return total + country.population;
       
    }, 0);

    console.log("Total population of countries  " + totalPopulation);
});

myreq.open("GET", URL);
myreq.send();
