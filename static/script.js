// alert animation - fading
$('div.alert').fadeOut(3000);

let docTilte = document.title;


if (docTilte == 'Flaks Templates - Dark') {
    let colorScheme = 0;
    let schemes = ['success', 'danger', 'warning', 'info'];
    let formInputs = document.querySelectorAll('input')
    let formButton = document.getElementById('form-submit-btn');
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