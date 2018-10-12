export class BookModel {
    _id: string;
    name: string;
    price: number;
    bookImage: string;
    description: string;
    format: string;
    author: string;
    dimensions: string;
    publisher: string;
    publicationDate: string;
    language: string;

    constructor(_id: string, name: string, price: number, bookImage: string, description: string, format: string, author: string, dimensions: string, publisher: string, publicationDate: string, language: string) {
        this._id = _id;
        this.name = name;
        this.price = price;
        this.bookImage = bookImage;
        this.description = description;
        this.format = format;
        this.author = author;
        this.dimensions = dimensions;
        this.publisher = publisher;
        this.publicationDate = publicationDate;
        this.language = language;
    }
}
  