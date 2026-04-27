const form = document.getElementById("postForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      body: body
    })
  })
  .then(response => response.json())
  .then(data => {
    message.innerText = "Post submitted successfully!";
    form.reset();
  })
  .catch(error => {
    message.innerText = "Error submitting post";
  });
});