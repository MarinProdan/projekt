function showSection(id) {
    // Skryje všechny sekce
    document.querySelectorAll('.section').forEach(sec => {
        sec.style.display = 'none';
    });

    // Zobrazí jen tu vybranou
    document.getElementById(id).style.display = 'block';
}
