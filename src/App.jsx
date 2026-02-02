import CustomCarousel from "./components/CustomCoursel";
import CustomNavbar from "./components/CustomNavbar";
import Fetchproducts from "./funComponents/useEffect";


function App(){
  return(
    <>
    <CustomNavbar/>
    <CustomCarousel/>
    <Fetchproducts/>
    </>
  )
}
export default App