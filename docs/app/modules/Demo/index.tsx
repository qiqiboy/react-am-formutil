import React from 'react';
import {
    WhiteSpace,
    WingBlank,
    List,
    InputItem,
    TextareaItem,
    Checkbox,
    Radio,
    Switch,
    Range,
    Slider,
    Picker,
    DatePicker,
    PickerView,
    Stepper
} from 'antd-mobile';
import { withForm, FormItem } from '../../../../';

// const data = [{ value: 0, label: 'Ph.D.' }, { value: 1, label: 'Bachelor' }, { value: 2, label: 'College diploma' }];
const seasons = [
    [
        {
            label: '2013',
            value: '2013'
        },
        {
            label: '2014',
            value: '2014'
        }
    ],
    [
        {
            label: '春',
            value: '春'
        },
        {
            label: '夏',
            value: '夏'
        }
    ]
];

function Standard(props) {
    return (
        <WingBlank>
            <h3>Input/Textarea</h3>
            <List>
                <FormItem name="input.full" placeholder="without label" required>
                    <InputItem type="text" />
                </FormItem>
                <FormItem name="input.text" label="Input" placeholder="Text" required>
                    <InputItem type="text" />
                </FormItem>
                <WingBlank style={{ margin: '5px 12px' }}>在转出方券商账户姓名，必须与老虎证券开户姓名一致</WingBlank>
                <FormItem name="input.pwd" label="Password Password" placeholder="Password" required>
                    <InputItem type="password" clear />
                </FormItem>
                <FormItem name="input.money" label="Money" placeholder="Money" required>
                    <InputItem type="money" extra="¥" moneyKeyboardAlign="left" />
                </FormItem>
                <FormItem name="textarea.text" required placeholder="MultipLine" label="Textarea">
                    <TextareaItem autoHeight />
                </FormItem>
                <FormItem name="textarea.count" required placeholder="MultipLine" label="Count">
                    <TextareaItem count={100} rows={3} />
                </FormItem>
            </List>

            <h3>Checkbox/Radio/Switch</h3>
            <List>
                <FormItem name="checkbox" label="checkbox" required>
                    <Checkbox.CheckboxItem />
                </FormItem>
                <FormItem name="radio" label="radio" required>
                    <Radio.RadioItem />
                </FormItem>
                <FormItem name="switch" label="switch" required>
                    <Switch />
                </FormItem>
            </List>

            <h3>DatePicker</h3>
            <List>
                <FormItem name="datepicker" label="DatePicker" required>
                    <DatePicker />
                </FormItem>
            </List>

            <h3>Range</h3>
            <WingBlank size="lg">
                <FormItem name="range" required $defaultValue={[5, 10]}>
                    <Range min={0} max={20} />
                </FormItem>
            </WingBlank>
            <WhiteSpace size="lg" />

            <h3>Slider</h3>
            <WingBlank size="lg">
                <FormItem name="slider" required $defaultValue={20}>
                    <Slider />
                </FormItem>
            </WingBlank>
            <WhiteSpace size="lg" />

            <h3>Stepper</h3>
            <List>
                <FormItem name="stepper" label="Stepper" required>
                    <Stepper showNumber />
                </FormItem>
            </List>

            <h3>Picker</h3>
            <List>
                <FormItem name="picker" label="Picker" required>
                    <Picker data={seasons} cascade={false} />
                </FormItem>
            </List>

            <h3>PickerView</h3>
            <FormItem name="pickerview" required>
                <PickerView data={seasons} cascade={false} />
            </FormItem>

            <h3>$params</h3>
            <List>
                <List.Item>
                    <pre>{JSON.stringify(props.$formutil.$params, null, 2)}</pre>
                </List.Item>
            </List>
            <h3>$errors</h3>
            <List>
                <List.Item>
                    <pre>{JSON.stringify(props.$formutil.$errors, null, 2)}</pre>
                </List.Item>
            </List>
            <WhiteSpace size="lg" />
        </WingBlank>
    );
}

export default withForm(Standard);
