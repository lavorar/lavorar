import * as React from 'react';
import Avatar from '@mui/material/Avatar';


function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(firtsName, lastName, width, fontSize) {
    const name = firtsName + lastName
    return {
        sx: {
            width: width ? width : 50,
            height: width ? width : 50,
            fontSize: fontSize ? fontSize : 'medium',
            bgcolor: "#c1c4c7",
            color: "#111827"

        },
        children: `${firtsName.split(' ')[0][0].toUpperCase()}${lastName.split(' ')[0][0].toUpperCase()}`,
    };
}

export default function BackgroundLetterAvatars({ firtsName, lastName, width, fontSize }) {
    return (
        <Avatar  {...stringAvatar(firtsName, lastName, width, fontSize)} />
    );
}