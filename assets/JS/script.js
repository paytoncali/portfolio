const button1Src = "https://paytoncali.github.io/Code-Quiz/";
const button2Src = "https://damiandeleon.github.io/vacation_planner/";
const button3Src = "https://paytoncali.github.io/weather-app/";
const button4Src = "https://arcane-harbor-21800.herokuapp.com/";
const github1 = "https://github.com/paytoncali/Code-Quiz.git";
const github2 = "https://github.com/damiandeleon/vacation_planner.git";
const github3 = "https://github.com/paytoncali/weather-app.git"
const github4 = "https://github.com/caroline-e-miller/project-2.git";

const buttonEl1 = document.querySelector("#homework1");
const buttonEl2 = document.querySelector("#homework2");
const buttonEl3 = document.querySelector("#homework3");
const buttonEl4 = document.querySelector("#homework4");

const a1 = document.createElement('a');
a1.style = "margin: 15px";
const a1Git = document.createElement('a');
a1.setAttribute("href", button1Src);
a1Git.setAttribute("href", github1)
a1.innerHTML = "Code Quiz";
a1Git.innerHTML = "GitHub Repo"
buttonEl1.append(a1)
buttonEl1.append(a1Git);

const a2 = document.createElement('a');
a2.style = "margin: 15px";
const a2Git = document.createElement('a');
a2.setAttribute("href", button2Src);
a2Git.setAttribute("href", github2)
a2.innerHTML = "Vacation Planner";
a2Git.innerHTML = "GitHub Repo";
buttonEl2.append(a2);
buttonEl2.append(a2Git);

const a3 = document.createElement('a');
a3.style = "margin: 15px";
const a3Git = document.createElement('a');
a3.setAttribute("href", button3Src);
a3Git.setAttribute("href", github3)
a3.innerHTML = "Weather Forecast";
a3Git.innerHTML = "GitHub Repo";
buttonEl3.append(a3);
buttonEl3.append(a3Git);

const a4 = document.createElement('a');
a4.style = "margin: 15px";
const a4Git = document.createElement('a');
a4.setAttribute("href", button4Src);
a4Git.setAttribute("href", github4)
a4.innerHTML = "WazeDaze";
a4Git.innerHTML = "GitHub Repo";
buttonEl4.append(a4);
buttonEl4.append(a4Git);
