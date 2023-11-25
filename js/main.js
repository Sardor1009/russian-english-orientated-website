function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "calc(-100% - 40px)";
    // document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);








  let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "images/light.svg";
  } else {
    this.firstElementChild.src = "images/dark.svg";
  }
  document.body.classList.toggle("dark");
});



window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}


window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}







const loading = document.getElementById("loading");

const loadingDuration =10; // 2s

setTimeout(() => {
  loading.classList.add('loading-none');
}, loadingDuration);



$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav: true,
    autoplay: false, 
    autoplayHoverPause: 2000,
    items: 2, 
   
    loop: true,
    responsive: {
      0: {
        items: 1,
        
      },
      1120: {
        items: 2,
      }
    },
    dots: true,
    margin: 30,
    navText: ['<img src="images/left.svg"/>', '<img src="images/rigth.svg"/>'],
  });
});