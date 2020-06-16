import MediaQuery from "react-responsive";
import React from "react";

export const DesktopOrLaptop = ({children}) => {
    return (
        <MediaQuery minWidth={768}>
            {children}
        </MediaQuery>
    )
}

export const Mobile = ({children}) => {
    return (
        <MediaQuery maxWidth={767}>
            {children}
        </MediaQuery>
    )
}