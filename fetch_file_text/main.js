document.getElementById("getText").addEventListener("click", getText);

function getText() {
  // Without Arrow function
  // fetch("sample.txt")
  //   .then(function (res) {
  //     return res.text();
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //   });

  // Arrow Function
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("output").innerHTML = "<h1>" + data + "</h1>";
    });
}
