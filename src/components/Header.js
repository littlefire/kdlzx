import React, { Component } from 'react'
import { NavBar, SearchBar } from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'
import Img from '../components/Img'
import '../assets/styles/header.less'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <NavBar
                    leftContent={[
                        <Img key="0" src='logo.png' height={30}/>,
                    ]}
                ><SearchBar placeholder="搜索" maxLength={8} /></NavBar>
            </div>
        )
    }
}
