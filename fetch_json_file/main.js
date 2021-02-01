document.getElementById("btn").addEventListener("click", getJson);

function getJson() {
  fetch("users.json")
    .then((res) => res.json())
    .then((users) => {
      let output = "";
      users.forEach((user) => {
        output += `<ul>
            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
          </ul>`;
      });

      document.getElementById("output").innerHTML = output;
    });
}
