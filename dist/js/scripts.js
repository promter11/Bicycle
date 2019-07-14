$(document).ready(function() {

    // Плавный скролл страницы по клику на элементы меню

    $('.header-list__link').click(function(event) {
        event.preventDefault();

        $('html').animate({scrollTop: $($(this).attr('href')).offset().top}, 1500);
    });

    // ------------------------------------------------------------------------------

    // Переключение блоков с отзывами

    $('.review-square-block__square').click(function(event) {
        event.preventDefault();

        $('.review-square-block__square').css('background-color', "#fff");
        $('.review-block').hide();

        $(this).css('background-color', "#848789");
        $($(this).attr('href')).fadeIn();
    });

    // ------------------------------------------------------------------------------
});