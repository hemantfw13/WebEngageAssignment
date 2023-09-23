axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    const users = response.data;
    const template = document.getElementById("template").innerHTML;
    const rendered = nunjucks.renderString(template, {
      users,
    });
    document.getElementById("list").innerHTML = rendered;
  })
  .catch((error) => console.error(error));
