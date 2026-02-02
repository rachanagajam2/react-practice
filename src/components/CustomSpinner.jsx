import React from 'react'
import { Vortex } from 'react-loader-spinner'

export function CustomSpinner() {
  return (
    <Vortex
visible={true}
height="80"
width="80"
ariaLabel="vortex-loading"
wrapperStyle={{}}
wrapperClass="vortex-wrapper"
colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>
  )
}

// export class CustomSpinner extends React.Component {
// //   componentWillUnmount(){
//        console.log(spinner is expired)
//               }
// render(){
//   return (
//     <Vortex
// visible={true}
// height="80"
// width="80"
// ariaLabel="vortex-loading"
// wrapperStyle={{}}
// wrapperClass="vortex-wrapper"
// colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
// />
//   )}
// }