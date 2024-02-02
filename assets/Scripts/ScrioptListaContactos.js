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
