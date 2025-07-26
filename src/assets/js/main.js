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

    // 選單
    $('[data-burger]').on('click.burger', function () {
        $('body').toggleClass('-menuOpen');
    });

    // goTop
    $(window).on('scroll.goTop', function () {
        $(window).scrollTop() > 30 ? $('.goTop').fadeIn(300) : $('.goTop').fadeOut(300);
    });
    $('[data-top]').on('click.goTop', function () {
        $('body, html').animate({
            scrollTop: 0
        }, 400)
    });
    $(window).trigger('scroll.goTop');

    // 收合
    $('[data-collapse-action]').on('click', function (e) {
        e.preventDefault();
        $(this).closest('[data-collapse]').toggleClass('is-open').find('[data-collapse-content]').slideToggle();
    });
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