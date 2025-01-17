// import PropsComp from "./PropsComp"


// const PropsParent = (props) => {
//     console.log(props)

    
//     let myclass1 = "class01"
//     let myclass2 = "class02"
//     let myclass3 = "class03"

//   return (
//    <div>
//      <PropsComp myname="Mamoon" anything={myclass1}/>
//      <PropsComp myname="Arsalan" anything={myclass2}/>
//      <PropsComp myname="Wajiha" anything={myclass3}/>
//    </div>
//   )
// }

// export default PropsParent


import React, { Component } from "react";
import PropsComp from "./PropsComp";

class PropsParent extends Component {
  render() {
    const myclass1 = "class01";
    const myclass2 = "class02";
    const myclass3 = "class03";

    return (
      <div>
        <PropsComp myname="Mamoon" anything={myclass1} />
        <PropsComp myname="Arsalan" anything={myclass2} />
        <PropsComp myname="Wajiha" anything={myclass3} />
      </div>
    );
  }
}

export default PropsParent;
