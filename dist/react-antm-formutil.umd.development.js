(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('antd-mobile'), require('prop-types'), require('react'), require('react-formutil')) :
    typeof define === 'function' && define.amd ? define(['exports', 'antd-mobile', 'prop-types', 'react', 'react-formutil'], factory) :
    (global = global || self, factory(global.ReactAntmFormutil = {}, global.AntdMobile, global.PropTypes, global.React, global.ReactFormutil));
}(this, function (exports, antdMobile, PropTypes, React, reactFormutil) { 'use strict';

    PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
    var React__default = 'default' in React ? React['default'] : React;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    var CheckboxItem = antdMobile.Checkbox.CheckboxItem;
    var CheckboxGroup = /** @class */ (function (_super) {
        __extends(CheckboxGroup, _super);
        function CheckboxGroup() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CheckboxGroup.prototype.render = function () {
            var _this = this;
            var _a = this.props, onChange = _a.onChange, value = _a.value, onFocus = _a.onFocus, onBlur = _a.onBlur, data = _a.data;
            var childOnChange = function (childValue, ev) {
                var checked = ev.target.checked;
                onChange(checked ? value.concat(childValue) : value.filter(function (v) { return v !== childValue; }));
            };
            return data.map(function (item) { return (React__default.createElement(CheckboxItem, __assign({ key: item.value }, item, { checked: value.indexOf(item.value) > -1, children: item.title, onChange: childOnChange.bind(_this, item.value), onFocus: onFocus, onBlur: onBlur }))); });
        };
        CheckboxGroup.propTypes = {
            onChange: PropTypes.func,
            onFocus: PropTypes.func,
            onBlur: PropTypes.func,
            value: PropTypes.array
        };
        CheckboxGroup.defaultProps = {
            value: []
        };
        return CheckboxGroup;
    }(React.Component));

    var RadioItem = antdMobile.Radio.RadioItem;
    var RadioGroup = /** @class */ (function (_super) {
        __extends(RadioGroup, _super);
        function RadioGroup() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RadioGroup.prototype.render = function () {
            var _this = this;
            var _a = this.props, onChange = _a.onChange, value = _a.value, onFocus = _a.onFocus, onBlur = _a.onBlur, data = _a.data;
            var childOnChange = function (childValue) {
                onChange(childValue);
            };
            return data.map(function (item) { return (React__default.createElement(RadioItem, __assign({ key: item.value }, item, { checked: value === item.value, children: item.title, onChange: childOnChange.bind(_this, item.value), onFocus: onFocus, onBlur: onBlur }))); });
        };
        RadioGroup.propTypes = {
            onChange: PropTypes.func,
            onFocus: PropTypes.func,
            onBlur: PropTypes.func,
            value: PropTypes.any
        };
        return RadioGroup;
    }(React.Component));

    var ListItem = antdMobile.List.Item;
    var errorLevelGlobal = 1;
    /**
     * 0 dirty & invalid & touched
     * 1 dirty & invalid
     * 2 invalid
     */
    var setErrorLevel = function (level) {
        errorLevelGlobal = level;
    };
    var isUglify = antdMobile.Switch.name !== 'Switch';
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
    var _Checkbox = isUglify ? antdMobile.Checkbox : 'Checkbox';
    var _Radio = isUglify ? antdMobile.Radio : 'Radio';
    var _PickerView = isUglify ? antdMobile.PickerView : 'PickerView';
    var _DatePicker = isUglify ? antdMobile.DatePicker : 'DatePicker';
    var _Switch = isUglify ? antdMobile.Switch : 'Switch';
    var _Range = isUglify ? antdMobile.Range : 'Range';
    var _Picker = isUglify ? antdMobile.Picker : 'Picker';
    var _ImagePicker = isUglify ? antdMobile.ImagePicker : 'ImagePicker';
    var _InputItem = isUglify ? antdMobile.InputItem : 'InputItem';
    var _TextareaItem = isUglify ? antdMobile.TextareaItem : 'TextareaItem';
    var _Slider = isUglify ? antdMobile.Slider : 'Slider';
    var _CheckboxItem = isUglify ? antdMobile.Checkbox.CheckboxItem : 'CheckboxItem';
    var _RadioItem = isUglify ? antdMobile.Radio.RadioItem : 'RadioItem';
    var _AgreeItem = isUglify ? antdMobile.Checkbox.AgreeItem : 'AgreeItem';
    var _CheckboxGroup = isUglify ? CheckboxGroup : 'CheckboxGroup';
    var _RadioGroup = isUglify ? RadioGroup : 'RadioGroup';
    var FormItem = /** @class */ (function (_super) {
        __extends(FormItem, _super);
        function FormItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FormItem.prototype.render = function () {
            var props = this.props;
            var _a = props, childrenList = _a.children, className = _a.className, label = _a.label, _b = _a.errorLevel, errorLevel = _b === void 0 ? errorLevelGlobal : _b, fieldProps = __rest(_a, ["children", "className", "label", "errorLevel"]);
            var children = React.Children.only(childrenList);
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
            return (React__default.createElement(reactFormutil.EasyField, __assign({}, fieldProps, { passUtil: "$fieldutil", children: function ($fieldHandler) {
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
                                antdMobile.Modal.alert('Error info', $getFirstError());
                            };
                        case _CheckboxItem:
                        case _RadioItem:
                        case _AgreeItem:
                        case _Range:
                        case _Slider:
                        case _PickerView:
                            return React.cloneElement(children, __assign({}, restProps, errorProps, childProps, { title: label, children: label }));
                        case _DatePicker:
                        case _Picker:
                            return React.cloneElement(children, __assign({}, childProps, { children: (React__default.createElement(ListItem, __assign({}, restProps, errorProps), label)) }));
                        case _CheckboxGroup:
                        case _RadioGroup:
                            return React.cloneElement(children, childProps);
                        default:
                            var renderChild = React.cloneElement(children, childProps);
                            return label ? (React__default.createElement(ListItem, __assign({}, restProps, errorProps, { extra: renderChild }), label)) : (React__default.createElement(ListItem, __assign({}, restProps, errorProps), renderChild));
                    }
                } })));
        };
        FormItem.propTypes = __assign({}, ListItem.propTypes, { label: PropTypes.any, errorLevel: PropTypes.oneOf([0, 1, 2, 'off']), children: PropTypes.element.isRequired });
        return FormItem;
    }(React.Component));

    Object.keys(reactFormutil).forEach(function (key) {
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return reactFormutil[key];
            }
        });
    });
    exports.CheckboxGroup = CheckboxGroup;
    exports.FormItem = FormItem;
    exports.RadioGroup = RadioGroup;
    exports.setErrorLevel = setErrorLevel;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=react-antm-formutil.umd.development.js.map
