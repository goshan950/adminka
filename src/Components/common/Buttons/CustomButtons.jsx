import React from "react";
import {Button} from "antd";

export const LightButton = (props) => {
    const {styles, children, ...restProps} = props
    return (
        <Button type={"primary"}
                style={{
                    backgroundColor: "#40a9ff",
                    border: 'none',
                    ...styles,
                }}
                {...restProps}>
            {children}
        </Button>
    )
}