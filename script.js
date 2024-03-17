
var request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
var res = JSON.parse(request.response)
console.log(res);
// 1) Get all the countries from Asia continent /region using Filter function
var asia_region = res.filter((a) => a.region ==='Asia');
console.log("Countries from Asia:", asia_region);
// 2) Get all the countries with a population of less than 2 lakhs using Filter function
var population = res.filter((a) => a.population < 200000);
console.log("Countries with population less than 200,000:", population);
// 3) Print the following details name, capital, flag, using forEach function
const details = []
res.forEach(element => {
    details.push(element.name.common, element.capital,element.flag);
});
console.log("Details (Name, Capital, Flag):",details);
// 4) Print the total population of countries using reduce function
var pop = res.reduce((a,b)=>a+b.population,0);
console.log(pop);
// 5)Print the country that uses US dollars as currency.
var countriesUsingUSD = res.filter(country => {
    for (let code in country.currencies) {
        if (code === 'USD') {
            return true;
        }
    }
    return false;
}).map(country => country.name.common);

console.log("Countries using USD:", countriesUsingUSD);
}