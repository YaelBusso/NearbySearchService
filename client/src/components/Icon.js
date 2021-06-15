import React from 'react';
import Parser from 'html-react-parser';
import icons from'../icons';

const Icon = (props) => {
    const {name}=props;
    let icon=icons[name];
    if(!icon)
        console.log("There is no icon named: "+name);
        
        return (
        <>
        {icon && Parser(icons[name])}
        </>
    )
}

export default Icon
