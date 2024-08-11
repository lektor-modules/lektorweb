
let headnav_init = () => {

    var juston;
    let profil = document.querySelector('#nav-lektorer');
    let topnav = document.querySelector('.hamburger');
    let htbody = document.getElementsByTagName('body')[0];

    profil.addEventListener('click', ()=> {
        console.log('lektorer click');
        if (!juston) {
            htbody.dataset.menu = 'normal';
            topnav.classList.add('active');
            juston = true;
        }
        htbody.classList.toggle('menu-open');
    }, false );
}

headnav_init();