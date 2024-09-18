const clientId = 'd9dadeb08e1a430897bd261da04bc77d';
const clientSecret = '2530b1ebfe804cf497603a2accc6939d';
let accessToken = '';

async function getAccessToken() {
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await result.json();
    accessToken = data.access_token;
}

async function searchSpotify(query) {
    const result = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    });
    const data = await result.json();
    displayResults(data.tracks.items);
}

function displayResults(tracks) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    tracks.forEach(track => {
        const trackHtml = `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img src="${track.album.images[0].url}" class="card-img-top" alt="${track.name}">
                    <div class="card-body">
                        <h5 class="card-title">${track.name}</h5>
                        <p class="card-text">${track.artists[0].name}</p>
                        <audio controls>
                            <source src="${track.preview_url}" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
            </div>
        `;
        resultsDiv.innerHTML += trackHtml;
    });
}

document.getElementById('search').addEventListener('input', function (e) {
    const query = e.target.value;
    if (query.length > 2) {
        searchSpotify(query);
    }
});

getAccessToken();
