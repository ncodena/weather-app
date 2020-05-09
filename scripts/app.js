const cityForm = document.querySelector('form');

const card = document.querySelector('.card');

const details = document.querySelector('.details');

const time = document.querySelector('img.time');

const icon = document.querySelector('.icon img');

const updateUI = (data) => {

    // Destructure properties

    const {cityDetails, weather} = data;

    // Update details template

    details.innerHTML = `

        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
            `;


            // Update night/day & icon images

            const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;

            icon.setAttribute('src', iconSrc)

            let timeSrc = null;

            if(weather.IsDayTime) {
                timeSrc = 'img/day.svg'
            } else {
                timeSrc = 'img/night.svg'
            }

            time.setAttribute('src', timeSrc)


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