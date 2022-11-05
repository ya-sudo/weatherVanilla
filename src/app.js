let query = "Lisbon";
let apiKey = "6635c3cd0efte3e3f8002aa10416bo29";

let apiCall = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}`;

console.log(axios.get(apiCall));
