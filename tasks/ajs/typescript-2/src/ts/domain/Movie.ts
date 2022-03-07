import Buyable from "./Buyable";

export default class  Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly image: string,
    readonly nameRu: string,
    readonly nameEn: string,
    readonly imax: boolean,
    readonly year: number,
    readonly country: string,
    readonly tagline: string,
    readonly genre: string,
    readonly time: number,
    readonly price: number
) {
  this.id = id;
  this.image = image;
  this.nameRu = nameRu;
  this.nameEn = nameEn;
  this.imax = imax;
  this.year = year;
  this.country = country;
  this.tagline = tagline;
  this.genre = genre;
  this.time = time,
  this.price = price
}
}