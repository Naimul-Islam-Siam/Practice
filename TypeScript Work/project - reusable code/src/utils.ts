export const dateStringToDate = (dateString: string): Date => {
   const dateParts = dateString
      .split("/") // 20/11/2020 -> ["20", "11", "2020"]
      .map((value: string): number => {
         return parseInt(value);
      });

   const day: number = dateParts[0];
   const month: number = dateParts[1] - 1; // 0 -> January, 1 -> February
   const year: number = dateParts[2];

   return new Date(year, month, day);
};