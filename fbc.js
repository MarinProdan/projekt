function showSection(id) {
    // skryje všechny sekce
    document.querySelectorAll('.section').forEach(sec => {
        sec.style.display = 'none';
    });

    // zobrazí vybranou sekci
    const section = document.getElementById(id);
    if (section) section.style.display = 'block';

}

async function nacistKontakty(cesta) {
    try {
        const response = await fetch(cesta);
        if (!response.ok) throw new Error(response.status);

        const data = await response.json();
        const container = document.getElementById("kontakty-container");
        container.innerHTML = ""; // vyčistí starý obsah

        data.forEach(contact => {
            const karta = document.createElement("div");
            karta.classList.add("kontakt-karta");

            karta.innerHTML = `
                <h3>${contact.Jméno}</h3>
                <p><strong>Email:</strong> ${contact.Email}</p>
                <p><strong>Telefon:</strong> ${contact.Telefon}</p>
            `;
            container.appendChild(karta);
        });

    } catch (error) {
        console.error("Chyba při načítání kontaktů:", error);
    }

}
nacistKontakty("data/data.json")

async function nacistTreninky(cesta) {
    try {
        const response = await fetch(cesta);
        if (!response.ok) throw new Error(response.status);

        const data = await response.json();
        const container = document.getElementById("treninky-container");
        container.innerHTML = ""; // vyčistí starý obsah

        data.forEach(contact => {
            const karta = document.createElement("div");
            karta.classList.add("trenink-karta");

            karta.innerHTML = `
                <p><strong>kategorie:</strong> ${contact.kategorie}</p>
                <p><strong>den:</strong> ${contact.den}</p>
                <p><strong>cas:</strong> ${contact.cas}</p>
                <p><strong>misto:</strong> ${contact.misto}</p>
                <p><strong>trener:</strong> ${contact.trener}</p>
                
            `;
            container.appendChild(karta);
        });

    } catch (error) {
        console.error("Chyba při načítání kontaktů:", error);
    }

}
nacistTreninky("data/treninky.json")
