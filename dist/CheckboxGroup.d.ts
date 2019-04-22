import React, { Component } from 'react';
import { ListItemProps } from 'antd-mobile/lib/list/ListItem';
import PropTypes from 'prop-types';
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
export declare class CheckboxGroup extends Component<CheckboxGroupProps> {
    static propTypes: {
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onFocus: PropTypes.Requireable<(...args: any[]) => any>;
        onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        value: PropTypes.Requireable<any[]>;
    };
    static defaultProps: {
        value: never[];
    };
    render(): JSX.Element[];
}
