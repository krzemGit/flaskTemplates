// alert animation - fading
$('div.alert').fadeOut(3000);

// animations for colors in particular templates
let docTilte = document.title; 

// color schemes for dark template
if (docTilte == 'Flask Templates - Dark') {
    let colorScheme = 0;
    let schemes = ['success', 'danger', 'warning', 'info'];
    let formInputs = document.querySelectorAll('input');
    let colorButton = document.getElementById('color-scheme');
    colorButton.onclick = function(e) {
        e.preventDefault();
        if (colorScheme < 3) {
            colorScheme += 1;
        } else {
            colorScheme = 0;
        };
        document.querySelector('tr#titles').className = `bg-${schemes[colorScheme]}`;
        for (i=0; i < formInputs.length; i++) {
            formInputs[i].className = `form-control ${schemes[colorScheme]}` 
        }
    }
}

// halo colors for present template in forms
if (docTilte == 'Flask Templates - Present') {
    let inputs = document.querySelectorAll('input');
    for (i=0; i < inputs.length; i++) {
        inputs[i].addEventListener('focus', function() {
            thisLabel = this.getAttribute('id');
            console.log(thisLabel)
            document.querySelector(`div.${thisLabel}`).classList.add('info');
        })
        inputs[i].addEventListener('blur', function() {
            thisLabel = this.getAttribute('id');
            document.querySelector(`div.${thisLabel}`).classList.remove('info');
        })
    }
}