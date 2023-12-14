import React from 'react'
import { Card } from '@mui/material'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
const Winner = () => {
  return (
    <div>
       <Card sx={{ maxWidth: 345 }} className='flex justify-center '>
        <div className='winner-section'>

       <div className=" md:w-48  flex flex-col justify-center items-center mb-6">
                        <EmojiEventsIcon style={{ color: '#cd7f32', fontSize: 33 }} />
                        <h3 className='font-semibold text-xl text-black'>Bronze</h3>
                        <div className='flex text-yellow-700'>
                            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                        </div>
                    </div>

                    <hr style={{borderWidth:3}}  />
                    <h1>hello</h1>
        </div>
       </Card>
    </div>
  )
}

export default Winner
