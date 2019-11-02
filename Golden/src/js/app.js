Vue.component('first-screen', {
    template: '<div><header class="header"><a href="#" class="header__logo">golden</a><nav class="header__nav"><ul class="header__list"><li class="header__item"><a href="" class="header__link">home</a></li><li class="header__item"><a href="" class="header__link">services</a></li><li class="header__item"><a href="" class="header__link">portfolio</a></li><li class="header__item"><a href="" class="header__link">about</a></li><li class="header__item"><a href="" class="header__link">contact</a></li></ul></nav></header><div class="first-screen__welcome"><p class="first-screen__text">welcome to our studio!</p><h1 class="first-screen__title">it’s nice to meet you</h1><a href="#" class="first-screen__btn">tell me more</a></div></div>'
})

var app = new Vue({
    el: "#app"
})