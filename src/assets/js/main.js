(function (targetWidth) {
    var deviceWidth = screen.width;
    var ratio = deviceWidth / targetWidth;
    var viewport = document.querySelector('meta[name="viewport"]');
    if (ratio < 1) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=' + ratio + ', minimum-scale=' + ratio + ', maximum-scale=' + ratio + ', user-scalable=yes');
    }
})(390);

(function () {
    $(window).on('resize.vh', function () {
        var vh = window.innerHeight * 0.01;
        $('html').css('--vh', vh + 'px');
    }).trigger('resize.vh');

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.preface-wrap',
            start: 'top top',
            end: 'bottom top',
            pin: true,
            scrub: true,
            // markers: true,
        }
    });
    tl
        .to('.preface-txt', {
            opacity: 1,
            y: 0,
            duration: 1,
        })
        .to('.preface-line', {
            opacity: 1,
            duration: 0,
        })
        .from('.preface-line>div', {
            height: 0,
            duration: 1.5,
            delay: 0.5,
        })
        .to('.preface-cube', {
            opacity: 1,
            scale: 1,
            rotate: 135,
            duration: 1.5,
        }, '<')
        .to('.preface-enter', {
            opacity: 1,
            scale: 1,
            duration: 1
        });

    var tlut = gsap.timeline({
        scrollTrigger: {
            trigger: '.intro',
            start: 'top bottom',
            end: 'top top',
            scrub: true,
            // markers: true
        }
    });
    tlut.to('.banner', {
        y: '-65%',
        ease: 'none',
    });

    var tlbc = gsap.timeline({
        scrollTrigger: {
            trigger: '.intro',
            start: 'top bottom',
            end: 'top 70%',
            scrub: 1,
            // markers: true,
        }
    });
    tlbc
        .from('.banner-cloudl', {
            x: '-100%'
        });

    var tlic = gsap.timeline({
        scrollTrigger: {
            trigger: '.intro-cloud',
            start: 'top 90%',
            end: 'top 60%',
            scrub: 1,
            // markers: true,
        }
    });
    tlic
        .from('.intro-cloud', {
            x: '-53%'
        });

    var tlpc = gsap.timeline({
        scrollTrigger: {
            trigger: '.product-cloud',
            start: 'top 90%',
            end: 'top 40%',
            scrub: 1,
            // markers: true,
        }
    });
    tlpc
        .from('.product-cloud', {
            x: '-100%'
        });

    // 進場
    AOS.init({
        duration: 800,
        once: true
    });

    // 選單
    $('[data-burger]').on('click.burger', function () {
        $('body').toggleClass('-menuOpen');
    });

    // 錨點
    $('[data-anchor-btn]').on('click.anchor', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(`#${$(this).data('anchor-btn')}`).offset().top
        }, 300);
        $('body').removeClass('-menuOpen');
    });

    // goTop
    $(window).on('scroll.goTop', function () {
        $(window).scrollTop() > 30 ? $('.goTop').fadeIn(300) : $('.goTop').fadeOut(300);
        $(window).scrollTop() < 30 ? $('.banner-scroll').fadeIn(300) : $('.banner-scroll').fadeOut(300);
    }).trigger('scroll.goTop');
    $('[data-top]').on('click.goTop', function () {
        $('body, html').animate({
            scrollTop: 0
        }, 400)
    });

    // 收合
    $('[data-collapse-action]').on('click', function (e) {
        e.preventDefault();
        $(this).closest('[data-collapse]').toggleClass('is-open').find('[data-collapse-content]').slideToggle();
    });

    new Swiper('[data-slide="product"]', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            enabled: true,
            clickable: true
        }
    });

    new Swiper('[data-slide="tab"]', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 6,
                spaceBetween: 10,
            },
            1281: {
                slidesPerView: 6,
                spaceBetween: 18,
            }
        },
        on: {
            slideChangeTransitionStart: function (swiper) {
                const i = swiper.activeIndex + 1;
                $('[data-tab-content], [data-tab-btn]').removeClass('-active');
                $(`[data-tab-btn="${i}"], [data-tab-content="${i}"]`).addClass('-active');
            },
            resize: function (swiper) {
                const i = $('[data-tab-btn].-active').data('tabBtn');
                swiper.slideTo(i - 1);
            },
        },
    });

    // 頁籤
    $('[data-tab-btn]').on('click.tab', function () {
        $('[data-tab-content], [data-tab-btn]').removeClass('-active');
        $(this).addClass('-active');
        $(`[data-tab-content="${$(this).data('tabBtn')}"]`).addClass('-active');
    });

    $('[data-scrollbar]').overlayScrollbars({});
})();

(function boy() {
    const duration = 400;

    $('.boy').each(function () {
        const $boy = $(this);
        const $images = $boy.find('img');
        let index = 0;
        let direction = 1; // 1 = forward, -1 = backward

        function showImage(i) {
            $images.removeClass('-active').eq(i).addClass('-active');
        }

        function cycle() {
            showImage(index);

            index += direction;

            if (index === $images.length - 1 || index === 0) {
                direction *= -1; // 到頭或到尾時改變方向
            }

            setTimeout(cycle, duration);
        }

        cycle();
    });
})();