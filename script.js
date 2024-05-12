function menuMobile(selectHamburger, selectMenu, selectClose, selectMenuItem) {
    const hamburger = document.querySelector(selectHamburger);
    const menu = document.querySelector(selectMenu);
    const close = document.querySelector(selectClose);
    const menuItem = document.querySelectorAll(selectMenuItem);

    hamburger.addEventListener('click', () => {
        menu.classList.add('show');
        document.body.classList.add('overflow-hidden')
    });

    close.addEventListener('click', () => {
        menu.classList.remove('show')
        document.body.classList.remove('overflow-hidden')
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('show')
            document.body.classList.remove('overflow-hidden')
        })
    })
}
menuMobile('.hamburger', '.mobile-menu', '.mobile-menu__close','.nav__list-mobile a' );

new Swiper('section.reviews .swiper', {
    slidesPerView: 1.2,
    spaceBetween: 12,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerGroup: 1,
    breakpoints: {
        1600: {
            slidesPerView: 3.65,
            grid: {
                rows: 2,
            },
        },
        1200: {
            slidesPerView: 2.65,
            grid: {
                rows: 2,
            },
        },
        768: {
            slidesPerView: 1.65,
            grid: {
                rows: 2,
            },
        },
        576: {
            slidesPerView: 1.5,
        }
    },
}) 