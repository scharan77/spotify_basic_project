window.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");
  
    // Set the default banner image and text
    banner.style.backgroundImage = "url(images/bb.png)";
    bannerImage.setAttribute("src", "images/imm.jpg");
    bannerHeading.textContent = "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE";
    bannerText.textContent = "Metro Boomin";
  });
  
function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName = "music/"+songNumber+".mp3";
    var currentRow= document.getElementById("song"+songNumber);
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
        
        banner.style.backgroundImage = "url(images/bb.png)";
        bannerImage.setAttribute("src", "images/imm.jpg");
        bannerHeading.textContent = "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE";
        bannerText.textContent = "Metro Boomin";
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
       
        if (songNumber === 1) {
            banner.style.backgroundImage = "url(images/bb.png)";
            bannerImage.setAttribute("src", "images/imm.jpg");
            bannerHeading.textContent = "Annihilate";
            bannerText.textContent = "Metro Boomin & Swae Lee, Lil Wayne, Offset";
        } else if (songNumber === 2) {
            banner.style.backgroundImage = "url(images/bb.png)";
            bannerImage.setAttribute("src", "images/imm.jpg");
            bannerHeading.textContent = "Am I Dreaming";
            bannerText.textContent = "Metro Boomin & A$AP Rocky, Roisee";
        }
        else if (songNumber === 3) {
            banner.style.backgroundImage = "url(images/bb.png)";
            bannerImage.setAttribute("src", "images/imm.jpg");
            bannerHeading.textContent = "All the Way Live";
            bannerText.textContent = "Metro Boomin & Future, Lil Uzi Vert";
        }
        else if (songNumber === 4) {
            banner.style.backgroundImage = "url(images/bb.png)";
            bannerImage.setAttribute("src", "images/imm.jpg");
            bannerHeading.textContent = "Danger (Spider)";
            bannerText.textContent = "Offset & JID";
        }
        else if (songNumber === 5) {
            banner.style.backgroundImage = "url(images/bb.png)";
            bannerImage.setAttribute("src", "images/imm.jpg");
            bannerHeading.textContent = "Hummingbird";
            bannerText.textContent = "Metro Boomin & James Blake";
        }
        else if (songNumber === 6) {
            banner.style.backgroundImage = "url(images/bb.png)";
            bannerImage.setAttribute("src", "images/imm.jpg");
            bannerHeading.textContent = "Calling";
            bannerText.textContent = "Metro Boomin & Swae Lee, Nav, feat. A Boogie Wit Da Hoodie";
        }
        else if (songNumber === 7) {
            banner.style.backgroundImage = "url(images/bb.png)";
            bannerImage.setAttribute("src", "images/imm.jpg");
            bannerHeading.textContent = "Silk & Cologne";
            bannerText.textContent = "EI8HT & Offset";
        }
        else if (songNumber === 8) {
            banner.style.backgroundImage = "url(images/bb.png)";
            bannerImage.setAttribute("src", "images/imm.jpg");
            bannerHeading.textContent = "Link Up";
            bannerText.textContent = "Metro Boomin & Don Toliver, Wizkid feat. Beam & Toian";
        }
        else if (songNumber === 9) {
            banner.style.backgroundImage = "url(images/bb.png)";
            bannerImage.setAttribute("src", "images/imm.jpg");
            bannerHeading.textContent = "Self Love";
            bannerText.textContent = "Metro Boomin & Coi Leray";
        }
        else if (songNumber === 10) {
            banner.style.backgroundImage = "url(images/bb.png)";
            bannerImage.setAttribute("src", "images/imm.jpg");
            bannerHeading.textContent = "Home";
            bannerText.textContent = "Metro Boomin & Don Toliver, Lil Uzi Vert";
        }
        else if (songNumber === 11) {
            banner.style.backgroundImage = "url(images/bb.png)";
            bannerImage.setAttribute("src", "images/imm.jpg");
            bannerHeading.textContent = "Nonviolent Communication";
            bannerText.textContent = "Metro Boomin & James Blake, A$AP Rocky, 21 Savage";
        }
        else if (songNumber === 12) {
            banner.style.backgroundImage = "url(images/bb.png)";
            bannerImage.setAttribute("src", "images/imm.jpg");
            bannerHeading.textContent = "Givin' Up (Not the One)";
            bannerText.textContent = "Don Toliver & 21 Savage, 2 Chainz";
        }
        else if (songNumber === 13) {
            banner.style.backgroundImage = "url(images/bb.png)";
            bannerImage.setAttribute("src", "images/imm.jpg");
            bannerHeading.textContent = "Nas Morales";
            bannerText.textContent = "Metro Boomin & Nas";
        }
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
    }
}