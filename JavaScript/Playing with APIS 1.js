let data = fetch('https://jsonplaceholder.typicode.com/users')

let main = document.querySelector('.main')
// console.log(data)
data.then((data) => {
  // console.log(data.json())
  let json_data = data.json()
  json_data.then((data) => {
    
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

      main.innerHTML += card;

    });

  }).catch(err => {
    console.log(err)
  })
}).catch(err => {
  console.log(err)
})