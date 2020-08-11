export class Recipe {
    public name: string;
    public description: string;
    public imagePath:string;

    constructor(name:string, description:string, imagesPath:string){
        this.name=name;
        this.description=description;
        this.imagePath=imagesPath;
    }
}
