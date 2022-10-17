var form = document.getElementById('formulario');
var niver = document.getElementById('aniversario');

form.addEventListener('submit', (evt) => {

    var dataInput = niver.value;
    alert(dataInput);
    verSigno();

    evt.preventDefault();

});


function verSigno() {
    window.location = "signos.html";
};