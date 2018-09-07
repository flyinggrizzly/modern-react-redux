const API_KEY = 'f97954cae09a9dee1a38a1f46d9e8343';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?';
const AUTHENTICATED_URL = `${ROOT_URL}appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city) {
  const url = `${AUTHENTICATED_URL}&q=${city},uk`;


  return {
    type: FETCH_WEATHER,
    payload: null
  }
}
