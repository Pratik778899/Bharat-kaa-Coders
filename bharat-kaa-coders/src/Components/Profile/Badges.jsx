import React from 'react';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';

const Badges = () => {
    return (
        <div className='w-full md:w-8/12'>
            <div className='flex flex-col md:gap-8 card p-5 md:rounded-2xl'>
                <div className='flex md:justify-start md:gap-4 items-center'>
                    <WorkspacePremiumIcon style={{ fontSize: 33, color: 'white' }} />
                    <h1 className='md:text-3xl font-semibold text-white'>Badges</h1>
                </div>
                <div className='flex flex-wrap justify-center md:justify-start md:gap-6'>
                    <div className=" md:w-48  flex flex-col justify-center items-center mb-6">
                        <EmojiEventsIcon style={{ color: '#cd7f32', fontSize: 33 }} />
                        <h3 className='font-semibold text-xl text-white'>Bronze</h3>
                        <div className='flex text-yellow-700'>
                            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                        </div>
                    </div>

                    {/* Repeat similar div structure for Silver, Gold, and Platinum badges */}
                    {/* Silver Badge */}
                    <div className=" md:w-48  flex flex-col justify-center items-center mb-6">
                        <EmojiEventsIcon style={{ color: '#c0c0c0', fontSize: 33 }} />
                        <h3 className='font-semibold text-xl text-white'>Silver</h3>
                        <div className='flex text-yellow-700'>
                            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                        </div>
                    </div>

                    {/* Gold Badge */}
                    <div className=" md:w-48  flex flex-col justify-center items-center mb-6">
                        <EmojiEventsIcon style={{ color: '#ffd700', fontSize: 33 }} />
                        <h3 className='font-semibold text-xl text-white'>Gold</h3>
                        <div className='flex text-yellow-700'>
                            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                        </div>
                    </div>

                    {/* Platinum Badge */}
                    <div className=" md:w-48  flex flex-col justify-center items-center mb-6">
                        <EmojiEventsIcon style={{ color: '#00bcd4', fontSize: 33 }} />
                        <h3 className='font-semibold text-xl text-white'>Diamond</h3>
                        <div className='flex text-yellow-700'>
                            <StarIcon /><StarIcon /><StarIcon /><StarIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Badges;
