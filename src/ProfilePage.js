import React from 'react'
import Header from './Components/Header'
import Footer from './Components/footer'
import './ProfilePage.css'
import Header2 from './Components/Header2'

const ProfilePage = () => {
  return (
    <div>
        <Header />      
        <Header2/>
          
      <div className='mainbody'>
         <div>Your Account</div>
         <div>Profile Details</div>
         <div className='card'>
             cards
             <div>Your Orders</div>
             <div>Login & Security</div>
             <div>Your Cars</div>
             <div>Payment Options</div>
             <div>Pay Balance</div>
             <div>Contact Us</div>
        </div>
     </div>
    
          <Footer/>
</div>
  )
}

export default ProfilePage