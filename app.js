let loader = document.getElementById('loader');
let imgs = document.getElementById('img_sec');
let btn_s = document.getElementById('btn_s');
let input_s = document.getElementById('search_i');
let photosA = [];

 imgs.style.visibility="hidden";
setTimeout(()=>{
loader.hidden=true;
imgs.style.visibility="visible";
      gsap.from(".ani", {
  opacity: 0, 
  y: 50, 
  duration: 1
  
})
},3000);

window.onload = ()=>{

        
const apikey = '25622554-dd9ba4c917d8a34fc21a583d4'
// let hits = 20;
const api = `https://pixabay.com/api/?key=${apikey}&image_type=photo`;
// const api = `https://pixabay.com/api/?key=${apikey}&image_type=photo`;
// console.log(fetch(api));
// let photosA = [];
async function loadImg(){
    try{
        let res = await fetch(api);
        console.log(res);
        let photos = await res.json();
        
        photosA = photos.hits;
        console.log(photosA);
        load();
    }catch(err){
        console.log("error found : ",err);
    }
}
loadImg();

let img_p = document.getElementById('img_p');
// let item = document.getElementById('item');
function load(){
    


    photosA.forEach(element => {
        let an = document.createElement('a');
    an.setAttribute('href',element.pageURL);
    let img = document.createElement('img');

        img.setAttribute('src',element.largeImageURL);
        // console.log(element.largeImageURL);
        img.classList.add("pu");

        img.classList.add("ani");
        an.appendChild(img);
        img_p.appendChild(an);
    });
}

        gsap.from(".ani", {opacity: 0, y: 50, duration: 1});



}

btn_s.addEventListener('click',()=>{

     
 
    if(input_s.value){

            let input_value = input_s.value;

console.log(input_value);
    
const apikey = '25622554-dd9ba4c917d8a34fc21a583d4'
// let hits = 20;
const api = `https://pixabay.com/api/?key=${apikey}&q=${input_value}&image_type=photo`;
// const api = `https://pixabay.com/api/?key=${apikey}&image_type=photo`;
// console.log(fetch(api));
async function loadImg(){
    try{
        let res = await fetch(api);
        console.log(res);
        let photos = await res.json();
        
        photosA = photos.hits;
        console.log(photosA);
        load();
    }catch(err){
        console.log("error found : ",err);
    }
}


        

loadImg();



    }else{

        alert('Please enter something in search box !!!');
    }



    



let img_p = document.getElementById('img_p');
// let item = document.getElementById('item');
function load(){
    
    
    

    photosA.forEach(element => {
        let an = document.createElement('a');
    an.setAttribute('href',element.pageURL);
    let img = document.createElement('img');

        img.setAttribute('src',element.largeImageURL);
        // console.log(element.largeImageURL);
        img.classList.add("pu");

        img.classList.add("ani");



        an.prepend(img);
        img_p.prepend(an);

    });
}
//         imgs.style.visibility="hidden";
// setTimeout(()=>{
// loader.hidden=true;
// imgs.style.visibility="visible";
//       gsap.from(".ani", {
//   opacity: 0, 
//   y: 50, 
//   duration: 1
  
// })
// },3000);
        
        gsap.from(".ani", {opacity: 0, y: 50, duration: 1});

    
});

