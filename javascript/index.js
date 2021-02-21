window.addEventListener('mouseup', event => {
    let menu_bar = document.getElementById('menu-bar');
    let menu_bar_img = document.getElementById('menu-bar-img');
    let navList = document.getElementById('nav-list');

    if (event.target === menu_bar_img) {
        if (navList.className === 'nav-list') {
            menu_bar.style.backgroundColor = '#c06719';
            menu_bar.style.borderRadius = '7px';
            navList.className += ' show';
        } else {
            menu_bar.style.backgroundColor = '';
            menu_bar.style.borderRadius = '';
            navList.className = 'nav-list';
        }
    }

    if (event.target !== menu_bar_img) {
        menu_bar.style.backgroundColor = '';
        menu_bar.style.borderRadius = '';
        navList.className = 'nav-list';
    }
})

window.addEventListener('scroll', event => {
    // console.log(event.target)
})