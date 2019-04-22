import {
    Checkbox,
    DatePicker,
    ImagePicker,
    InputItem,
    List,
    Modal,
    Picker,
    PickerView,
    Radio,
    Range,
    Slider,
    Switch,
    TextareaItem
} from 'antd-mobile';
import PropTypes from 'prop-types';
import React, { Children, cloneElement, Component } from 'react';
import { $FieldHandler, BaseEasyFieldComponentProps, EasyField, FieldValidatorProps, OtherKeys } from 'react-formutil';
import { CheckboxGroup } from './CheckboxGroup';
import { RadioGroup } from './RadioGroup';

export type ErrorLevel = 0 | 1 | 2 | 'off';

export interface FormItemProps<T = any, P = {}, Fields = {}, WeakFields = Fields>
    extends BaseEasyFieldComponentProps<T, P, Fields, WeakFields> {
    label?: React.ReactNode;
    errorLevel?: ErrorLevel;
    children: React.ReactElement<any>;
}

const ListItem = List.Item;

let errorLevelGlobal = 1;

/**
 * 0 dirty & invalid & touched
 * 1 dirty & invalid
 * 2 invalid
 */
export const setErrorLevel = function(level) {
    errorLevelGlobal = level;
};

const isUglify = Switch.name !== 'Switch';

function getComponentType(children) {
    if (children) {
        if (typeof children.type === 'function') {
            const func = children.type;

            if (func.formutilType) {
                return func.formutilType;
            }

            if (isUglify) {
                return func;
            }

            return func.displayName || func.name;
        } else {
            return children.props.type || children.type;
        }
    }
}

const _Checkbox = isUglify ? Checkbox : 'Checkbox';
const _Radio = isUglify ? Radio : 'Radio';
const _PickerView = isUglify ? PickerView : 'PickerView';
const _DatePicker = isUglify ? DatePicker : 'DatePicker';
const _Switch = isUglify ? Switch : 'Switch';
const _Range = isUglify ? Range : 'Range';
const _Picker = isUglify ? Picker : 'Picker';
const _ImagePicker = isUglify ? ImagePicker : 'ImagePicker';
const _InputItem = isUglify ? InputItem : 'InputItem';
const _TextareaItem = isUglify ? TextareaItem : 'TextareaItem';
const _Slider = isUglify ? Slider : 'Slider';
const _CheckboxItem = isUglify ? Checkbox.CheckboxItem : 'CheckboxItem';
const _RadioItem = isUglify ? Radio.RadioItem : 'RadioItem';
const _AgreeItem = isUglify ? Checkbox.AgreeItem : 'AgreeItem';
const _CheckboxGroup = isUglify ? CheckboxGroup : 'CheckboxGroup';
const _RadioGroup = isUglify ? RadioGroup : 'RadioGroup';

export class FormItem<T = any, P = {}, Fields = {}, WeakFields = Fields> extends Component<
    FormItemProps<T, P, Fields, WeakFields> & FieldValidatorProps<P> & OtherKeys
