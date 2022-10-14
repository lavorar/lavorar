import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@mui/material/IconButton';

const IconWithButton = (props) => {
    return (
        <>
            <button 
                onClick={props.onClick}
                className={` inline-flex w-full justify-center rounded-full bg-gray-300 dark:bg-gray-700 dark:group-hover:bg-black  px-2 py-2 text-sm font-medium text-gray-900 dark:text-white-ghost group-hover:bg-gray-200  focus:outline-1 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>

                {props.children}

            </button>
        </>
    )
}
export default IconWithButton