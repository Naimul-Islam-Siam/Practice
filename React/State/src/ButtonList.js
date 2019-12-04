import React, { Component } from 'react';

class ButtonList extends Component {
   static defaultProps = {
      colors: ["red", "blue", "purple", "cyan", "lime"]
   };

   constructor(props) {
      super(props);
      this.state = { color: "green" };
   }

   changeColor(col) {
      this.setState({ color: col });
   }

   render() {
      return (
         <div style={{ backgroundColor: this.state.color }}>
            {this.props.colors.map(c => {
               const colorObj = { backgroundColor: c };
               return <button style={colorObj} onClick={this.changeColor.bind(this, c)}>Click Me!</button>
            })}
         </div>
      );
   }
};

export default ButtonList;