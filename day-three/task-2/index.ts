async function request(url: string){
    try {
        const response = await fetch(url);
        if (response.ok) {
            return response.json();
        } else {
            return new Error(`Error ${response.status}: ${response.statusText}`);
        }
    } catch(error) {
        console.error("Error", error);
    }
}

request('https://api.openweathermap.org/data/2.5/weather?q=London&appid=121b99524c6ee2041f69964391811935')
    .then((result)=>console.log(result));
