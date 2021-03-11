import React from 'react';
import {
    Redirect,
    Route,
    useLocation,
} from 'react-router-dom';

type Props = {
    isAuthorized: boolean;
    component: React.FC;
};

export default function ProtectedRoute(props: Props) {
    const {isAuthorized, component: Component, ...rest} = props;
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
            {...rest}
        />
    );
};