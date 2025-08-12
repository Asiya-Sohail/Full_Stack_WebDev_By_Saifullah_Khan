async function api(params) {
  let response = await fetch('https://jsonplaceholder.typicode.com/users')
  let data = await response.json()

    data.forEach(obj => {
      let card = `
      
      <div class="card">
        <h2>${obj.username}</h2>
        <div class="info"><span class="label">Email:</span> ${obj.email}</div>
        <div class="info"><span class="label">Street:</span> ${obj.address.street}</div>
        <div class="info"><span class="label">City:</span> ${obj.address.city}</div>
        <div class="info"><span class="label">Latitude:</span> ${obj.address.geo.lat}</div>
        <div class="info"><span class="label">Longitude:</span> ${obj.address.geo.lng}</div>
      </div>

      `;

      let main = document.querySelector('.main')
      main.innerHTML += card;

    });
}


api()