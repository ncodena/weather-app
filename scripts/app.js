const cityForm = document.querySelector('form');

const card = document.querySelector('.card');

const details = document.querySelector('.details');

const updateUI = (data) => {

    const cityDetails = data.cityDetails;

    const weather = data.weather;

    // Update details template

    details.innerHTML = `

        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
            `;

            // Removinf d-none class if present

            if(card.classList.contains('d-none')){
                card.classList.remove('d-none')
            }
};

const updateCity = async (city) => {

    const cityDetails = await getCity(city)

    const weather = await getWeather(cityDetails.Key);

    return {
        // Object shorthand notation => when we have a key and a property value that share the same name, we can delete one and it does the same thing
        cityDetails,
        weather
    };

}

cityForm.addEventListener('submit', e => {
    // Prevent default action

    e.preventDefault();

    // Get ciyty value

    const city = cityForm.city.value.trim();

    cityForm.reset()

    // Update UI with new city

    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err))
})