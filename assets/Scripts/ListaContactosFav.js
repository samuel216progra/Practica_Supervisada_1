document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('contactTable');
    const overlay = document.querySelector('.overlay');
    const cardDetails = document.getElementById('cardDetails');

    table.addEventListener('click', function (event) {
        const target = event.target;
        if (target.tagName === 'TD') {
            const rowData = target.parentElement;
            const details = Array.from(rowData.children).map(cell => cell.textContent);
            showDetailsCard(details);
        }
    });

    overlay.addEventListener('click', function () {
        hideDetailsCard();
    });

    function showDetailsCard(details) {
        const cardContent = details.join('<br>');
        cardDetails.innerHTML = cardContent;
        overlay.style.display = 'flex';
    }

    function hideDetailsCard() {
        overlay.style.display = 'none';
    }
});

var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}



        // Función para agregar un evento de clic a las filas de la tabla
        document.addEventListener('DOMContentLoaded', function () {
            var table = document.getElementById('miTabla');

            if (table) {
                table.addEventListener('click', function (event) {
                    var target = event.target;
                    // Verificar si el clic fue en una celda de la fila
                    if (target.tagName === 'TD') {
                        // Obtener los datos de la fila
                        var rowData = target.parentNode.cells;
                        
                        // Redirigir a otra página con los datos
                        var url = 'otraPagina.html?nombre=' + rowData[0].innerText +
                                  '&apellido=' + rowData[1].innerText +
                                  '&numero=' + rowData[2].innerText +
                                  '&correo=' + rowData[3].innerText;
                        window.location.href = url;
                    }
                });
            }
        });