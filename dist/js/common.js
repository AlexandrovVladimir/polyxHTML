(function (){
    const headerMenu = document.querySelector('.header__menu');
    const author = document.querySelector('.header__author');
    const lang = document.querySelector('.header__language');

    headerMenu.addEventListener('click', function() {
        if (this.querySelector('.burger').classList.contains('burger__open')) {
            this.querySelector('.burger').classList.remove('burger__open');
            this.querySelector('.navigation').classList.remove('navigation__open');
            this.querySelector('.burger__image').setAttribute('src', 'img/burger.png');
        } else {
            this.querySelector('.burger').classList.add('burger__open');
            this.querySelector('.navigation').classList.add('navigation__open');
            this.querySelector('.burger__image').setAttribute('src', 'img/close.png');

            author.classList.remove('header__author-open');
            author.nextElementSibling.classList.remove('author-list-open');
            lang.classList.remove('navigation-language__open');
            lang.nextElementSibling.classList.remove('navigation-language__open');
        }
    });

    author.addEventListener('click', function() {
        if (this.classList.contains('header__author-open')) {
            this.classList.remove('header__author-open');
            this.nextElementSibling.classList.remove('author-list-open');

        } else {
            this.classList.add('header__author-open');
            this.nextElementSibling.classList.add('author-list-open');

            headerMenu.querySelector('.burger').classList.remove('burger__open');
            headerMenu.querySelector('.navigation').classList.remove('navigation__open');
            headerMenu.querySelector('.burger__image').setAttribute('src', 'img/burger.png');
            lang.classList.remove('navigation-language__open');
            lang.nextElementSibling.classList.remove('navigation-language__open');
        }
    });

    lang.addEventListener('click', function() {
        if (this.classList.contains('navigation-language__open')) {
            this.classList.remove('navigation-language__open');
            this.nextElementSibling.classList.remove('navigation-language__open');
        } else {
            this.classList.add('navigation-language__open');
            this.nextElementSibling.classList.add('navigation-language__open');

            headerMenu.querySelector('.burger').classList.remove('burger__open');
            headerMenu.querySelector('.navigation').classList.remove('navigation__open');
            headerMenu.querySelector('.burger__image').setAttribute('src', 'img/burger.png');
            author.classList.remove('header__author-open');
            author.nextElementSibling.classList.remove('author-list-open');
        }
    });

    $('.sell-orders-up').scrollTop(1000);
    $('.sell-orders-down').scrollTop(0);

    $('.percent-count').click(function() {
        $(this).toggleClass('percent-count-active');
    });

    $('.star-default').click(function() {
        if ($(this).text() === 'star_border') {
            $(this).text('star').parents('tr').addClass('active');
        } else {
            $(this).text('star_border');
            $(this).text('star_border').parents('tr').removeClass('active');
        }
    });



})();