// alert animation - fading
$('div.alert').fadeOut(3000);

let docTilte = document.title;
let colorScheme = -1;

if (docTilte == 'Flaks Templates - Dark') {
    let schemes = [['success', 'green']['danger', 'red'],['warning', 'yellow'],['info', 'navy']];
    let formButton = document.getElementById('form-submit-btn');
    let colorButton = document.getElementById('color-scheme');
    colorButton.onclick = function(e) {
        e.preventDefault();
        if (colorScheme <= 3) {
            colorScheme += 1;
        } else {
            colorScheme = 0;
        };
        console.log(colorScheme)
        console.log(schemes[0][0])
        document.querySelector('tr#titles').className = `bg-${schemes[colorScheme][0]}`
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