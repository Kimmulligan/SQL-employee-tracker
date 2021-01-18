function generateDynamicHTML(employeeArray) {
  console.log(employeeArray);
  let staticHTML = generateStaticHTML();

  for (let index = 0; index < employeeArray.length; index++) {
    const teammate = employeeArray[index];
    console.log(teammate);
    if (teammate.title === "Manager") {
      staticHTML += `<div class="card" style="width: 18rem">
      <div id="cardHeading">
        <h5 class="card-title">${teammate.name}</h5>
        <h6 class="card-subtitle mb-2">${teammate.title}</h6>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${teammate.id}</li>
          <li class="list-group-item">Email: <a href = "mailto:${teammate.email}">${teammate.email}</a></li>
          <li class="list-group-item">Office Number: ${teammate.number}</li>
        </ul>
      </div>
    </div>`;
    } else if (teammate.title === "Engineer") {
      staticHTML += `<div class="card" style="width: 18rem">
      <div id="cardHeading">
        <h5 class="card-title">${teammate.name}</h5>
        <h6 class="card-subtitle mb-2">${teammate.title}</h6>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${teammate.id}</li>
          <li class="list-group-item">Email: <a href = "mailto:${teammate.email}">${teammate.email}</a></li>
          <li class="list-group-item">Github: <a href = "https://github.com/${teammate.github}">${teammate.github}</a></li>
        </ul>
      </div>
    </div>`;
    }else if (teammate.title === "Employee") {
      staticHTML += `<div class="card" style="width: 18rem">
      <div id="cardHeading">
        <h5 class="card-title">${teammate.name}</h5>
        <h6 class="card-subtitle mb-2">${teammate.title}</h6>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${teammate.id}</li>
          <li class="list-group-item">Email: <a href = "mailto:${teammate.email}">${teammate.email}</a></li>
          <li class="list-group-item">Github: <a href = "https://github.com/${teammate.github}">${teammate.github}</a></li>
        </ul>
      </div>
    </div>`;
    }
    else
    {
      staticHTML += `<div class="card" style="width: 18rem">
      <div id="cardHeading">
        <h5 class="card-title">${teammate.name}</h5>
        <h6 class="card-subtitle mb-2">${teammate.title}</h6>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${teammate.id}</li>
          <li class="list-group-item">Email: <a href = "mailto:${teammate.email}">${teammate.email}</a></li>
          <li class="list-group-item">School: ${teammate.school}</li>
        </ul>
      </div>
    </div>`
    }
  }
  staticHTML += `</section></main></body></html>`
  console.log(staticHTML);
  return staticHTML


}
function generateStaticHTML() {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <style>
      section{
        display: flex;
      }
      .card
    {
      margin: 0 15px;
    }
      #header {
        background: red;
        text-align: center;
        color: white;
      }
      #cardHeading {
        background: rgb(13, 86, 110);
        color: white;
        padding: 15px;
      }
    </style>
  </head>
  <body>
    <main>
      <div class="jumbotron" id="header">
        <h1 class="display-4">My Team</h1>
      </div>
      <section class="container-fluid">
  `;
}
//

module.exports = generateDynamicHTML;
