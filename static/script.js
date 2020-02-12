// alert animation - fading
$('div.alert').fadeOut(3000);

let docTilte = document.title;


if (docTilte == 'Flaks Templates - Dark') {
    let colorScheme = 0;
    let schemes = ['success', 'danger', 'warning', 'info'];
    let formButton = document.getElementById('form-submit-btn');
    let colorButton = document.getElementById('color-scheme');
    colorButton.onclick = function(e) {
        e.preventDefault();
        if (colorScheme < 3) {
            colorScheme += 1;
        } else {
            colorScheme = 0;
        };
        console.log(colorScheme)
        document.querySelector('tr#titles').className = `bg-${schemes[colorScheme]}`
    }
}

// actions for navbar
// let navItems = document.querySelectorAll('.nav-item')

// for (i=0; i < navItems.length; i++) {
//     navItems[i].onclick = function() {
//         for (j=0; j < navItems.length; j++){
//             navItems[j].classList.remove('active')
//         };
//         this.classList.add('active')
//         console.log(`static/CSS/style${styleNo}.css`)
//     }
// }