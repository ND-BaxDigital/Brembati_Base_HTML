let mainNavBar = document.querySelector('#mainNavBar')
let heroBanner = document.querySelector('#heroBanner')

console.log(mainNavBar.scrollTop);



$(window).scroll(function() {
    $(mainNavBar).toggleClass('scrolled', 
        $(this).scrollTop() > (heroBanner.offsetHeight - mainNavBar.offsetHeight)
    );
  });
  