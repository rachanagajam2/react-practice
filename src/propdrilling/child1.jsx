

import SubChlid from "./subchild1"




function Chlid(props){
    // console.log(props.childsnaks) props={childsnaks:'chips'}
    return(
        <>
        <SubChlid subchildsnacks={props.childsnaks}/>
        </>
    )
}
export default Chlid