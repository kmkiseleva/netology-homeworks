import Cart from './service/Cart';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Movie(
  1010,
  'https://github.com/kmkiseleva/ajs-homeworks/blob/main/typescript/pic/avengers.png',
  'Мстители',
  'The Avengers',
  true,
  2012,
  'США',
  '"Avengers Assemble!"',
  'фантастика, боевик, фэнтези, приключения',
  137));

console.log(cart.items);
