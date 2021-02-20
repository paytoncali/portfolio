const button1Src = "https://paytoncali.github.io/Code-Quiz/";
const button2Src = "https://damiandeleon.github.io/vacation_planner/";
const button3Src = "https://paytoncali.github.io/weather-app/"
const buttonEl1 = document.querySelector("#homework1");
const buttonEl2 = document.querySelector("#homework2");
const buttonEl3 = document.querySelector("#homework3");

const a1 = document.createElement('a');
a1.setAttribute("href", button1Src);
a1.innerHTML = "Code Quiz";
buttonEl1.append(a1);

const a2 = document.createElement('a');
a2.setAttribute("href", button2Src);
a2.innerHTML = "Vacation Planner";
buttonEl2.append(a2);

const a3 = document.createElement('a');
a3.setAttribute("href", button3Src);
a3.innerHTML = "Weather Forecast";
buttonEl3.append(a3);

// var link = "http://google.com";
// var element = document.createElement("a");
// element.setAttribute("href", link);
// element.innerHTML = "your text";