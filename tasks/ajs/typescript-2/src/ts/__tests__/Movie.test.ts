import Movie from "../domain/Movie";
import Cart from '../service/Cart';

test("Creating the Movie", () => {
  const theAvengers = new Movie(
    1010,
    'https://github.com/kmkiseleva/ajs-homeworks/blob/main/typescript/pic/avengers.png',
    'Мстители',
    'The Avengers',
    true,
    2012,
    'США',
    '"Avengers Assemble!"',
    'фантастика, боевик, фэнтези, приключения',
    137,
    150);

  const expectedObject = {
    id: 1010,
    image: 'https://github.com/kmkiseleva/ajs-homeworks/blob/main/typescript/pic/avengers.png',
    nameRu: 'Мстители',
    nameEn: 'The Avengers',
    imax: true,
    year: 2012,
    country: 'США',
    tagline:  '"Avengers Assemble!"',
    genre:  'фантастика, боевик, фэнтези, приключения',
    time: 137,
    price: 150
  }

  expect(theAvengers).toEqual(expectedObject);
})

test("Adding to Cart", () => {
  const cart = new Cart();
  const theAvengers = new Movie(
    1010,
    'https://github.com/kmkiseleva/ajs-homeworks/blob/main/typescript/pic/avengers.png',
    'Мстители',
    'The Avengers',
    true,
    2012,
    'США',
    '"Avengers Assemble!"',
    'фантастика, боевик, фэнтези, приключения',
    137,
    150);
  cart.add(theAvengers);
  expect(cart.items.length).toBe(1);  
})