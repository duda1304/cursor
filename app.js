const cursor  = document.querySelector('#cursor');

window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    // cursor.setAttribute('fromTop', (cursor.offsetTop - scrollY));
})

window.addEventListener('touchmove', (e) => {
    cursor.style.left = e.touches[0].clientX + 'px';
    cursor.style.top = e.touches[0].clientY + 'px';
})

// No need to add scroll event if position of cursor is fixed, would be needed if position set as absolute
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

    // change text for mobile devices (no hover over effect)
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        document.querySelector('.hover-over-me').innerHTML = 'touch me to see animation';
        document.querySelector('.click-me').innerHTML = 'touch me';
        document.querySelector('#instruction').innerHTML = 'Choose cursor style and try to touch on two text elements below'
      }
}

