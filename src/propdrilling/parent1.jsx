// Prop Drilling means passing data (props) from a parent component to a deeply nested child component, even if the intermediate components do not use that data.

// In simple words:

// Passing props through many components just to reach the final component is called Prop Drilling.
// App
//  └── Parent
//       └── Child
//            └── GrandChild
// If GrandChild needs data from App, we must pass it like this:
// App → Parent → Child → GrandChild



import Chlid from "./child1"


function Parent(prop){
    // console.log(prop.snaks) (o/p chips) prop={snaks:'chips'}
    return(
        <>
      <Chlid childsnaks={prop.snaks}/>
        </>
    )
}
export default Parent