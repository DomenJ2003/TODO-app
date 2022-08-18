import { useState } from 'react'
import './Searchbar.css'

function Searchbar(props) {

    

  return (
    <form>
                <div className="findbar">
                    <div className="search">
                        <input type="text" className='input-text'  placeholder='pizza, pub, Shanahans' />
                    </div>
                    <div className="line">
                        </div>
                    <div className="city">
                        
                    <input type="text" className='input-city' defaultValue='Dublin' />
                    </div>
                    <button className="find">
                    <svg width={30} height={30} className="search-icon">
                            <path d="M21.853 20.355l-3.444-3.443a9.428 9.428 0 10-16.761-6.171 9.428 9.428 0 0015.348 7.586l3.443 3.442a1 1 0 101.414-1.414zM5.82 16.245a7.429 7.429 0 115.253 2.175 7.38 7.38 0 01-5.253-2.176z"></path>
                        </svg>
                    </button>
              
                </div>
            </form>
  )
}

export default Searchbar
