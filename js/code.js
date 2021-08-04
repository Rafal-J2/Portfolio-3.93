// burger
const burger = document.querySelector(".burger");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const panel = document.querySelector(".menu");
const player = document.querySelector(".player");

burger.addEventListener("click", function () {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    panel.classList.toggle("show");
    player.classList.toggle("show");
})

const panel2 = document.querySelector(".menu, .player");
const player2 = document.querySelector(".player");

panel2.addEventListener("click",function () {
    panel2.classList.toggle("show");
    player2.classList.toggle("show");
    iconX.classList.toggle("show");
    iconBurger.classList.toggle("show");
})

const song = new Audio;
song.src = 'https://www.bensound.com/bensound-music/bensound-summer.mp3';

function playpause() {
    
    if (!song.paused) {
        song.pause();
    } else {
        song.play();
    }
}

$(document).on('scroll', function () {

    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop();
    const $aboutme = $('.aboutme');
    const aboutmeFromTop = $aboutme.offset().top
    const aboutmeHeight = $aboutme.outerHeight()
    
    const $aboutTitle = $('.aboutTitle');
    const aboutTitleFromTop = $aboutTitle.offset().top
    const aboutTitleHeight = $aboutTitle.outerHeight()

    const $heading = $('.heading');
    const headingFromTop = $heading.offset().top
    const headingHeight = $heading.outerHeight()
    
    const $all = $('.containerTechnology');
    const allFromTop = $all.offset().top
    const allHeight = $all.outerHeight()


    if(scrollValue> aboutmeFromTop + aboutmeHeight - windowHeight) {
        $aboutme.addClass('active');
    }
    if(scrollValue> aboutTitleFromTop + aboutTitleHeight - windowHeight) {
        $aboutTitle.addClass('active');
    }

    if(scrollValue> headingFromTop + headingHeight - windowHeight) {
        $heading.addClass('active');
    }

    if(scrollValue> headingFromTop + headingHeight - windowHeight) {
        $all.addClass('active');
    }
        
    if(scrollValue < 100) {
        $('.aboutme').removeClass('active');
    }

    if(scrollValue < 100) {
        $('.aboutTitle').removeClass('active');
    }

    if(scrollValue < 100) {
        $('.heading').removeClass('active');
    }

    if(scrollValue < 100) {
        $('.containerTechnology').removeClass('active');
    }

})

$('nav li').on('click',function () {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

  anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [10,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 3000,
  })

anime({
    targets: '.php, .git',
    translateX: [0,100,300],
    direction: 'alternate',
})

const spnText = document.querySelector('.text');
const txt = 'Jestem programistą freelancerem. Od roku 2019 zajmuję się tworzeniem stron WWW. Głównie koncentruje się przy technologiach  fornt-end:  CSS i JavaScript. Od ponad roku intensywnie  rozwijam swoje umiejętności w obszarze aplikacji mobilnych przy użyciu Frameworka Flutter. '

// Parameter
let indexText = 0;
const time = 1;

// Implementation
const addLetter = () => {
 spnText.textContent += txt[indexText];
 indexText++;
 if (indexText === txt.length) clearInterval(indexTyping);
}
const indexTyping = setInterval(addLetter, time);



consoleText(['Flutter Developer', 'Front End Developer'], 'text',['white']);

function consoleText(words, id, colors) {
//   if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
//   target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        // colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}