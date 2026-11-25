/**
 * Prenom: Adil
 * Nom: Ahmed
 * Date: 25.11.2026
 * Dir: /var/www/html/atelier_ajs/UE5_JSON/bibliotheque
 *
 */

function afficherLivre(livres) {
    main.innerHTML = "";
    livres.forEach((l) => {
        main.innerHTML += `<div id="liste" class="row">
        <h1> Titre : ${l.titre}</h1>
        <p>Auteur : ${l.auteur}, annee : ${l.annee}</p>
        </div>`;
    });
}

const main = document.createElement("main");
const btnRoman = document.createElement("button");
const btn300pages = document.createElement("button");
btnRoman.textContent = "Filtre Roman";
btn300pages.textContent = "Filtre 300 pages ou plus";

try {
    const res = await fetch("livres.json");
    const livres = await res.json();

    const titres = livres.map((f) => {
        return f.titre;
    });

    afficherLivre(livres);

    btnRoman.addEventListener("click", () => {
        const livresRoman = livres.filter((l) => {
            return l.genre == "Roman";
        });
        afficherLivre(livresRoman);
    });

    btn300pages.addEventListener("click", () => {
        const livres300pages = livres.filter((l) => {
            return l.pages >= 300;
        });
        afficherLivre(livres300pages);
    });
} catch (e) {
    console.log(`Erreur : ${e}`);
}

document.body.appendChild(btnRoman);
document.body.appendChild(btn300pages);
document.body.appendChild(main);
