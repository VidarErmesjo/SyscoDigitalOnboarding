import React from "react";

import { Typography } from '@material-ui/core';

import { useParams } from 'react-router-dom';

interface IParams {
    id: string
}

export default function Figma1(props: any) {

    // Får ikke dette til å funke??
    let { id } = useParams<IParams>();
    console.log(id);

    return (
        <React.Fragment {...props}>
            <Typography color="secondary" variant="h2" style={{ backgroundColor: '#FF0000' }}>OI!</Typography>      
        </React.Fragment>
    );
}