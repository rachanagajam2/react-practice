import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css'
// import App from './App.jsx'
import CustomNavbar from './components/CustomNavbar.jsx';
import CustomCarousel from './components/CustomCoursel.jsx';
import { CustomSpinner } from './components/CustomSpinner.jsx';
// import CustomCard from './components/CustomCard.jsx';
// import CounterApp from './components/classComponents.jsx';
// import Application from './components/Application.jsx';
// import Axios from './components/axios.jsx';
// import Parent from './purecomponet/parent.jsx';
// import Counter from './funComponents/Counter.jsx';
// import Timer from './funComponents/timerapp.jsx';
// import Timing from './funComponents/timerapp.jsx';
// import Fetchproducts from './funComponents/useEffect.jsx';
import { BrowserRouter,Routes,Route} from "react-router";
import App from './App.jsx';
import About from './about.jsx';
import PageNotFound from './PageNot Found.jsx';
import Recipe from './funComponents/recipe.jsx';
import Parent from './contextapi/parent.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <Application/> */}
  {/* <Axios/> */}
  {/* <Parent/> */}
  {/* <Counter/>
  <Timing/> */}
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/recipes/:id" element={<Recipe />} />


         
    </Routes>
  </BrowserRouter>, */}
  {/* <Parent snaks="chips"/> */} 
  <Parent/>
  </StrictMode>
)
