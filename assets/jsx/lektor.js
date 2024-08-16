import { init_maper } from "../mod/glomaps/map.js"
import { init_hanav } from "../mod/hamenu/ham.js"
import { init_darks } from "../mod/darkmod/dark.js"
import { script_gen, vpage_mode, init_navis } from "../mod/lektorer/main.js"


function fix_height() {
    const documentHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--page-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', documentHeight)
    documentHeight()
       
}




window.onload = () => {

    const path = window.location.pathname;

    // page routing
    if ( path == '/index.html' || path == '/' )
    {
        script_gen('css', 'assets/page/home/home.css' );
        script_gen('jsx', 'assets/page/home/home.js' );
    }

    // fix_height();

    // horizontal page 
    vpage_mode();

    // menu hamburger
    init_hanav();

    // load menu engine
    init_navis();

    // module darkmode
    init_darks();

    // generate mappers 
    init_maper();

    // load main styles
    script_gen('css', 'assets/css/lektor.css' );
};