> {
    public static propTypes = {
        // @ts-ignore
        ...ListItem.propTypes,
        label: PropTypes.any,
        errorLevel: PropTypes.oneOf([0, 1, 2, 'off']),
        children: PropTypes.element.isRequired
    };

    public render() {
        const { props } = this;
        const { children: childrenList, className, label, errorLevel = errorLevelGlobal, ...fieldProps } = props as any;
        const children = Children.only(childrenList);
        const component = getComponentType(children);

        switch (component) {
            case _Checkbox:
            case _Radio:
            case _Switch:
            case _CheckboxItem:
            case _RadioItem:
            case _AgreeItem:
                fieldProps.__TYPE__ = 'checked';
                break;

            case 'checked':
            case 'array':
            case 'object':
            case 'number':
            case 'empty':
                fieldProps.__TYPE__ = component;
                break;

            default:
                fieldProps.__TYPE__ = 'empty';
                break;
        }

        return (
            <EasyField
                {...fieldProps}
                passUtil="$fieldutil"
                children={(
                    $fieldHandler: $FieldHandler<any, 'value', 'onChange', 'onFocus', 'onBlur', '$fieldutil'>
                ) => {
                    const {
                        valuePropName = 'value',
                        changePropName = 'onChange',
                        focusPropName = 'onFocus',
                        blurPropName = 'onBlur'
                    } = props;
                    const {
                        $fieldutil,

                        // @ts-ignore
                        [changePropName]: onChange,
                        // @ts-ignore
                        [focusPropName]: onFocus,
                        // @ts-ignore
                        [blurPropName]: onBlur,
                        // @ts-ignore
                        [valuePropName]: value,

                        ...restProps
                    } = $fieldHandler;
                    const { $invalid, $dirty, $touched, $getFirstError, $focused } = $fieldutil;

                    let childProps;

                    switch (component) {
                        case _Checkbox:
                        case _Radio:
                        case _Switch:
                        case _CheckboxItem:
                        case _RadioItem:
                        case _AgreeItem:
                        case 'checked':
                            const { checked = true, unchecked = false } = props;
                            childProps = {
                                checked: value === checked,
                                onChange: ev => {
                                    const newValue = ev && ev.target ? ev.target.checked : ev;
                                    onChange(newValue ? checked : unchecked, ev);
                                }
                            };
                            break;

                        case _ImagePicker:
                            childProps = {
                                onChange,
                                files: value
                            };
                            break;

                        default:
                            childProps = {
                                [changePropName]: onChange,
                                [valuePropName]: value
                            };
                            break;
                    }

                    Object.assign(childProps, {
                        [focusPropName]: onFocus,
                        [blurPropName]: onBlur
                    });

                    let hasError;

                    switch (errorLevel) {
                        case 0:
                            hasError = $invalid && $dirty && $touched;
                            break;
                        case 1:
                            hasError = $invalid && $dirty;
                            break;
                        case 2:
                            hasError = $invalid;
                            break;
                        default:
                            hasError = false;
                            break;
                    }

                    const allClassNames = {
                        invalid: $invalid,
                        valid: !$invalid,
                        dirty: $dirty,
                        pristine: !$dirty,
                        touched: $touched,
                        untouched: !$touched,
                        focused: $focused
                    };

                    // @ts-ignore
                    restProps.className = Object.keys(allClassNames)
                        .filter(key => allClassNames[key])
                        .map(key => `antm-formutil-${key}`)
                        .concat(className)
                        .filter(Boolean)
                        .join(' ');

                    const errorProps = hasError
                        ? {
                              error: true
                          }
                        : {};

                    switch (component) {
                        case _InputItem:
                        case _TextareaItem:
                            // @ts-ignore
                            errorProps.onErrorClick = () => {
                                Modal.alert('Error info', $getFirstError());
                            };

                        case _CheckboxItem:
                        case _RadioItem:
                        case _AgreeItem:

                        case _Range:
                        case _Slider:
                        case _PickerView:
                            return cloneElement(children, {
                                ...restProps,
                                ...errorProps,
                                ...childProps,
                                title: label,
                                children: label
                            });

                        case _DatePicker:
                        case _Picker:
                            return cloneElement(children, {
                                ...childProps,
                                children: (
                                    <ListItem {...restProps} {...errorProps}>
                                        {label}
                                    </ListItem>
                                )
                            });

                        case _CheckboxGroup:
                        case _RadioGroup:
                            return cloneElement(children, childProps);

                        default:
                            const renderChild = cloneElement(children, childProps);

                            return label ? (
                                <ListItem {...restProps} {...errorProps} extra={renderChild}>
                                    {label}
                                </ListItem>
                            ) : (
                                <ListItem {...restProps} {...errorProps}>
                                    {renderChild}
                                </ListItem>
                            );
                    }
                }}
            />
        );
    }
}
