var logo = $(".ewb-logo"),
env = $(".env"),
dog = $(".ewb-dog"),
container = $('.svgWrap'),
envClosure = $('.env-open'),
cert = $('.paper'),
tl;


TweenLite.set(container, {
perspective: 1500
});

tl = new TimelineLite();
tl
.to(logo, 0.2, {
    ease: Power1.easeOut,
    autoAlpha: 1,
    yPercent: 40
})



function mainAnimation() {
if ($(window).width() < 960) {
    tl
        .to(envClosure, 0.55, {
            rotationX: -180
        })
        .to(cert, 0.75, {
            ease: Power1.easeOut,
            y: -80,
            zIndex: 9
        }, "-=0.45")
        .to(cert, 1, {
            ease: Power1.easeOut,
            y: -650
        }, "+=0.5")
        .to(env, 0, {
            zIndex: 8
        })
        .to(cert, 2, {
            rotation: 360,
            y: 100,
            zIndex: 11,
            scale: 1,
            top: 0
        })
} else {
    tl
        .to(envClosure, 0.55, {
            rotationX: -180
        })
        .to(cert, 0.75, {
            ease: Power1.easeOut,
            y: -80,
            zIndex: 9
        }, "-=0.45")
        .to(cert, 1, {
            ease: Power1.easeOut,
            y: -650
        }, "+=0.5")
        .to(env, 0, {
            zIndex: 8
        })
        .to(cert, 2, {
            rotation: 360,
            y: 100,
            zIndex: 11,
            scale: 1,
            height: 600,
            width: 350,
            top: 0,
            left: -235
        })
}


};
$(window).on('resize', function () {

});
$(window).resize();
container.click(function () {
mainAnimation();
container.unbind('click');
});




window.requestAnimFrame = ( function() {
return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function( callback ) {
                window.setTimeout( callback, 1000 / 60 );
            };
})();

window.onload = setTimeout(()=>{window.location.href = './phaohoa/index.html';}, 30000);