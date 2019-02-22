import React, { Component } from 'react';

import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}


export default class MoneyValue extends Component {
    render() {
        return (
            <React.Fragment>
                <InputNumber
              defaultValue={1000}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              onChange={onChange}
            />
            <InputNumber
              defaultValue={100}
              min={0}
              max={100}
              formatter={value => `${value}%`}
              parser={value => value.replace('%', '')}
              onChange={onChange}
            />
            </React.Fragment>
        );
    }
}
