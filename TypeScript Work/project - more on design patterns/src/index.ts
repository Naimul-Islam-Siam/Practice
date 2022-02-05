import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 2, 5, 3, 7]);

const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);