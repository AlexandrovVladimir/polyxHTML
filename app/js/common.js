(function (){
    const headerMenu = document.querySelector('.header__menu');

    headerMenu.addEventListener('click', function() {
        if (this.querySelector('.burger').classList.contains('burger__open')) {
            this.querySelector('.burger').classList.remove('burger__open');
            this.querySelector('.navigation').classList.remove('navigation__open');
            this.querySelector('.burger__image').setAttribute('src', 'img/burger.png');
        } else {
            this.querySelector('.burger').classList.add('burger__open');
            this.querySelector('.navigation').classList.add('navigation__open');
            this.querySelector('.burger__image').setAttribute('src', 'img/close.png');
        }
    });

})();