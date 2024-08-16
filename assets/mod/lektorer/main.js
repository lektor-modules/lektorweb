export let script_gen = ( type, url ) => {
    let target = document.getElementById("initsrc")
    let elemen = document.createElement("script");
    if ( type == 'jsx' ) {
        elemen.src = url;
        elemen.type = 'module';  

    } else {
        elemen = document.createElement("link");
        elemen.rel = 'stylesheet';
        elemen.href = url;   
    }

    target.parentNode.insertBefore( elemen, target.nextSibling );
    return true;
}

export let elemen_gen = ( name, action, parent, classname, idname ) => {

    let elemem = document.createElement( name );
    let target = document.querySelector( parent );

    if  ( classname != null ) {
        elemem.className = classname
    }

    if  ( idname != null ) {
        elemem.id = idname
    }

    if ( action == 'after' )
    {
        target.after(elemem);
    }
    else if ( action == 'append' )
    {
        target.append(elemem);
    }
}

export let vpage_mode = () => {
    let scrol = document.querySelector('.vw');
    scrol.style.width = 'min-content'
   
    document.querySelector('.va').style.height = scrol.offsetWidth + 'px';
    scrol.style.width = '100vw'
    window.addEventListener('scroll', () =>{
        console.log(window.scrollX);
        scrol.scrollTo( window.scrollY , 0 );
    });
}

export let init_navis = () => {
    let action = document.querySelector('.hamburger');
    action.addEventListener('click', ()=> {
        document.getElementsByTagName('body')[0].classList.toggle('menu-open');
    });
}

export let check_elem = ( item ) => {
    let target = document.querySelector( item );
    if ( target ) 
    {
        return true;
    }
    else 
    {
        return false;
    }
} 