import React from 'react';
import {
    Redirect,
    Route,
    useLocation,
} from 'react-router-dom';

type Props = {
    isAuthorized: boolean;
    component: React.FC;
    children: React.ReactNode;
};

export default function ProtectedRoute({isAuthorized, component: Component, children}: Props) {
    //const {isAuthorized, component: Component, ...rest} = props;
    const location = useLocation().pathname;
    return (
        <Route
            render={(props) => {
                if(isAuthorized) {
                    return <Component/>
                }
                else {
                    return (
                        <Redirect to="/" from={location}/>
                    )
                }
            }}
            {...children}
        />
    );
};