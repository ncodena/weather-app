const cityForm = document.querySelector('form');

const updateCity = async (city) => {

    const cityDetails = await getCity(city)

    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        weather: weather
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
    .then(data => console.log(data))
    .catch(err => console.log(err))
})