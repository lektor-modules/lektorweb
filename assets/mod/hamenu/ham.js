import { script_gen, elemen_gen } from "../lektorer/main.js"


/**
 * https://jonsuh.com/hamburgers/#usage
 */


export let init_hanav = () => { 
    script_gen('css', 'assets/mod/hamenu/ham.css' );
    
    let forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
    let hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function(hamburger) {
            hamburger.addEventListener("click", function() {
                this.classList.toggle("is-active");
            }, false);
        });
    }
    
}