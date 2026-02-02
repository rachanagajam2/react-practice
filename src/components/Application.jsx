// import React from 'react'
// import CustomNavbar from './CustomNavbar'
// import CustomCarousel from './CustomCoursel'
// import CounterApp from './classComponents'
// import { CustomSpinner } from './CustomSpinner'
// import CustomCard from './CustomCard'


//function based functions
// const Application = () => {
//   return (
//     <div>
//           <CustomNavbar/>
//           <CustomCarousel/>
//           <CounterApp/>
//           <CustomSpinner/>
//           <CustomCard/>
//     </div>
//   )
// }

// export default Application
//-----------------------------------------------------------

//class based functions

//  class Application extends React.Component {
//     state={
//          products:[]
//     }
//     fetchproducts=()=>{
//           fetch('https://dummyjson.com/recipes')
//           .then(res => res.json())
//           .then((response)=>{
//               this.setState({products:response.recipes})
//           });
//     }
//  render(){ return (
//     <div>
//           <CustomNavbar/>
//           <CustomCarousel/>
//           <button onClick={this.fetchproducts}>fetch data</button>
//           {/* <CounterApp/> */}
//           {this.state.products.length>0?
//           <>
//           {this.state.products.map((each=>
//             <>
//             <h3>{each.name}</h3>
//             <img src={each.image} alt="" style={{width:"200px"}} />
//             </>
//           ))}
//           </>:<CustomSpinner/>}
          
//           <CustomCard/>
//     </div>
//   )}
// }
// export default Application 


//----------------------------------------------------
// lifecycle
//by using componentdidmount
//React follows lifecycle phases, not code order.
// render runs first to build the UI, and componentDidMount runs after the component is mounted to the DOM.
// Mounting Order (Always the same) no need button here

// constructor()

//getDerivedfromprops

// render()

// componentDidMount()

// setState()

// render() again







// using constructor
// class Application extends React.Component {

//   constructor(props) {
//     super(props)

//     // initialize state
//     this.state = {
//       products: [],
//       loading: true
//     }
//   }

//   componentDidMount() {
//     fetch('https://dummyjson.com/recipes')
//       .then(res => res.json())
//       .then(response => {
//         this.setState({
//           products: response.recipes,
//           loading: false
//         })
//       })
//   }

//   render() {
//     return (
//       <div>
//         <CustomNavbar />
//         <CustomCarousel />

//         {/* Spinner */}
//         {this.state.loading && <CustomSpinner />}

//         {/* Data */}
//         {this.state.products.length > 0 &&
//           this.state.products.map(each => (
//             <div key={each.id}>
//               <h3>{each.name}</h3>
//               <img
//                 src={each.image}
//                 alt={each.name}
//                 style={{ width: "200px" }}
//               />
//             </div>
//           ))
//         }

//         <CustomCard />
//       </div>
//     )
//   }
// }

// export default Application

//====================================================================
//componentwillunmount
// you have stop sever when you got data from api
//to stop server from background you neeed to use componentwillunmount

//in spinner