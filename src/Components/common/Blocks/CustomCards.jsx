import React from 'react';
import {Card} from 'antd';

export const BaseCard = (props) => {
    const {title, styles, children, ...restProps} = props
    return (
        <Card headStyle={{backgroundColor: '#F9F9F9'}}
              style={{
                  margin: '0 12px 24px 12px',
                  border: 'none',
                  boxShadow: '0 1px 4px rgba(0,21,41,.08)',
                  ...styles}}
              title={title}
              {...restProps}>
            {children}
        </Card>
    )
}