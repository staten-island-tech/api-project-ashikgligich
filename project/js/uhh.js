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
    document.querySelector("h1").textContent = "Error fetching NASA data";
  }
  // fireship
}
getData(URL);

// api key naza = 5LF5j2deuntZyGeVIE7oLmoS1yIuhrNnrzkRRRPa

const URL2 = `https://techport.nasa.gov/api/projects?updatedSince=2023-11-01`;

async function getData2(URL2) {
  try {
    const responce = await fetch(URL2);
    if (responce.status != 200) {
      throw new Error(responce.statusText);
    }
    console.log(responce);
    const data = await responce.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    document.querySelector("h2").textContent = "Error fetching NASA data";
  }
  // fireship
}
getData(URL2);



const ash = {
  name: "ash", //string
  age: 16, //integer


};
let xx = Array.from(ash.name);
console.log(xx);

for(let i = 0; i< ash.name,length; i++){
  console.log(ash.name[i]);

}
let i = 0;
while( i < ash.name.length){
  console.log(ash.name[i]);
  i++;
}

function need(name, serch){
  if(name.includes(serch)){
    return true;
  }else{
    return false;
  }
  }
console.log(need(ash.name, "a"))

function need(name, serch){
  if(name === (serch)){
    return true;
  }else{
    return false;
  }
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
console.log(zz);
function rom(name){
  let x = Array.from(name);
  x.splice(-1);
  console.log(x);
  
}