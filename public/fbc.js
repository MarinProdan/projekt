function showSection(id) {

    // skryje všechny sekce
    document.querySelectorAll('.section').forEach(sec => {
        sec.style.display = 'none';
    });

    // zobrazí jen tu vybranou
    document.getElementById(id).style.display = 'block';
}
