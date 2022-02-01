
export class BookModel{

    constructor(_id, _name, _author, _price, _img){
        this.id=_id;
        this.name=_name;
        this.author = _author;
        this.price = _price;
        this.imageUrl = _img;
    }
    
    id: number;
    name: string;
    author: string;
    price: number;
    imageUrl: string;

}