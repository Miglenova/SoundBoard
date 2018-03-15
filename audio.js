const keys = document.querySelectorAll('.song');
const genres = document.querySelectorAll('header>nav>a');

function clickSong(e){
  let songKey = e.target.dataset['song'];
  let audio = document.querySelector(`audio[data-song="${songKey}"]`);
  audio.currentTime = 0;
  audio.play();
}

// function switchGenre is serving as an on/off for sections to be displayed individually

function switchGenre(e){
  e.preventDefault();
  let inst1 = document.querySelector('#genre1');
  let inst2 = document.querySelector('#genre2');
  let inst3 = document.querySelector('#genre3');
  let genre = e.target.dataset['genre'];

  if(genre=="genre1"){
    inst1.style.display = "block";
    inst2.style.display = "none";
    inst3.style.display = "none";
    return;
  }
   else if (genre=="genre2"){
     inst2.style.display = "block";
     inst1.style.display = "none";
     inst3.style.display = "none";
     return;
   }

  inst3.style.display = "block";
  inst1.style.display = "none";
  inst2.style.display = "none";

}

keys.forEach(function(key){
    key.addEventListener("click", clickSong);
});

genres.forEach(function(genre){
  genre.addEventListener("click", switchGenre);
});
