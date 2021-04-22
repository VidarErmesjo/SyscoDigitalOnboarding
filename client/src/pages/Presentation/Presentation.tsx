import React from 'react';
import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

import { Typography } from '@material-ui/core';

import { Info as InfoIcon } from '@material-ui/icons';

import SyscoModal from '../../components/Custom/SyscoModal';

import Figma1 from './Figma1';

export default function Presentation(props: any) {
    const [open, setOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

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
            <ul>
                <li><Link to={`${url}/1`}><button>Figma 1</button></Link></li>
                <li></li>
                <li></li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <button onClick={handleOpen}>Modal</button>
                    <SyscoModal
                        title="Tittel på modalen"
                        icon={<InfoIcon/>}
                        left={<LeftComponent/>}
                        right={<RightComponent/>}
                        open={open}
                        handleClose={handleClose}
                    />
                </Route>
                <Route exact path={`${path}/:id`}>
                    <Figma1/>
                </Route>
            </Switch>
        </React.Fragment>
    );
};