import Cart from '../service/Cart';
import Movie from "../domain/Movie";

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

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

const exampleMovie = new Movie(
  1011,
  'https://github.com/kmkiseleva/ajs-homeworks/blob/main/typescript/pic/avengers.png',
  'Пример',
  'Example',
  true,
  2015,
  'США',
  '"Слоган"',
  'фантастика, боевик, фэнтези, приключения',
  150,
  170);

test("Method summWithoutDiscount is calculating correctly", () => {
    const cart = new Cart();
    cart.add(theAvengers);
    cart.add(exampleMovie);
    expect(cart.summWithoutDiscount()).toBe(320);
})

test("Method summWithDiscount is calculating correctly", () => {
  const cart = new Cart();
  cart.add(theAvengers);
  cart.add(exampleMovie);
  expect(cart.summWithDiscount(20)).toBe(256);
})

test("Delete is working", () => {
  const cart = new Cart();
  cart.add(theAvengers);
  cart.add(exampleMovie);
  cart.deleteItem(1010);
  expect(cart.items.length).toBe(1);
})