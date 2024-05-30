import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import { Preloader } from "../components/preloader";

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();
    const navigte = useNavigate();
    const goBack = () => navigte(-1);

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className="recipe">
                    <div className="rcp">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal}  className="rcp-image" />
                                       <div className="info1">
                    <h1>{recipe.strMeal}</h1>
                    <h6>Category: {recipe.strCategory}</h6>
                    {recipe.strArea ? <h6>Area: {recipe.strArea} </h6> : null}
                    </div>
                    </div>
                    
                    <div className="info2">
                    <h1 className="m0">Recipe:</h1>
                    <p className="rcp-text">{recipe.strInstructions}</p>
                    <table className="centered">
                        <thead>
                            <tr>
                                <th className="w50">Ingredients</th>
                                <th className="w50">Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes("Ingredient") && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                    </div>
                    {recipe.strYoutube ? (
                        <div className="row center">
                            <h5 style={{ margin: "2rem 0 1.5rem" }}>Video Recipe</h5>
                            <iframe
                                title={id}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                                allowFullScreen
                            />
                        </div>
                    ): null}
                </div>
            )}
            <button className="btn goback light-blue" onClick={goBack}>
                Go Back
            </button>
        </>
    );
}

export { Recipe };