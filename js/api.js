axios.get('https://cmgt.hr.nl:8000/api/projects/')
  .then(response => {
    const projects = response.data.projects;
    // console.log(`GET list users`, projects);
    var text = "";
    var i;
    //projects.map(project => {})
    for (i = 0; i < projects.length; i++) {
      text += "<h2> Project " + projects[i].title + "</h2>" + "<p>" + projects[i].tagline + "</p><br>";
    //   console.log(projects[i].title);
    }
    document.getElementById("demo").innerHTML = text;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
});

axios.get('https://cmgt.hr.nl:8000/api/projects/tags')
  .then(response => {
    const tags = response.data.tags;
    // console.log(`GET list users`, tags);
    var text = "";
    var i;
    for (i = 0; i < tags.length; i++) {
      text += "<p>" + tags[i] + "</p>";
      // console.log(tags[i]);
    }
    document.getElementById("tags").innerHTML = text;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
}); 



// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}