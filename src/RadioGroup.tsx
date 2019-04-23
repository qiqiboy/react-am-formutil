import React, { Component } from 'react';
import { Radio } from 'antd-mobile';
import { ListItemProps } from 'antd-mobile/lib/list/ListItem';
import PropTypes from 'prop-types';

const { RadioItem } = Radio;

export interface RadioGroupItem extends ListItemProps {
    value: any;
    title: React.ReactNode;
}

export interface RadioGroupProps {
    onChange?(value: any): void;
    onFocus?(): void;
    onBlur?(): void;
    value?: any[];
    data: RadioGroupItem[];
}

export class RadioGroup extends Component<RadioGroupProps> {
    static propTypes = {
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        value: PropTypes.any
    };

    public render() {
        const { onChange, value, onFocus, onBlur, data, ...restProps } = this.props;
        const childOnChange = childValue => {
            onChange!(childValue);
        };

        return data.map(item => (
            <RadioItem
                key={item.value}
                {...restProps}
                {...item}
                checked={value === item.value}
                children={item.title}
                onChange={childOnChange.bind(this, item.value)}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        ));
    }
}
