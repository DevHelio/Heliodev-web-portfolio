//Making the dropdown menu in mobile mode functional
document
  .getElementById("DropDownButton")
  .addEventListener("click", function () {
    document.getElementById("DropDownMenuList").style.display = "flex";

    let DropDownMenuList_Items =
      document.getElementById("DropDownMenuList").children;

    for (kid in DropDownMenuList_Items) {
      DropDownMenuList_Items[kid].addEventListener("click", () => {
        document.getElementById("DropDownMenuList").style.display = "none";
      });
    }
  });

//Smooth scrolling on local anchors :)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//tapping on white part (div) "DropDownMenuList" to make the menu dissapear
document.getElementById("DropDownMenuList").addEventListener("click", () => {
  document.getElementById("DropDownMenuList").style.display = "none";
});

////////////////////////////////////////

////////////////////////////////////////
// looping code should go to the end of the end of this file
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const changeSmile = async (ms) => {
  while (true) {
    document.getElementById("MyName").innerHTML = `Hélio <b>;)</b>`;
    await delay(850);
    document.getElementById("MyName").innerHTML = `Hélio <b>:)</b>`;
    await delay(ms);
    document.getElementById("MyName").innerHTML = `Hélio <b>:(</b>`;
    await delay(ms);
  }
};

changeSmile(3500);
