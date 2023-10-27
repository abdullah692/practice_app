import React, { Children } from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';

function Layout({children}) {
    return (
        <div>
            <Header/>
            <Main>{children}</Main>
        </div>
    );
}


export default Layout;