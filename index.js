const btnEL = document.getElementById('btn');
const animeContainerEL = document.querySelector('.anime-container');
const imgEL = document.querySelector(".anime-img");
const animeNameEL = document.querySelector(".anime-name");

 btnEL.addEventListener('click',async function(){
    try{
        btnEL.disabled = true;
        btnEL.innerText = "loading..."
        animeNameEL.innerText = "Updating..."
        imgEL.src = "spinner.svg";
        const response = await fetch("https://api.catboys.com/img")
        const data = await response.json();
        btnEL.disabled =false;
        btnEL.innerText = "Get Anime";
        // console.log(data);
        animeContainerEL.style.display = 'block';
        imgEL.src =data.url;
        animeNameEL.innerText =data.artist;

    }catch(error){
        console.log(error);
        btnEL.disabled = false;
        btnEL.innerText ="Get Anime";
        animeNameEL.innerText = "An error happened ,please try again";

    }
 })