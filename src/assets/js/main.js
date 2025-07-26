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