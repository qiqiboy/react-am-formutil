import { __extends, __rest, __assign } from 'tslib';
import { List, Switch, Checkbox, Radio, PickerView, DatePicker, Range, Picker, ImagePicker, InputItem, TextareaItem, Slider, Modal } from 'antd-mobile';
import PropTypes from 'prop-types';
import React, { Children, cloneElement, Component } from 'react';
import { EasyField } from 'react-formutil';
export * from 'react-formutil';

var ListItem = List.Item;
var errorLevelGlobal = 1;
/**
 * 0 dirty & invalid & touched
 * 1 dirty & invalid
 * 2 invalid
 */
var setErrorLevel = function (level) {
    errorLevelGlobal = level;
};
var isUglify = Switch.name !== 'Switch';
function getComponentType(children) {
    if (children) {
        if (typeof children.type === 'function') {
            var func = children.type;
            if (func.formutilType) {
                return func.formutilType;
            }
            if (isUglify) {
                return func;
            }
            return func.displayName || func.name;
        }
        else {
            return children.props.type || children.type;
        }
    }
}
var _Checkbox = isUglify ? Checkbox : 'Checkbox';
var _Radio = isUglify ? Radio : 'Radio';
var _PickerView = isUglify ? PickerView : 'PickerView';
var _DatePicker = isUglify ? DatePicker : 'DatePicker';
var _Switch = isUglify ? Switch : 'Switch';
var _Range = isUglify ? Range : 'Range';
var _Picker = isUglify ? Picker : 'Picker';
var _ImagePicker = isUglify ? ImagePicker : 'ImagePicker';
var _InputItem = isUglify ? InputItem : 'InputItem';
var _TextareaItem = isUglify ? TextareaItem : 'TextareaItem';
var _Slider = isUglify ? Slider : 'Slider';
var _CheckboxItem = isUglify ? Checkbox.CheckboxItem : 'CheckboxItem';
var _RadioItem = isUglify ? Radio.RadioItem : 'RadioItem';
var _AgreeItem = isUglify ? Checkbox.AgreeItem : 'AgreeItem';
var FormItem = /** @class */ (function (_super) {
    __extends(FormItem, _super);
    function FormItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormItem.prototype.render = function () {
        var props = this.props;
        var _a = props, childrenList = _a.children, className = _a.className, label = _a.label, _b = _a.errorLevel, errorLevel = _b === void 0 ? errorLevelGlobal : _b, fieldProps = __rest(_a, ["children", "className", "label", "errorLevel"]);
        var children = Children.only(childrenList);
        var component = getComponentType(children);
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
        return (React.createElement(EasyField, __assign({}, fieldProps, { passUtil: "$fieldutil", children: function ($fieldHandler) {
                var _a, _b;
                var _c = props.valuePropName, valuePropName = _c === void 0 ? 'value' : _c, _d = props.changePropName, changePropName = _d === void 0 ? 'onChange' : _d, _e = props.focusPropName, focusPropName = _e === void 0 ? 'onFocus' : _e, _f = props.blurPropName, blurPropName = _f === void 0 ? 'onBlur' : _f;
                var $fieldutil = $fieldHandler.$fieldutil, 
                // @ts-ignore
                _g = changePropName, 
                // @ts-ignore
                onChange = $fieldHandler[_g], 
                // @ts-ignore
                _h = focusPropName, 
                // @ts-ignore
                onFocus = $fieldHandler[_h], 
                // @ts-ignore
                _j = blurPropName, 
                // @ts-ignore
                onBlur = $fieldHandler[_j], 
                // @ts-ignore
                _k = valuePropName, 
                // @ts-ignore
                value = $fieldHandler[_k], restProps = __rest($fieldHandler, ["$fieldutil", typeof _g === "symbol" ? _g : _g + "", typeof _h === "symbol" ? _h : _h + "", typeof _j === "symbol" ? _j : _j + "", typeof _k === "symbol" ? _k : _k + ""]);
                var $invalid = $fieldutil.$invalid, $dirty = $fieldutil.$dirty, $touched = $fieldutil.$touched, $getFirstError = $fieldutil.$getFirstError, $focused = $fieldutil.$focused;
                var childProps;
                switch (component) {
                    case _Checkbox:
                    case _Radio:
                    case _Switch:
                    case _CheckboxItem:
                    case _RadioItem:
                    case _AgreeItem:
                    case 'checked':
                        var _l = props.checked, checked_1 = _l === void 0 ? true : _l, _m = props.unchecked, unchecked_1 = _m === void 0 ? false : _m;
                        childProps = {
                            checked: value === checked_1,
                            onChange: function (ev) {
                                var newValue = ev && ev.target ? ev.target.checked : ev;
                                onChange(newValue ? checked_1 : unchecked_1, ev);
                            }
                        };
                        break;
                    case _ImagePicker:
                        childProps = {
                            onChange: onChange,
                            files: value
                        };
                        break;
                    default:
                        childProps = (_a = {},
                            _a[changePropName] = onChange,
                            _a[valuePropName] = value,
                            _a);
                        break;
                }
                Object.assign(childProps, (_b = {},
                    _b[focusPropName] = onFocus,
                    _b[blurPropName] = onBlur,
                    _b));
                var hasError;
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
                var allClassNames = {
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
                    .filter(function (key) { return allClassNames[key]; })
                    .map(function (key) { return "antm-formutil-" + key; })
                    .concat(className)
                    .filter(Boolean)
                    .join(' ');
                var errorProps = hasError
                    ? {
                        error: true
                    }
                    : {};
                switch (component) {
                    case _InputItem:
                    case _TextareaItem:
                        // @ts-ignore
                        errorProps.onErrorClick = function () {
                            Modal.alert('Error info', $getFirstError());
                        };
                    case _CheckboxItem:
                    case _RadioItem:
                    case _AgreeItem:
                    case _Range:
                    case _Slider:
                    case _PickerView:
                        return cloneElement(children, __assign({}, restProps, errorProps, childProps, { title: label, children: label }));
                    case _DatePicker:
                    case _Picker:
                        return cloneElement(children, __assign({}, childProps, { children: (React.createElement(ListItem, __assign({}, restProps, errorProps), label)) }));
                    default:
                        var renderChild = cloneElement(children, childProps);
                        return label ? (React.createElement(ListItem, __assign({}, restProps, errorProps, { extra: renderChild }), label)) : (React.createElement(ListItem, __assign({}, restProps, errorProps), renderChild));
                }
            } })));
    };
    FormItem.propTypes = __assign({}, ListItem.propTypes, { label: PropTypes.any, errorLevel: PropTypes.oneOf([0, 1, 2, 'off']), children: PropTypes.element.isRequired });
    return FormItem;
}(Component));

export { FormItem, setErrorLevel };
//# sourceMappingURL=react-antm-formutil.esm.development.js.map
