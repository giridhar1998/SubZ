import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

const landing = () => {
  return (
    <main> 
      <nav>
         <img src={logo} alt="SubZ" className ="logo" />
      </nav>
      <div className="container page">
       {/* info */}
       <div className="info">
         <hi>
            Farm <span>Products</span><span>Selling</span>App
         </hi>
         <p>
          I'm baby pour-over helvetica migas portland af, yuccie woke. Synth cred la croix chicharrones austin pickled brooklyn jean shorts truffaut viral cloud bread whatever bicycle rights keffiyeh. Banjo unicorn keffiyeh roof party street art scenester. Succulents cred tumeric intelligentsia hashtag, salvia tofu portland. Artisan fashion axe poutine sartorial.
         </p>
         <button className="btn btn-hero"> 
           Login/Register
         </button>
       </div>
       <img src={main} alt="Vegetables" className="img main-img" /> 
      </div>
    </main>
  )
}

export default landing