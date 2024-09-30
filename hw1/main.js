// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
//     title: "Название альбома",
//     artist: "Исполнитель",
//     year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const albums = [
  {
    title: "Dark side of the moon",
    artist: "Pink floyd",
    year: 1973,
  },
  {
    title: "Black Album",
    artist: "Metallica",
    year: 1991,
  },
  {
    title: "Nevermind",
    artist: "Nirvana",
    year: 1991,
  },
];

albums[Symbol.iterator] = function () {
  return {
    current: 0,
    to: this.length,
    next() {
      return this.current < this.to
        ? { done: false, value: albums[this.current++] }
        : { done: true };
    },
  };
};
for (let album of albums) {
  console.log(
    `Название: ${album.title} ,Исполнитель:${album.artist}, год выпуска:${album.year}`
  );
}
