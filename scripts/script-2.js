const petsModule = (function(){
    const _data = [
        {
            image: "https://pet-uploads.adoptapet.com/1/6/b/406528149.jpg",
            name: "Sam",
            type: "Golden Retriever/St. Bernard Mix",
            sound: "bark",
            soundText: "Bark",
           
        },
        {
            image: "https://pet-uploads.adoptapet.com/0/f/3/462356648.jpg",
            name: "Mellie",
            type: "Domestic Shorthair",
            sound: "meow",
            soundText: "Meow", 
            key: "m"
        },
        //bonus
        {
            image: "http://www.yavrukangal.com/FileUpload/ks162834/YaziResim/711453.jpg",
            name: "Karabaş",
            type: "Sivas Kangalı",
            sound: "bark",
            soundText: "Bark",
            key: "b"
        },
        {
            image: "https://www.petburada.com/Uploads/Blog/Tekir-Kedi-aee4.jpg",
            name: "Boncuk",
            type: "Tekir",
            sound: "meow",
            soundText: "Meow",
            key: "m"
        }
    ];
    const $tbodyEl = document.querySelector("tbody");
    const $mainImage = document.querySelector(".main-image");
  
    

    const getButtons = function(){
        return document.querySelectorAll("button");
    }

    const createPetElement = function(pet){
        return "<tr class='pet-row'><td><img class='pet-image' src='"+pet.image+"' /></td><td>"+pet.name+"</td><td>"+pet.type+"</td><td><button data-sound='"+pet.sound+"'>"+pet.soundText+"</button></td></tr>"
    };

    const addToTable = function(content){
        $tbodyEl.innerHTML += content;
    }

    const putPetsInHtml = function(){
        for(let i=0; i< _data.length; i++){ 
            addToTable(createPetElement(_data[i]));
        }
    }

    const playSoundOnKeyEvent = function(){
        document.addEventListener("keydown", function (event){
            for (let i = 0; i < _data.length; i++) {
                const pet = _data[i];
                if (event.key === pet.key){
                    const animalSound = document.getElementById(pet.sound)
                    animalSound.play();
                }
            }        
        })
    }

    const getRows = function(){
        return document.querySelectorAll(".pet-row");
    }
   
    const changeRowBackground = function(){
        const rows = getRows();
        rows.forEach((row,index) => {
            console.log({index}) 
            row.addEventListener("click", function(){
                $mainImage.setAttribute("src",_data[index].image); 
                row.classList.toggle("change-background");
            });
        })
    }


    const bindEvents = function(){
        const buttons = getButtons();
        for(let i= 0; i< buttons.length; i++){
            buttons[i].addEventListener("click", function(event){
                event.stopPropagation(); 
                const soundId = this.dataset.sound;
                const soundElement = document.getElementById(soundId);
                if(soundElement){
                    soundElement.play();
                }
            });
        }
    }

    const init = function(){
        putPetsInHtml();
        bindEvents();
        playSoundOnKeyEvent();
        changeRowBackground();
    }

    return {
        init: init
    }
})();

