class Persona{
    name:string;
    photo:string;
    description:string;
    series:Serie[];

    constructor(name:string,photo:string,description:string,series:Serie[])
    {
        this.name = name;
        this.photo = photo;
        this.description = description;
        this.series = series;
    }
}