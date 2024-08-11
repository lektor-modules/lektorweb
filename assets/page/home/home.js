
let headnav_init = () => {

    var juston;
    let profil = document.querySelector('#nav-lektorer');

    profil.addEventListener('click', ()=> {
        console.log('lektorer click');
        if (!juston) {
            document.getElementsByTagName('body')[0].dataset.menu = 'normal';
            juston = true;
        }
        document.getElementsByTagName('body')[0].classList.toggle('menu-open');
    });
}

headnav_init();