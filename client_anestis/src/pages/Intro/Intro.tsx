import React from 'react';

import Video from './Video';
import SyscoProfile from './SyscoProfile';

export default function Intro(props: any) {

    return (
        <React.Fragment>
            <Video/>
                    {/* {!done
                    ? <Video handleHasEnded={handleHasEnded}/>
                    : <SyscoProfile/>} */}
                    {/* <Route path="/sysco-profile" component={SyscoProfile}/> */}
        </React.Fragment>
    );
};