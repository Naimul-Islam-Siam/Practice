interface ChildProps {
   color: string;
   onClick: ()=> void;
};

export const Child = ({color, onClick}: ChildProps) => {
   return (
      <div>
         {color}
         <button onClick={onClick}>Click Me!</button>
      </div>
   );
};

// Another way of defining a FunctionalComponent in TypeScript
// This is the more explicit way
export const ChildAsFC: React.FC<ChildProps> = ({color}) => {
   return <div>{color}</div>
};