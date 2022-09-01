type Shape = {
   height: number,
   width: number
};

type Colorful = {
   backgroundColor: string
};

// type intersection
type ColorfulRectangle = Shape & Colorful & {
   origin: {
      x: number,
      y: number
   }
};

const newRectangle: ColorfulRectangle = {
   height: 10,
   width: 20,
   backgroundColor: "green",
   origin: {
      x: 2,
      y: -5
   }
};