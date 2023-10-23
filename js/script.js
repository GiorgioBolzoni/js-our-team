/*

<div class="col-4">
        <div class="card text-start">
          <img class="card-img-top" src="img/team/fuffy.jpg" alt="Title">
          <div class="card-body">
            <h4 class="card-title">Fuffy</h4>
            <p class="card-text">Caratteristiche</p>
          </div>
        </div>
</div>
*/

"use strict";

const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        picture: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        picture: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        picture: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg",
    },
];

// console.log(team[0].name, team[0].role, team[0].picture)
// console.log(team[1].name, team[1].role, team[1].picture)
// console.log(team[2].name, team[2].role, team[2].picture)
// console.log(team[3].name, team[3].role, team[3].picture)
// console.log(team[4].name, team[4].role, team[4].picture)
// console.log(team[5].name, team[5].role, team[5].picture)

const rowEl = document.querySelector(".row");
console.log(rowEl);

for (let i = 0; i < team.length; i++) {
    printCol(team[i]);
}

function printCol(member) {
    const col = document.createElement("div");
    col.classList.add("col-4");
    const template = `
          <div class="card text-start my-2">
            <img class="card-img-top" src="img/${member.picture}" alt="Title">
            <div class="card-body">
              <h4 class="card-title text-center">${member.name}</h4>
              <p class="card-text text-center">
              ${member.role}
              </p>
              </div>
          </div>
      `;
    col.innerHTML = template;

    rowEl.append(col);
}