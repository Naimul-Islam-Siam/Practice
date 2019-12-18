import React, { Component } from 'react';
import Box from './Box';

class BoxList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         boxes: [{ height: 10, width: 20, color: "orange" }]
      };
   }

   render() {
      const box = this.state.boxes.map(item => (
         <Box
            height={item.height}
            width={item.width}
            color={item.color}
         />
      ));

      return (
         <div>
            <h1>Make Things</h1>
            {box}
         </div>
      );
   }
};

export default BoxList;
