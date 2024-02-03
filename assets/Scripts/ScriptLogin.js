function saveAndRedirect() {
    // Obtén los valores de los campos del formulario
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Guarda los datos en el almacenamiento local
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // Redirige a la página de ListaContactos.html
    window.location.href = "./assets/pages/ListaContactos.html";
}
