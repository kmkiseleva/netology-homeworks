export default interface Buyable {
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
}