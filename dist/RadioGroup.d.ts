import React, { Component } from 'react';
import { ListItemProps } from 'antd-mobile/lib/list/ListItem';
import PropTypes from 'prop-types';
export interface RadioGroupItem extends ListItemProps {
    value: any;
    title: React.ReactNode;
}
export interface RadioGroupProps {
    onChange?(value: any): void;
    onFocus?(): void;
    onBlur?(): void;
    value?: any;
    data: RadioGroupItem[];
}
export declare class RadioGroup extends Component<RadioGroupProps> {
    static propTypes: {
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onFocus: PropTypes.Requireable<(...args: any[]) => any>;
        onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        value: PropTypes.Requireable<any>;
        data: PropTypes.Validator<any[]>;
    } | undefined;
    render(): JSX.Element[];
}
