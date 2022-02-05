import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 2, 5, 3, 7]);
const charactersCollection = new CharactersCollection("Mobile");

const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();
console.log(numberSorter.collection);

const characterSorter = new Sorter(charactersCollection);
characterSorter.sort();
console.log(characterSorter.collection);