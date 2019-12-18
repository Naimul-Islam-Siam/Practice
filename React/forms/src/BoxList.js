import React, { Component } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';

class BoxList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         boxes: [{ height: 10, width: 20, color: "orange" }]
      };

      this.create = this.create.bind(this);
   }

   create(newBox) {
      this.setState({
         boxes: [...this.state.boxes, newBox]
      })
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
            <BoxForm createBox={this.create} />
            {box}
         </div>
      );
   }
};

export default BoxList;
