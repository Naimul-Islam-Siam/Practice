class Node {
   next: Node | null = null; // default value is null

   constructor(public data: number) {}
};

export class LinkedList {
   head: Node | null = null;

   // add a node to the List
   add(data: number): void {
      const node = new Node(data);

      if(!this.head) {
         this.head = node;
         return;
      }

      let tail = this.head;

      while(tail.next) {
         tail = tail.next;
      }

      tail.next = node;
   }

   // find the length of the List
   get length(): number {
      if(!this.head) {
         return 0;
      }

      let length = 1;

      let node = this.head;

      while(node.next) {
         length++;
         node = node.next;
      }

      return length;
   }

   // node at a particular index
   at(index: number): Node {
      if(!this.head) {
         throw new Error("Index out of bound");
      }

      let counter = 0;
      let node: Node | null = this.head;
      while(node) {
         if(counter === index) {
            return node;
         }

         counter ++;
         node = node.next;
      }

      throw new Error("Index out of bound");
   }

   // compare the value of two nodes
   compare(leftIndex: number, rightIndex: number): boolean {
      if(!this.head) {
         throw new Error("List is empty");
      }

      return this.at(leftIndex).data > this.at(rightIndex).data;
   }

   // swap the value of two nodes
   swap(leftIndex: number, rightIndex: number): void {
      const leftNode = this.at(leftIndex);
      const rightNode = this.at(rightIndex);

      const leftHand = leftNode.data;
      leftNode.data = rightNode.data;
      rightNode.data = leftHand;
   }

   // print the linked list
   print(): void {
      if(!this.head) {
         return;
      }

      let node: Node | null = this.head;

      while(node) {
         console.log(node.data);
         node = node.next;
      }
   }
};