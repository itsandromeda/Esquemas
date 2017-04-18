/*global document*/

var mainContainer = document.createElement("div"),
    slategray = document.createElement("div"),
    khakhi = document.createElement("div"),
    darkKhakhi = document.createElement("div"),
    sienna = document.createElement("div"),
    sandybrown = document.createElement("div"),
    indianRed = document.createElement("div");

mainContainer.classList.add("wrapper");

slategray.classList.add("big-box");
slategray.setAttribute("id", "slategray");

khakhi.classList.add("mid-box");
khakhi.setAttribute("id", "khakhi");

darkKhakhi.classList.add("small-box");
darkKhakhi.setAttribute("id", "dark-khakhi");

sienna.classList.add("big-box");
sienna.setAttribute("id", "sienna");

sandybrown.classList.add("mid-box");
sandybrown.setAttribute("id", "sandybrown");

indianRed.classList.add("small-box");
indianRed.setAttribute("id", "indian-red");

mainContainer.appendChild(slategray);
slategray.appendChild(khakhi);
khakhi.appendChild(darkKhakhi);
mainContainer.appendChild(sienna);
sienna.appendChild(sandybrown);
sienna.appendChild(indianRed);
document.body.appendChild(mainContainer);