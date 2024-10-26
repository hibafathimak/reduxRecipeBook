import React, { useEffect, useState } from 'react'
import { fetchAllRecipes } from '../redux/recipeSlice'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { Link } from 'react-router-dom'



const Home = () => {
    const {allRecipes,loading,error} = useSelector(state=>state.recipeReducer)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchAllRecipes())
    },[])

    
const [currentPage,setCurrentPage]=useState(1)
const productPerPage=8
const TotalPage=Math.ceil(allRecipes?.length/productPerPage)
const currentPageLastProductIndex=productPerPage*currentPage
const currentPageFirstProductIndex=currentPageLastProductIndex-productPerPage
const visibleProductsCards=allRecipes?.slice(currentPageFirstProductIndex,currentPageLastProductIndex)

const navigateToNextPage=()=>{
if(currentPage!=TotalPage){
  setCurrentPage(currentPage+1)
}
}
const navigateToPreviousPage=()=>{
  if(currentPage!=1){
    setCurrentPage(currentPage-1)
  }
  }


  return (
   <>
       <Header searchBar={true}/>

<div style={{paddingTop:'150px'}} className=' w-full flex-col flex items-center justify-evenly'>
    {
        loading ? 
        <div className="flex justify-center items-center my-5 text-xl">
              <img width={'100px'} src="https://i.pinimg.com/originals/af/67/e0/af67e0a81edfb7c1ee9f996717ba3911.gif" alt="loading" />
              Loading
            </div>
            :
            <>
                <div className='px-20 grid grid-cols-4 gap-6' style={{minHeight:'100vh',width:'100%'}}>
                    {
                        allRecipes?.length>0 ?
                        visibleProductsCards?.map(recipe=>(
                        <div key={recipe.id} style={{width:'300px',height:'fit-content',borderRadius:'8px'}} className="flex justify-center rounded shadow-xl items-center flex-col mb-6">
                        <img height={'400px'} style={{borderRadius:'8px 8px 0px 0px'}} src={recipe?.image} alt="" />
                        <div className='bg-rose-100 w-full text-center py-2'>
                            <h1 className='text-xl font-bold'>{recipe?.name}</h1>
                            <h6 className='text-lg'>{recipe?.cuisine}</h6>
                            <Link className='bg-rose-950 p-1 mt-3 text-white rounded inline-block' to={`${recipe?.id}/view`}>View Recipe</Link>
                        </div>
                        </div>
                        )) 
                    :
                <div className="flex justify-center items-center text-red-500">
                  No Products are available!!
                </div>
                
                    }
                </div>
                <div className="text-center text-rose-900 my-5">
          <span onClick={navigateToPreviousPage} className='cursor-pointer'><i className="fa-solid fa-backward me-5"></i></span>
          <span className='text-2xl font-bold'>{currentPage} of {TotalPage}</span>
          <span onClick={navigateToNextPage} className='cursor-pointer'><i className="fa-solid fa-forward ms-5"></i></span>

        </div>
            </>
            }
</div>

   </>
  )
}

export default Home