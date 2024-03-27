
// const PropsComp = (props) => {

//     console.log(props)

  // return (
  //  <div>
  //    <div>My name is {props.myname}</div>
  //   <div>Class {props.anything}</div>
  //  </div>
  // )
  // import React, { Component } from "react";




class MyComponent extends Component {
  render() {
    return (
      <div>
        <div>My name is {this.props.myname}</div>
        <div>Class {this.props.anything}</div>
      </div>
    );
  }
}






// export default MyComponent;

// }

// export default PropsComp

// const PropsComp = ({myname, anything}) => {


//     return (
//      <div>
//        <div>My name is {myname}</div>
//       <div>Class {anything}</div>
//      </div>
//     )
//   }
  
  export default PropsComp