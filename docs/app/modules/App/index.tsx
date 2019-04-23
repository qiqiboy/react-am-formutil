import React, { Component } from 'react';
import Demo from 'modules/Demo';
import { WingBlank } from 'antd-mobile';

class App extends Component {
    render() {
        return (
            <div>
                <WingBlank>
                    <h2 style={{ textAlign: 'center' }}>react-am-formutil</h2>
                </WingBlank>

                <Demo />
            </div>
        );
    }
}

export default App;
