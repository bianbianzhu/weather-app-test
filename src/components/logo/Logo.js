import React from 'react';
import './Logo.scss';


const LogoBox = () => {
    return (
        <div className="logo-box">
            <h3 className="logo-box__logo">
                <span className="logo-box__logo--main">i</span>
                <span className="logo-box__logo--sub">Weather</span>
            </h3>
        </div>
    );
};

export default LogoBox;