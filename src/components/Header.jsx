import React from 'react'
import { useDispatch } from 'react-redux'
import { searchRecipe } from '../redux/recipeSlice'
import { Link } from 'react-router-dom'

const Header = ({ searchBar }) => {
    const dispatch=useDispatch()
    return (
        <>
            <div className="text-white fixed bg-rose-950 w-full p-10 flex justify-between">
               <Link to={'/'}>
                    <h1 style={{ fontFamily: '"DynaPuff", system-ui' }} className='ms-5 text-2xl'>
                        <i class="fa-solid fa-utensils me-3"></i>
                        RecipeBook
                    </h1>
               </Link>
                {
                    searchBar &&
                    <div className='me-5'>
                        <input onChange={(e)=>dispatch(searchRecipe(e.target.value.toLowerCase()))} className='rounded text-red-950 p-1' type="text" placeholder='Search Cuisine ' />
                    </div>
                }


            </div>
        </>
    )
}

export default Header