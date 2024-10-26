import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'


const View = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState({})


    useEffect(() => {
        if (sessionStorage.getItem("allRecipies")) {
          const allRecipies = JSON.parse(sessionStorage.getItem("allRecipies"))
          setRecipe(allRecipies?.find(item => item.id == id))
        }
      }, [])
  return (
    <>
    <Header/>
         <div style={{minHeight:'100vh',paddingTop:'150px'}} className="px-8">
                <div className="grid grid-cols-2 items-center">
                    <div className="flex justify-center"><img class="mb-5" width={'450px'} src={recipe?.image} alt="..." /></div>
                    <div className="flex flex-col justify-center">
                        <div className="mb-1">ID : {recipe?.id}</div>
                        <h1 className="text-3xl my-2 font-bold text-rose-950">{recipe?.name}</h1>
                        <p className=" text-red-900 font-bold text-xl">
                            {recipe.cuisine}
                        </p>
                        <p className="p-5">
                        <span className=" text-red-900 font-bold text-xl">Ingredients :</span> {
                        recipe.ingredients}
                        </p>
                        <p className="p-5">
                        <span className=" text-red-900 font-bold text-xl">Instructions :</span> {recipe.instructions}
                        </p>
                        <div className='flex justify-between p-5'>
                            <p>
                            <span className=" text-red-900 font-bold text-xl">Cooking Time :</span>  {recipe.cookTimeMinutes} Mins
                            </p>
                            <p>
                            <span className=" text-red-900 font-bold text-xl">Rating  :</span>  {recipe.rating} <i class="fa-solid fa-star text-amber-400"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default View