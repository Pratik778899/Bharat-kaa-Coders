import React from 'react'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const ProfileDetails = () => {

    return (
        <div className='w-3/12 p-5 flex flex-col gap-8 '>
            <div className='flex justify-between'>
                <div className="w-24 h-24 bg-gray-500 rounded-full flex justify-center items-center">
                    <CurrencyBitcoinIcon style={{ fontSize: 48 }} />
                </div>
                <DriveFileRenameOutlineTwoToneIcon style={{ color: 'lightblue', fontSize: 33 }} className='cursor-pointer' />
            </div>
            <div className='flex flex-col gap-8 text-white'>
                <div>
                    <h1 className='text-4xl font-bold'>Saad Ansari</h1>
                    <h3 className='text-xl font-bold'>@Saadansari234</h3>
                </div>
                <div>
                    <p className='text-xl'>
                        i am a frontend developer. currrently focussing on react js
                    </p>
                    <h3 className='text-xl font-semibold'>INDIA</h3>
                </div>
                <div className='flex justify-start gap-4'>
                 <GitHubIcon style={{fontSize:30}} />
                 <LinkedInIcon style={{fontSize:30}}/>
                  <LanguageIcon style={{fontSize:30}}/>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ProfileDetails
