const DOMSelectors = {
  form: document.getElementById("form"),
  firstName: document.querySelector(".first-name"),
  cardTitle: document.querySelector(".card-title"),
  cardData: document.querySelector(".card-data"),
  
};

console.log(DOMSelectors);

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  //alert("here");
  //console.log(DOMSelectors.firstName.value);

 
  //DOMSelectors.h2s.forEach((el) => {
  //  el.textContent = DOMSelectors.firstName.value;
  

  var date = `${DOMSelectors.firstName.value}-${DOMSelectors.cardTitle.value}-${DOMSelectors.cardData.value}`;
console.log(date);

// api key naza2 = eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUZWNoUG9ydCIsImV4cCI6MTcwMzA4MDU0OCwibmJmIjoxNzAyOTk0MTQ4LCJTRVNTSU9OX0lEIjoiN1FxVmkwOFE5aTNSRDljNWQ0Zm04WHpzMXhIR0JYd2pwck4xIiwiRklOR0VSUFJJTlRfSEFTSCI6IjQ4MjdBRUEzMjJEOEI5QjgzODFGNTA5NEU3NkYxOUVGNUQ1QTVFNUM4MTk4RDIxQzBEMEE5MjAwOUY4OTdFMUMifQ.vVeiqyD3156_q7jkN1ZJi_y0K94COfseX9M7rR-PdaM

const URL2 = `https://techport.nasa.gov/api/projects?updatedSince=${date}`;

var prjz;  

async function getData2(URL2) {
  try {
    const responce = await fetch(URL2);
    if (responce.status != 200) {
      throw new Error(responce.statusText);
    }
    console.log(responce);
    let data = await responce.json();
    
    prjz = data.projects.slice(0,5);

    console.log('a');
    console.log(prjz);
    console.log('b');

    return prjz;
;
  //  console.log(Array.projects.projectId);
  } catch (error) {
    console.error("Error fetching data:", error);
    document.querySelector("h2").textContent = "Error fetching NASA data";
  }
  // fireship
}

var q = getData2(URL2).then(prj => {

  console.log('c')
  console.log(prj)
  
  
  prj.forEach(p => {
    console.log('d')
    console.log(p);
    console.log(p.projectId);
    console.log('e')
    getData3(p.projectId).then(data => { 
      console.log('f'); 
      p.proj = data;
      console.log(data);      
      console.log(p); 
      displayInfo(p);
    });    
  });
  
})

function displayInfo(prj)
{
    document.querySelector(".flex-container").insertAdjacentHTML(
      "afterbegin",
      `<div class="grow" id="grow">
        <div id="animation1">
          <img
            src="${prj.projectId}"
            alt="F44"
          />
          <h2>${prj.proj.project.title}</h2>
          <h4>${prj.role}</h4>
          <h6>${prj.projectId}</h6>
          <button type="button" class="delete">Delete</button>
        </div>
      </div>`
    );
    
    //var button = document.querySelector('button.delete:not(button.delete[onclick=onButtonClick])');
    //var button = document.querySelector('button.delete:not([onclick=onButtonClick])');
    //button.addEventListener('click', onButtonClick);
}


// api key naza2 = eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUZWNoUG9ydCIsImV4cCI6MTcwMzA4MDU0OCwibmJmIjoxNzAyOTk0MTQ4LCJTRVNTSU9OX0lEIjoiN1FxVmkwOFE5aTNSRDljNWQ0Zm04WHpzMXhIR0JYd2pwck4xIiwiRklOR0VSUFJJTlRfSEFTSCI6IjQ4MjdBRUEzMjJEOEI5QjgzODFGNTA5NEU3NkYxOUVGNUQ1QTVFNUM4MTk4RDIxQzBEMEE5MjAwOUY4OTdFMUMifQ.vVeiqyD3156_q7jkN1ZJi_y0K94COfseX9M7rR-PdaM



//const URL3 = `${q.projectid}`;



async function getData3(projectid) {
  
  let a = `https://techport.nasa.gov/api/projects/${projectid}`
  
  
  try {
    const responce = await fetch(a);
    if (responce.status != 200) {
      throw new Error(responce.statusText);
    }
    console.log(responce);
    let data = await responce.json();

    console.log(data);
    return data;
  //  console.log(Array.projects.projectId);
  } catch (error) {
    console.error("Error fetching data:", error);
    document.querySelector("h2").textContent = "Error fetching NASA data";
  }
  // fireship
}

//getData3(URL3);
//;

//console.log(data);


});







function greet(name) {
  const greetPromise = new Promise(function (resolve, reject) {
    return "hello ${name}";
  });
  return greetPromise;
}

const Ash = greet("ash");
console.log(Ash);
Ash.then((result) => {
  console.log(result);
});

// api key naza = 5LF5j2deuntZyGeVIE7oLmoS1yIuhrNnrzkRRRPa
const URL = `https://api.nasa.gov/planetary/apod?api_key=5LF5j2deuntZyGeVIE7oLmoS1yIuhrNnrzkRRRPa`;

async function getData(URL) {
  try {
    const responce = await fetch(URL);
    if (responce.status != 200) {
      throw new Error(responce.statusText);
    }
    console.log(responce);
    const data = await responce.json();
    console.log(data);
    console.log(data.url);
    document.body.style.backgroundImage = `url(${data.url})`;
  } catch (error) {
    console.error("Error fetching data:", error);
   // document.querySelector("h1").textContent = "Error fetching NASA data";
  }
  // fireship
}
getData(URL);





const ash = {
  name: "ash", //string
  age: 16, //integer


};
let xx = Array.from(ash.name);
console.log(xx);

var i =7;
for(; ++i< ash.name,length;){
  console.log(ash.name[i]);

}

let ii = 0;
while( ii < ash.name.length){
  console.log(ash.name[ii]);
  ii++;
}

function needy(name, serch){
  if(name.includes(serch)){
    return true;
  }
  return false;
  }
console.log(needy(ash.name, "a"))

function needz(name, serch){
  if(name === (serch)){
    return true;
  }
  return false;  
  }

console.log(need(ash.name, "ash"))

function need(name, serch){
  if(name == (serch)){
    return true;
  }else{
    return false;
  }
  }
console.log(need(2, "2"))


function sort(name){
  let x = [...name].sort();
  console.log(x);
}
sort("yolooo");

let x = [1,2,3];
let y = [4,5,6]
let z = [...x, ...y];
let zz = {...x, ...y};
x = [...x, ...y];
console.log(z);
console.log(zz);
function rom(name){
  let x = Array.from(name);
  x.splice(-1);
  console.log(x);
  
}

