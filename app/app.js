import * as MODEL from "../model/model.js";

function listAllNames() {
  //   MODEL.getAllNames();
}

function initListeners() {
  //   listAllNames();
  $("nav a").on("click", (e) => {
    let btnID = e.currentTarget.id;
    MODEL.changePage(btnID);
  });
}

$(document).ready(function () {
  MODEL.changePage("home");
  //you dont have to manually click on the pages u can change the word "home" to "about" etc to switch between pages from the code itself
  initListeners();
});
