const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}
const displayCountries = coutries =>{
    const contriesContainer = document.getElementById('all-countries');

    // console.log(countries);
    // for(const country of coutries){
    //     console.log(country);
    // }
    coutries.forEach(country =>{
        console.log(country.name.common);
       const countryDiv = document.createElement('div');
       countryDiv.classList.add('country');
       countryDiv.innerHTML = `<h3> Name: ${country.name.common}
       </h3>`;
       countriesContainer.appendChild(countryDiv);
    });
}
loadCountries();