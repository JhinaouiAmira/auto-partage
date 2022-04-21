import React from 'react'
import SigninAd from '../adminPages/SigninAd'

function signin() {
  return (
    <div style={{display:"flex",flexWrap:'nowrap',justifyContent:'space-evenly'}}>
      <div style={{display:"block"}}>
      <h3 style={{marginTop:"200px"}}>Bienvenue sur <span style={{color:"green"}}> Auto-Partage! </span></h3>
      
      <img style={{height:"200px"}} src='https://www.sncf.com/sites/default/files/styles/media_crop_3_2/public/2017-10/packshot_panneau-bienvenue.png?h=5b66aff5&itok=9RrSXzmD'/>
      </div>
    <div ><SigninAd/>
      </div>
      
      </div>
  )
}

export default signin