/**
 * Created by ellinoise on 12.01.17.
 */

import React, { Component } from 'react';
import load from './utils/load';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';

// const config = {
//     path: './data.json',
//     amount: 150,
//     phraseLength: 15,
//     images: ['cat', 'dog', 'fox', 'koala', 'lion', 'owl', 'penguin', 'pig', 'raccoon', 'sheep']
// };

export default class App extends Component {
    constructor(props) {
        super(props);
        // Устанавливаем состояние
        this.state = {
            data: null,
            active: 0,
            term: ''
        };
        // Сразу загружаем данные
        this.loadData();
    }

    loadData() {
        load(this.props.data).then(users => {
            this.setState({
                data: JSON.parse(users)
            });
        });
    }

    updateData(config) {
        this.setState(config);
    }

    render() {
        return (
            <div className="app container-fluid">
                <div className="row">
                    <div className="col-sm-4 col-md-3 col-lg-2">
                        <ActiveUser data={this.state.data} active={this.state.active} />
                    </div>
                    <div className="col-sm-8 col-md-9 col-lg-10">
                        <UserList data={this.state.data} update={this.updateData.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}