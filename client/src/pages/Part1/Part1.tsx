import React from 'react';

import { Typography } from '@material-ui/core';

import SyscoModal from './../../components/Custom/SyscoModal';

export default function Part1(props: any) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    function LeftComponent() {
        return (
            <Typography color="secondary" variant="body1">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </Typography>
        )
    }

    function RightComponent() {
        return (
            <React.Fragment>
                <img src="https://picsum.photos/200"/>
                <img src="https://picsum.photos/100"/>
                <img src="https://picsum.photos/400/200"/>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <button onClick={handleOpen}>Modal</button>
            <SyscoModal
                title="Some title"
                left={<LeftComponent/>}
                right={<RightComponent/>}
                open={open}
                handleClose={handleClose}
                />
        </React.Fragment>
    );
};