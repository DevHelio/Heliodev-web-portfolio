//Making the dropdown menu in mobile mode funcional

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
