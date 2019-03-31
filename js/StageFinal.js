//préparé par l'étudiant : Chrisphonte E Vladimir
//ID: 2015-23-208
//Collège Montmorency
//======== JavaScript - POO - AJAX ====================
var payHeadline = document.querySelector("#headline");
var payHeader = document.getElementById("header");
var payNav = document.querySelector("#navheader");

//constructor function with parameters
function Persons(fullName, jobTitle, niveauEtud) {
  this.fullName = fullName;
  this.id = jobTitle;
  this.college = niveauEtud;
  //this: stand by for all new instance
  this.displPers =
    "<br/>Étudiant : " +
    this.fullName +
    " " +
    "<br/>ID: " +
    this.id +
    "<br/> " +
    this.college;
}
//create new object instance of parent construtor function
//using the operator 'new' to create a new intance of the _class_objectPersons
var pers1 = new Persons(
  "Chrisphonte E Vladimir",
  "2015-23-208",
  "Collège Montmorency"
);
//render student info
payHeadline.innerHTML = pers1.displPers;

//render Home_navbar_index
var nav = ` <h1>Rapport Final de Stage</h1>
  <h4>Lieu: Intelligence Industrielle</h4>
  <h4>Du 7 janvier au 19 avril 2019</h4>
  `;
payHeader.innerHTML = nav;

var compnav = ` <a href="./index.html">Home</a> | <a href="./component/about.html"
>À propos</a> | <a href="./component/contact.html"
>Profil</a>`;
payNav.innerHTML = compnav;
