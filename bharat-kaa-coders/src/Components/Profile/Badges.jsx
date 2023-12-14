import React from 'react'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';

const Badges = () => {
    return (
        <div className='w-8/12 '>
            <div className='flex flex-col md:gap-8 bg-gray-700 p-5 md:rounded-2xl'>
                <div className='flex md:justify-start md:gap-4 items-center'>
                    <WorkspacePremiumIcon style={{ fontSize: 33, color: 'white' }} />
                    <h1 className='md:text-3xl font-semibold text-white '>Bagdes</h1>
                </div>
                <div className='flex justify-start md:flex-wrap md:gap-16'>
                    <div className="badges md:bg-gray-400 flex flex-col justify-center items-center" >
                        <EmojiEventsIcon style={{ color: '#cd7f32', fontSize: 33 }} />
                        <h3 className='font-semibold text-xl'>Bronze</h3>
                        <div className='flex text-yellow-700'>
                            <StarIcon /><StarIcon /><StarIcon />
                        </div>
                    </div>

                    <div className="badges md:bg-gray-400 flex flex-col justify-center items-center" >
                        <EmojiEventsIcon style={{ color: '#c0c0c0', fontSize: 33 }} />
                        <h3 className='font-semibold text-xl'>Silver</h3>
                        <div className='flex text-yellow-700'>
                            <StarIcon /><StarIcon /><StarIcon />
                        </div>
                    </div>

                    <div className="badges md:bg-gray-400 flex flex-col justify-center items-center">
                        <EmojiEventsIcon style={{ color: '#ffd700', fontSize: 33 }} />
                        <h3 className='font-semibold text-xl'>Gold</h3>
                        <div className='flex text-yellow-700'>
                            <StarIcon /><StarIcon /><StarIcon />
                        </div>
                    </div>


                    <div className="badges md:bg-gray-400 flex flex-col justify-center items-center" >
                        <EmojiEventsIcon style={{ color: '#00bcd4', fontSize: 33 }} />
                        <h3 className='font-semibold text-xl'>Platinum</h3>
                        <div className='flex text-yellow-700'>
                            <StarIcon /><StarIcon /><StarIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Badges
