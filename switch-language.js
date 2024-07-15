document.addEventListener("DOMContentLoaded", function() {
            lang = localStorage.getItem("lang");
            if(!lang){
              localStorage.setItem("lang","ro");
              lang="ro";
            }
            else{
              if(lang==="ro")
                document.getElementById("languageSwitch").checked = true;
              else document.getElementById("languageSwitch").checked = false;
            }
            changeLanguage();
        });
document.getElementById("languageSwitch").addEventListener("change", toggleSwitched);

function toggleSwitched(event) {
    var selectedElement = event.target;
    var isRoSelected = selectedElement.checked;
    if(isRoSelected){
        localStorage.setItem("lang","ro");
    }
    else   localStorage.setItem("lang","en");
  changeLanguage();
}

function changeLanguage() {
  var contentRo = document.getElementsByClassName("contentRo");
  var contentEn = document.getElementsByClassName("contentEn");
  lang = localStorage.getItem("lang");
  var displayRo = "block";
  var displayEn = "none";
  if (lang === "en") {
    displayRo = "none";
    displayEn = "block";
  } else {
    displayRo = "block";
    displayEn = "none";
  }
  for (var i = 0; i < contentRo.length; i++) {
      contentRo[i].style.display = displayRo; // Set your desired display value
      contentEn[i].style.display = displayEn;
    }
}
