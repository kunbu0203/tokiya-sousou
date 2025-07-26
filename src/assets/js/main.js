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