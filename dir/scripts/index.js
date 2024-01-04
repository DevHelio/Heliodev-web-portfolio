//Making the dropdown menu in mobile mode functional
document
  .getElementById("DropDownButton")
  .addEventListener("click", function () {
    console.log("Clicked on dropdown");
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
  console.log("DropDown");
  document.getElementById("DropDownMenuList").style.display = "none";
});

////////////////////////////////////////
