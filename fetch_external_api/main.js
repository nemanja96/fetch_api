document.getElementById("btn").addEventListener("click", getPosts);

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
      let output = "";

      posts
        .forEach((post) => {
          output += `
                <div class="posts">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
        })
        .catch((err) => console.log(err));

      document.getElementById("posts").innerHTML = output;
    });
}
