const cursor  = document.querySelector('#cursor');

window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    // cursor.setAttribute('fromTop', (cursor.offsetTop - scrollY));
})

window.addEventListener('touchmove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    // cursor.setAttribute('fromTop', (cursor.offsetTop - scrollY));
})

// window.addEventListener('scroll', (e) => {
//     const fromTop = parseInt(cursor.getAttribute('fromTop'));
//     cursor.style.top = scrollY + fromTop + 'px';
// })

document.body.onload = () => {
    let buttons = Array.from(document.querySelectorAll('.btn'));
    buttons.forEach(button => button.addEventListener('click', (e) => {
        let classes = Array.from(cursor.classList);
        classes.forEach(element => cursor.classList.remove(element));
        cursor.classList.add(e.target.id);
        console.log(cursor.classList)
    }))

    let click = document.querySelector('.click-me');
    click.addEventListener('click', () => {
        cursor.classList.add('click');
    })

    cursor.addEventListener('animationend', () => {
        if (cursor.classList.contains('click')) {
            cursor.classList.remove('click');
        }
    }); 
}

