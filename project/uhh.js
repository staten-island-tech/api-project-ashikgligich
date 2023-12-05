
function greet(name) {
const greetPromise = new Promise(function (resolve, reject) {
    return('hello ${name}');
});
return greetPromise
}

const Ash = greet("ash");
console.log(Ash);
Ash.then((result)=>{
    console.log(result);
});


const URL = `mmmmmm`;

async function getData(URL){
    try{
        const responce = await fetch(URL);
        if(responce.status != 200){
            throw new Error(responce.statusText);
        }
        console.log(responce);
        const data = await responce.json();
        console.log(data);
    } catch(error){
        document.querySelector("h1").textContent = data.content;
    }
}
getData(URL);


