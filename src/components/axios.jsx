import React from 'react'
import CustomCard from "./CustomCard"
import CustomCarousel from "./CustomCoursel"
import CustomNavbar from "./CustomNavbar"
import { CustomSpinner } from "./CustomSpinner"
import axios from 'axios'

class Axios extends React.Component {

  state = {
    products: []
  }
  fetchrecipes=async()=>{
    try{
        let response = await axios.get('https://dummyjson.com/recipes')
        // response = await response.json() no need to convert again json
        this.setState({products:response.data.recipes})
    }
    catch(err){
        console.log("myerror")
    }
  }
  
  componentDidMount() {
    this.fetchrecipes()
  }

  render() {
    return (
      <div>
        <CustomNavbar />
        <CustomCarousel />

        {/* Spinner */}
        {this.state.products.length === 0 && <CustomSpinner />}

        {/* Data */}
        {this.state.products.length > 0 && (
          <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "15px",
            justifyContent: "center"
          }}>
            
            {this.state.products.map(each => (
              <div 
                key={each.id} 
                style={{ 
                  display: "flex",
                  flexDirection: "column",
                  width: "200px"
                }}
              >
                <h6>{each.name}</h6>
                <img
                  src={each.image}
                  alt={each.name}
                  style={{ width: "200px" }}
                />
              </div>
            ))}

          </div>
        )}

        <CustomCard />
      </div>
    )
  }
}

export default Axios


