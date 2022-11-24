import React, { useState } from 'react'
import IconWithButton from "../elements/IconWithButton"
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import Badge from '@mui/material/Badge';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Router from 'next/router'


const NavMobile = ({ user }) => {

    return (
        <nav className="bg-gray-50 dark:bg-gray-900 px-2 sm:px-4 py-2.5 fixed md:hidden w-full z-10 bottom-0">
            <div className="container flex  justify-around items-center mx-auto px-2">
                <div className='group'>
                    <IconWithButton
                        onClick={() => Router.push('/')}>
                        <HomeRoundedIcon fontSize='large' />
                    </IconWithButton>
                </div>

                <div className=''>
                    <IconWithButton
                        onClick={() => Router.push('/buscar')}>
                        <Badge color="primary">
                            <SearchRoundedIcon fontSize='large' />
                        </Badge>
                    </IconWithButton>
                </div>
                {/* <div className=''>
                    <IconWithButton>
                        <Badge badgeContent={4} color="primary">
                            <ChatRoundedIcon fontSize='large' />
                        </Badge>
                    </IconWithButton>
                </div> */}
                {user &&
                    <div className=''>
                        <IconWithButton
                            onClick={() => Router.push('/profile')}>
                            <PersonRoundedIcon fontSize='large' />
                        </IconWithButton>
                    </div>
                }

            </div>
        </nav >
    )
}


export default NavMobile