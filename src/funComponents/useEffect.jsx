import { useEffect, useState } from "react"
import { CustomSpinner } from "../components/CustomSpinner";
import { Link } from "react-router";

function Fetchproducts() {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then((response) => {
                setRecipes(response.recipes)
            });
    }, [])

    return (
        <>
            {recipes.length > 0 ? (
                recipes.map((e) => (
                    <Link key={e.id} to={`/recipes/${e.id}`} >
                        <img 
                            src={e.image} 
                            alt={e.name}
                            style={{ width: "250px" }} 
                        />
                    </Link>
                ))
            ) : (
                <CustomSpinner />
            )}
        </>
    )
}

export default Fetchproducts
