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

//tapping on white part (div) "DropDownMenuList" to make the menu dissapear
document.getElementById("DropDownMenuList").addEventListener("click", () => {
  document.getElementById("DropDownMenuList").style.display = "none";
});

////////////////////////////////////////

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const changeSmile = async (ms) => {
  while (true) {
    document.getElementById("MyName").innerHTML = `Hélio <b>:)</b>`;
    await delay(ms);
    document.getElementById("MyName").innerHTML = `Hélio <b>:(</b>`;
    await delay(ms);
  }
};

changeSmile(3500);
