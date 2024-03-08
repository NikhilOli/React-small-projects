import React, { useEffect, useState } from 'react';


const Hero = ({ searchInput }) => {
    const [meal, setMeal] = useState([]);
    console.log(searchInput);
    useEffect(() => {
        async function getData() {
            let url;
            if (searchInput) {

                // url= `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchInput}`;
                url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
            } else {
                url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;

            }
            try {
                const res = await fetch(url);
                const data = await res.json();
                const meals = data.meals || [];
                setMeal(meals);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        getData();
    }, [searchInput]);

    return (
        <>
            <div className="container mx-4 py-8 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-20 gap-8">
                    {meal.length > 0 && meal.map(({ strMealThumb, strMeal, idMeal }) => (
                        <div key={idMeal} className="bg-white p-4 w-96 h-64  shadow-md rounded-md cursor-pointer transition-transform transform hover:scale-110">
                            <div className="mb-4">
                                <img src={strMealThumb} alt="" className="w-full h-32 object-cover rounded-md" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">{strMeal}</h3>
                                <h5 className="text-sm text-gray-600">{idMeal}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Hero;
