import React from 'react'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import CommunityPage from './CommunityPage'
import CardGrid from './CardGrid'
function CommunityIndex() {
  return (
    <div>
      <Navbar />
      <CommunityPage />
      <CardGrid />
      <Footer/>
    </div>
  )
}

export default CommunityIndex
