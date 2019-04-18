import { ListItemProps } from 'antd-mobile/lib/list/ListItem';
import React, { Component } from 'react';
import { BaseEasyFieldComponentProps } from 'react-formutil';
export declare type ErrorLevel = 0 | 1 | 2 | 'off';
export interface FormItemProps<T = any, P = {}, Fields = {}, WeakFields = Fields> extends ListItemProps, BaseEasyFieldComponentProps<T, P, Fields, WeakFields> {
    label?: React.ReactNode;
    errorLevel?: ErrorLevel;
    children: React.ReactElement<any>;
    [prop: string]: any;
}
/**
 * 0 dirty & invalid & touched
 * 1 dirty & invalid
 * 2 invalid
 */
export declare const setErrorLevel: (level: any) => void;
export declare class FormItem<T = any, P = {}, Fields = {}, WeakFields = Fields> extends Component<FormItemProps<T, P, Fields, WeakFields>> {
    static propTypes: any;
    render(): JSX.Element;
}
