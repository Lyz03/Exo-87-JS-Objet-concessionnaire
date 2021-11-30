let Voiture = {
    nom : "Eggo",
    imgUrl : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    nombresRoues : 4,
    couleur : "Marron",
    constructeur : "Citroen",
    carburant : "Solaire",
    nombrePortes : 3,
    autonomie : "450km",
    vitesseMaxi : "120km/h"
};

document.querySelector('img').src = Voiture.imgUrl;
document.getElementById('container').innerText = `Voici la voiture ${Voiture.nom}, elle possède ${Voiture.nombresRoues} roues et est de couleur ${Voiture.couleur}. 
    \n Elle est fabriquée par ${Voiture.constructeur} et roule à l'énergie ${Voiture.carburant}. 
    \n Elle possède ${Voiture.nombrePortes} portes, à une autonomie de ${Voiture.autonomie} et peut aller jusqu'à ${Voiture.vitesseMaxi}`;



