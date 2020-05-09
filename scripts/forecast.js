const key = 'qEM5zIGDv4POEZGASmbBpXVdvjDQBpbi';

// Get weather information

const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';

    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);

    const data = await response.json();

    return data[0];
};

getWeather('249758')

// Get city information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'

    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);

    const data = await response.json();

    return data[0]
};

// getCity('amsterdam')
//     .then(data => {
//         return getWeather(data.Key);
//     }).then(data => {
//         console.log(data)
//     })
//     .catch(err => console.log(err))