function choice(items) {
   let index = Math.floor(Math.random() * items.length);

   return items[index];
}

function remove(items, item) {
   if (items.indexOf(item) !== -1) {
      items.splice(items.indexOf(item), 1);
      return items;
   } else
      return undefined;
}

export { choice, remove }