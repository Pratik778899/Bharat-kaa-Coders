import React from 'react'
import ProfileDetails from '../Components/Profile/ProfileDetails'
import Badges from '../Components/Profile/Badges'


const Profile = () => {
  return (
    <div className='flex justify-center mt-8'>
      <div className='w-11/12 flex justify-between'>
      <ProfileDetails />
      <Badges />
      </div>
    </div>
  )
}

export default Profile