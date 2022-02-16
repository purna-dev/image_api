let loader = document.getElementById('loader');
let imgs = document.getElementById('img_sec');
const key = 'nPNuOv1XKedA1LF4rqAiliUWHHBFY8saptWeeoDJTc0';
const count = 10;
const api = `https://api.unsplash.com/photos/random/?client_id=${key}&count=${count}`;
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
// console.log();
let photoArray = [];
let img_p = document.getElementById('img_p');
let item = document.getElementById('item');
async function imgload(){
    let ab = document.getElementById("ani");
    try{
    let res = await fetch(api);
    // body:JSON.stringify();
    // console.log(res); 
    photoArray = await res.json();

    imgloading(photoArray);
    // console.log(data.urls.regular);
    // ab.setAttribute("src",data.urls.regular); 
    
    }
    catch(error){
        console.log("error found",error);
    }
}
imgload();
 
function imgloading(photoArray){
    let img = document.createElement('img');
    
    
    // let img = document.createElement('img');
    // for(let i=0;i<=10;i++){
    //     console.log(photoArray[i].urls.regular);
        
    //     img.setAttribute('src',photoArray[i].urls.regular);
    //     img.classList.add("ani");
    //     img_p.appendChild(img);
    //     imgs.appendChild(img_p);

    // }
    photoArray.forEach(element => {

        
        img.setAttribute('src',element.urls.regular);
        img.classList.add("ani");
        item.appendChild(img);
        img_p.appendChild(item);
    });

    
}