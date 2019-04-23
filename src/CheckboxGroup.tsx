import React, { Component } from 'react';
import { Checkbox } from 'antd-mobile';
import { ListItemProps } from 'antd-mobile/lib/list/ListItem';
import PropTypes from 'prop-types';

const { CheckboxItem } = Checkbox;

export interface CheckboxGroupItem extends ListItemProps {
    value: any;
    title: React.ReactNode;
}

export interface CheckboxGroupProps {
    onChange?(value: any): void;
    onFocus?(): void;
    onBlur?(): void;
    value?: any[];
    data: CheckboxGroupItem[];
}

export class CheckboxGroup extends Component<CheckboxGroupProps> {
    static propTypes = {
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        value: PropTypes.array
    };

    static defaultProps = {
        value: []
    };

    public render() {
        const { onChange, value, onFocus, onBlur, data, ...restProps } = this.props;
        const childOnChange = (childValue, ev) => {
            const { checked } = ev.target;

            onChange!(checked ? value!.concat(childValue) : value!.filter(v => v !== childValue));
        };

        return data.map(item => (
            <CheckboxItem
                key={item.value}
                {...restProps}
                {...item}
                checked={value!.indexOf(item.value) > -1}
                children={item.title}
                onChange={childOnChange.bind(this, item.value)}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        ));
    }
}
