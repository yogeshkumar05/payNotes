import React, {Component} from 'react';
import Login from './Login';
import Header from '../components/common/Header';
export default class App extends Component
{
    render()
    {
        return(
            <div className='app-container'>
                <Header header='Login'/>
                <Login/>
            </div>
        )
    }
}