import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='bg-rose-950 w-100 bottom-0 p-10 grid grid-cols-3 text-white'>
            <div>
                <Link to={'/'} style={{ fontFamily: '"DynaPuff", system-ui' }} className='ms-5 text-2xl'>
                    <i class="fa-solid fa-utensils me-3"></i>
                    RecipeBook
                </Link>
                <p className='p-6 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aperiam sit nesciunt laboriosam, Rerum assumenda minus aspernatur! Minus veniam obcaecati aliquam iste.</p>
            </div>
            <div className="flex justify-center items-center flex-col">
                <h1 className='text-xl mb-5'>Links</h1>
                    <h6><Link to={'/'}>Home</Link></h6>
                    <h6>Recipes</h6>
                    <h6>About</h6>
            </div>
            <div className="justify-center items-center flex flex-col">
                <h1 className='text-xl mb-5'>Contact Us</h1>
            <div className="flex mb-5">                        
                 <input className='rounded p-1' type="text" placeholder='Email' />
                 <button><i class="ms-6 fa-regular fa-circle-right fa-xl"></i></button>
            </div>
            <div className="flex mt-6">
            <i class="fa-brands fa-facebook fa-xl me-4"></i>
            <i class="fa-brands fa-instagram fa-xl me-5"></i>
            <i class="fa-brands fa-whatsapp fa-xl me-5"></i>
            <i class="fa-brands fa-x-twitter fa-xl"></i>
            </div>
            </div>
        </div>
    )
}

export default Footer