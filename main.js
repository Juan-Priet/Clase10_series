"use strict";
class Serie {
    constructor(name, image, director, actor, episodios, plataforma) {
        this.name = name;
        this.image = image;
        this.director = director;
        this.actor = actor;
        this.plataforma = plataforma;
        this.episodios = episodios;
    }
}
const episodios1 = new Episodios("principio1", "remusen1", "32");
const episodios2 = new Episodios("episodio2", "descricion 2", "26");
const episodios3 = new Episodios("episodio3", "resumen3", "32");
const actor1 = new Actor("Actor1", "photoacto1.jpg", "descripcion1", []);
const actor2 = new Actor("Actor2", "photoacto2.jpg", "descripcion2", []);
const actor3 = new Actor("Actor3", "photoacto3.jpg", "descripcion3", []);
const director1 = new Director("director1", "photodired1.jpg", "descripcion1", []);
const director2 = new Director("director2", "photodired2.jpg", "descripcion2", []);
const director3 = new Director("director3", "photodired3.jpg", "descripcion3", []);
const plataforma1 = new Plataforma("plataforma1", "www.plataforma1.com", []);
const serie1 = new Serie("serie1", "photoserie1", [director1], [actor1, actor2, actor3], [episodios1, episodios2], plataforma1);
director1.series.push(serie1);
actor1.series.push(serie1);
actor2.series.push(serie1);
actor3.series.push(serie1);
const plan1 = new Price("plan1", "30,00");
const plan2 = new Price("plan1", "50,00");
plataforma1.plans.push(plan1, plan2);
console.log("nombreserieq", serie1.name);
console.log("directores", serie1.director);
console.log("actor", serie1.actor);
console.log("episodios", serie1.episodios);
console.log("plataforma", serie1.plataforma);
