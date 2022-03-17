/*!
* Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project 
var number = 0;

// Faire en sorte que lorsque l'utilisateur ajoute au panier il faut que par la suite dans la page panier on retrouve les items ajoutés
var tableauImage = [];
var tableauPrix = [];

//Problème 1 : Au changement de page le fichier javascript se recharge cela supprime donc les éléments déjà enregistrés en JS
//Solution 1 : 


function increment()
{
    number++;
    document.getElementById("nbrPanier").innerText = number;
}

function refreshpanier()
{
    document.getElementById("nbrPanier").innerText = number;   
}