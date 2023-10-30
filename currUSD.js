const URL = "https://restcountries.com/v3.1/all";

const myreq = new XMLHttpRequest();
myreq.addEventListener("load", function () {
    const obj = JSON.parse(this.response);

    for (let country of obj) {
        for (let currency of obj) {
            if (currency.currencies === "USD") {
                console.log("Country that uses US dollars as currency: " + country.name.common);
                break;
            }
        }
    }
});

myreq.open("GET", URL);
myreq.send();
