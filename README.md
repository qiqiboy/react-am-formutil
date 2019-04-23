# react-am-formutil

[![npm](https://img.shields.io/npm/v/react-am-formutil.svg?style=flat)](https://npm.im/react-am-formutil)
[![peerDependencies](https://img.shields.io/npm/dependency-version/react-am-formutil/peer/react.svg?color=yellowgreen)](https://reactjs.org)
[![definitionTypes](https://img.shields.io/npm/types/react-am-formutil.svg)](https://github.com/qiqiboy/react-am-formutil/blob/master/dist/index.d.ts)
[![gzip](https://img.shields.io/bundlephobia/minzip/react-am-formutil.svg)](https://npm.im/react-am-formutil)
[![download](https://img.shields.io/npm/dm/react-am-formutil.svg)](https://npm.im/react-am-formutil)
[![issues](https://img.shields.io/github/issues/qiqiboy/react-am-formutil.svg)](https://github.com/qiqiboy/react-am-formutil/issues)
[![license](https://img.shields.io/github/license/qiqiboy/react-am-formutil.svg)](https://github.com/qiqiboy/react-am-formutil/blob/master/LICENSE)
[![github](https://img.shields.io/github/last-commit/qiqiboy/react-am-formutil.svg)](https://github.com/qiqiboy/react-am-formutil)
[![github](https://img.shields.io/github/release-date/qiqiboy/react-am-formutil.svg)](https://github.com/qiqiboy/react-am-formutil/releases)
[![github](https://img.shields.io/github/commit-activity/m/qiqiboy/react-am-formutil.svg)](https://github.com/qiqiboy/react-am-formutil/commits/master)
[![github](https://img.shields.io/github/stars/qiqiboy/react-am-formutil.svg?style=social)](https://github.com/qiqiboy/react-am-formutil)

[![react-am-formutil](https://nodei.co/npm/react-am-formutil.png?compact=true)](https://npm.im/react-am-formutil)

Happy to use react-formutil in the project based on antd-mobile^\_^

在 [antd-mobile](https://mobile.ant.design) 项目，结合 [react-formutil](https://github.com/qiqiboy/react-formutil) 来快速构建表单。

> **如果你在使用其他 react 组件库，可以查阅：**
>
> 1.  ant-design [`react-antd-formutil`](https://github.com/qiqiboy/react-antd-formutil) [![npm](https://img.shields.io/npm/v/react-antd-formutil.svg?style=flat)](https://npm.im/react-antd-formutil)
> 1.  react-bootstrap [`react-bootstrap-formutil`](https://github.com/qiqiboy/react-bootstrap-formutil) [![npm](https://img.shields.io/npm/v/react-bootstrap-formutil.svg?style=flat)](https://npm.im/react-bootstrap-formutil)
> 1.  react-md [`react-md-formutil`](https://github.com/qiqiboy/react-md-formutil) [![npm](https://img.shields.io/npm/v/react-md-formutil.svg?style=flat)](https://npm.im/react-md-formutil)
> 1.  Material-UI [`react-material-formutil`](https://github.com/qiqiboy/react-material-formutil) [![npm](https://img.shields.io/npm/v/react-material-formutil.svg?style=flat)](https://npm.im/react-material-formutil)

<!-- vim-markdown-toc GFM -->

- [安装 Installation](#安装-installation)
- [使用 Usage](#使用-usage)
    + [`<FormItem />`](#formitem-)
        * [`label`](#label)
        * [`name`](#name)
        * [`$defaultValue`](#defaultvalue)
        * [`$validators`](#validators)
        * [`$parser`](#parser)
        * [`$formatter`](#formatter)
        * [`checked` `unchecked`](#checked-unchecked)
        * [`validMessage`](#validmessage)
        * [`valuePropName` `changePropName` `focusPropName` `blurPropName`](#valuepropname-changepropname-focuspropname-blurpropname)
        * [`errorLevel`](#errorlevel)
    + [`setErrorLevel(level)`](#seterrorlevellevel)
    + [`支持的组件`](#支持的组件)
        * [`Checkbox` `Checkbox.CheckboxItem`](#checkbox-checkboxcheckboxitem)
        * [`Radio` `Radio.RadioItem`](#radio-radioradioitem)
        * [`Switch`](#switch)
        * [`DatePicker` `DatePickerView`](#datepicker-datepickerview)
        * [`Picker` `PickerView`](#picker-pickerview)
        * [`InputItem` `TextareaItem`](#inputitem-textareaitem)
        * [`Slider` `Range`](#slider-range)
        * [`Stepper`](#stepper)
        * [`CheckboxGroup` `RadioGroup`](#checkboxgroup-radiogroup)
- [FAQ](#faq)
    + [`给组件设置的onChange、onFocus等方法无效、不执行`](#给组件设置的onchangeonfocus等方法无效不执行)

<!-- vim-markdown-toc -->

### 安装 Installation

[![react-am-formutil](https://nodei.co/npm/react-am-formutil.png?compact=true)](https://npm.im/react-am-formutil)

```bash
# npm
npm install react-am-formutil --save

# yarn
yarn install react-am-formutil
```

### 使用 Usage

> `react-am-formutil` 整合了 `react-formutil` 的组件，所以可以直接从`react-am-formutil`中导出所需要的 `react-formutil` 组件。不用单独从 react-formutil 中导出。

先看一个简单的示例：

```javascript
import React, { Component } from 'react';
import { withForm, FormItem } from 'react-am-formutil';
import { List, InputItem } from 'antd-mobile';

@withForm
class MyForm extends Component {
    submit = () => {
        const { $invalid, $getFirstError, $params } = this.props.$formutil;

        if ($invalid) {
            alert($getFistError());
        } else {
            // submit your data
        }
    };

    render() {
        return (
            <form noValidate onSubmit={this.onSubmit}>
                <List>
                    <FormItem name="username">
                        <InputItem />
                    </FormItem>
                </List>
            </form>
        );
    }
}
```

`react-am-formutil`提供了一个 `FormItem` 组件，通过将`antd-mobile`的`data-entry`型组件（例如, InputItem、Checkbox.CheckboxItem 等），直接当作 children 传递给该组件，来实现对`data-entry`型组件的值的捕获与同步。

#### `<FormItem />`

`antd-mobile`的表单型组件，大多数都是结合了其`List.Item`，所以我们提供的`FormItem`也会使用`List.Item`来包装 UI。如果你不希望如此，请直接使用`react-formutil`提供的`EasyField`组件即可。

在使用前，需要知晓以下原则：

-   `FormItem` 应当嵌套放置在`<List />`组件下方使用。
-   `FormItem` 不提供额外的错误信息展示，这是因为本身`List.Item`也没有提供很好的错误信息展示的设计。如果需要对用户展示错误信息提示，应当使用`Toast` `Modal`等组件提示。
-   `FormItem` 提供了额外的`am-formutil-xxx`的 className 支持，你可以通过这些 classNames 来使用 css 控制表单项的错误反馈显示。

**支持传递的属性**

`FormItem`是基于`EasyField`组件实现的，所以它可以接收所有的`EasyField`支持的属性；另外它也可以接收一些`List.Item`或者`Checkbox.CheckboxItem`等组件的属性（根据嵌套传递的组件变化）。

这里介绍几个和表单处理相关的常用属性：

##### `label`

表单项的标题/名字，支持字符串或者 reactNode。需要注意的是，并不是所有的组件都支持`label`，对于部分组件，例如`Slider` `Range`等，该属性是无效的。

```javascript
<FormItem name="username" label="用户名">
    <InputItem />
</FormItem>
```

##### `name`

设置输入项的 name 值，表单项将会以 name 作为 key 收集到 formutil 的状态中。支持嵌套语法 _（同`react-formutil`的`Field`同名参数，可以参考 [name](https://github.com/qiqiboy/react-formutil#name)）_

##### `$defaultValue`

设置该表单项的默认值 _（同`react-formutil`的`Field`同名参数，可以参考[\$defaultvalue](https://github.com/qiqiboy/react-formutil#defaultvalue)）_

##### `$validators`

设置校验方法 _（同`react-formutil`的`Field`同名参数, 可以参考 [\$validators](https://github.com/qiqiboy/react-formutil#validators)）_

> 同 react-formutil 的 EasyField，FormItem 也内置了同样的校验规则：

> -   `required` 必填 `required`
> -   `maxLength` 。最大输入长度，有效输入时才会校验 `maxLength="100"`
> -   `minLength` 最小输入长度，有效输入时才会校验 `minLength="10"`
> -   `max` 最大输入数值，仅支持 Number 比较。有效输入时才会校验 `max="100"`
> -   `min` 最小输入数值，仅支持 Number 比较。有效输入时才会校验 `min="10"`
> -   `pattern` 正则匹配。有效输入时才会校验 `pattern={/^\d+$/}`
> -   `enum` 枚举值检测。有效输入时才会校验 `enum={[1,2,3]}`
> -   `checker` 自定义校验函数。`checker={value => value > 10 && value < 100 || '输入比如大于10小与100'}`

注：校验属性的值为 `null` 时表示不进行该校验

内置的校验规则无需再次声明，除非规则不符合预期，需要替换，则可以通过`$validators` 传递同名校验方法即可替换默认的。另外，内置的校验规则，如果校验不通过，会尝试去 `validMessage` 匹配错误信息。

##### `$parser`

请参考`react-formutil`中[`$parser`](https://github.com/qiqiboy/react-formutil#parser)介绍。

##### `$formatter`

请参考`react-formutil`中[`$formatter`](https://github.com/qiqiboy/react-formutil#formatter)介绍。

##### `checked` `unchecked`

对于 `<Switch />` `<Checkbox />` `<Radio />` 等组件，其值默认是 checked 属性，为布尔值。可以通过`checked` `unchecked`来设置 checked 状态时所要映射的值：

```javascript
<FormItem checked="yes" unchecked="no">
    <Switch />
</FormItem>
```

该示例中， 当 Switch 为开时，获取的值将为 yes。

##### `validMessage`

设置校验结果的错误信息。

```javascript
<FormItem
    name="username"
    required
    validMessage={{
        required: '请输入用户名'
    }}>
    <InputItem />
</FormItem>
```

##### `valuePropName` `changePropName` `focusPropName` `blurPropName`

该四个参数可以用来设置绑定到组件上的值或者值变动、是否聚焦等事件回调。该项一般不需要设置，`FormItem` 已经针对 `antd` 中的所有 `data-entry` 型组件做了兼容处理。

对于一些特殊场景，例如不需要同步 `focus`、`blur`，则可以通过将该值设为`{null}`来禁用：

```javascript
//禁用focus、blur状态同步
<FormItem focusPropName={null} blurPropName={null} name="username">
    <InputItem />
</FormItem>
```

##### `errorLevel`

用来覆盖全局的 errorLevel 设置。参考[`setErrorLevel(level)`](#seterrorlevellevel)

#### `setErrorLevel(level)`

`setErrorLevel` 该方法可以用来全局设置错误信息何时出现，有三个级别可以设置：

-   `0` 当`$dirty` `$touched` `$invalid` 都为 true 时
-   `1` 当`$dirty` `$invalid` 都为 true 时
-   `2` 当`$invalid` 为 true 时
-   `off` 关闭错误显示

默认值为 `1`

> 注意，该方法影响全局，如果只是希望单独对某个表单项进行设置，可以通过`errorLevel`属性进行设置：参考[`errorLevel`](#errorlevel)

```javascript
import { setErrorLevel } from 'react-antd-formutil';

setErrorLevel(0);

// 当关闭错误显示时，errorLevel='off'，你可以手动自行设置错误展示方式：
<FormGroup name="errorOff" errorLevel="off">
    <InputItem />
</FormGroup>;
```

#### `支持的组件`

##### `Checkbox` `Checkbox.CheckboxItem`

```javascript
<FormItem name="agree" label="我同意">
    <Checkbox />
</FormItem>

<FormItem name="agree" label="我同意">
    <Checkbox.CheckboxItem />
</FormItem>
```

**小技巧** 可以通过传递`checked` `unchecked`属性来改变映射到表单中的值

##### `Radio` `Radio.RadioItem`

##### `Switch`

同`Checkbox`等用法

##### `DatePicker` `DatePickerView`

`DatePicker`不需要传递 children 属性：

```javascript
<FormItem name="date">
    <DatePicker />
</FormItem>
```

`DatePickerView`不支持`label`：

```javascript
<FormItem name="date" label>
    <DatePickerView />
</FormItem>
```

##### `Picker` `PickerView`

`Picker`不需要传递 children 属性：

```javascript
<FormItem name="address">
    <Picker data={data} />
</FormItem>
```

`PickerView`不支持`label`：

```javascript
<FormItem name="address" label>
    <PickerView data={data} />
</FormItem>
```

**小技巧** 因为`Picker`组件总是返回数组值，你可以使用`$parser`来转换。

##### `InputItem` `TextareaItem`

```javascript
<FormItem name="password">
    <InputItem type="password" />
</FormItem>

<FormItem name="comment">
    <TextareaItem count={200} />
</FormItem>
```

##### `Slider` `Range`

```javascript
<FormItem name="age">
    <Slider />
</FormItem>

<FormItem name="range">
    <Range />
</FormItem>
```

##### `Stepper`

```javascript
<FormItem name="amount">
    <Stepper />
</FormItem>
```

##### `CheckboxGroup` `RadioGroup`

这两个组件不是`antd-mobile`提供的，而是由`react-am-formutil`提供的，用来实现多选组/单选组场景：

```javascript
// 需要从react-am-formutil中导出这两个组件
import { CheckboxGroup, RadioGroup, FormItem } from 'react-am-formutil';

<FormItem name="hobbies">
    <CheckboxGroup
        data={[
            {
                value: 'movie',
                title: '电影'
            },
            {
                value: 'music',
                title: '音乐'
            }
        ]}
    />
</FormItem>

<FormItem name="hobby">
    <RadioGroup
        data={[
            {
                value: 'movie',
                title: '电影'
            },
            {
                value: 'music',
                title: '音乐'
            }
        ]}
    />
</FormItem>;
```

这两个组件接收一个data属性，其至少包含`{value, title}`两个字段属性，还可以传递其它属性字段，它们将会传递给实际的`CheckboxItem`或者`RadioItem`组件。

```javascript
<FormItem name="hobbies">
    <CheckboxGroup
        data={[
            {
                value: 'movie',
                title: '电影',
                disabled: true // 禁用该项选择
            },
            {
                value: 'music',
                title: '音乐'
            }
        ]}
    />
</FormItem>
```

### FAQ

#### `给组件设置的onChange、onFocus等方法无效、不执行`

`FormItem`会覆盖掉直接添加到 antd-mobile 组件上的`onFocus` `onBlur` `onChange`方法，所以如果需要这三个事件方法，需要添加到 `FormItem`上：

```javascript
<FormItem name="test" onChange={ev => console.log('change', ev)} onFocus={ev => console.log('focus', ev)}>
    <InputItem />
</FormItem>
```
