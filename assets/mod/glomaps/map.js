import { elemen_gen } from "../lektorer/main.js"
import { mapgen } from "./gen.js"

// globe animation | https://github.com/trushka/globus-KYC/tree/master


export let init_maper= () => {
    setTimeout(elemen_gen('div', 'after', '#footer', 'globe', null ), 200);
    setTimeout( elemen_gen('div', 'append', '.globe', 'halo', null ), 300);
    setTimeout(elemen_gen('canvas', 'append', '.globe', 'earth', 'earth' ), 500);
    setTimeout( elemen_gen('div', 'append', '.globe', 'edge', null ), 600);
    setTimeout( mapgen, 3000 );
}  