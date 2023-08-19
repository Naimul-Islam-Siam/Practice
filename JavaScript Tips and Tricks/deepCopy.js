function deepCopy(arg) {
   if (typeof arg !== "object" || arg === null) {
      return arg;
   }

   const newCopy = Array.isArray(arg) ? [] : {};

   for (let key in arg) {
      const value = arg[key];
      newCopy[key] = deepCopy(value);
   }

   return newCopy;
}
