let data = fetch('https://jsonplaceholder.typicode.com/posts')

let main = document.querySelector('.main')
// console.log(data)
data.then((data) => {
  // console.log(data.json())
  let json_data = data.json()
  json_data.then((data) => {
    
    data.forEach(obj => {
      let post = `
      
        <div class="post-card">
          <div class="post-title">
            ${obj.title}
          </div>
          <div class="post-body">
            ${obj.body}
          </div>
          <div class="post-meta">
            User ID: ${obj.userId} | Post ID: ${obj.id}
          </div>
        </div>

      `;

      main.innerHTML += post;

    });

  }).catch(err => {
    console.log(err)
  })
}).catch(err => {
  console.log(err)
})


