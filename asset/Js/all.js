function goTop() {
    // document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}

$('.owl-carousel').owlCarousel({
    dots: false,
    loop:true,
    autoplay:true,
    autoplayTimeout: 5000,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
});

AOS.init();