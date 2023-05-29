class Plataforma{
    name:string;
    website:string;
    plans:Price[];

    constructor(name:string,website:string,plans:Price[]){
        this.name = name;
        this.plans = plans;
        this.website = website; 
    }
 }
