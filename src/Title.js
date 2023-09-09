import React from 'react'


function Title({title}){
  return <h1>{title}</h1>
}


Title.defaultProps = {
  title : "saiful"
}
// //props biasa
// function Title(props) {
//   return (
//     <h1>{props.title}</h1>
//   )
// }



export default Title;