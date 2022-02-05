import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, 2, 5, 3, 7]);
const charactersCollection = new CharactersCollection("Mobile");
const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(200);
linkedList.add(-30);
linkedList.add(17);


const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();
console.log(numberSorter.collection);

const characterSorter = new Sorter(charactersCollection);
characterSorter.sort();
console.log(characterSorter.collection);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();