import React, { Component } from 'react'
import '../assets/styles/loginPage.less'
import Img from '../components/Img'
// import IMG from '../assets/images/logo.png'
import FormInput from '../components/FormInput'


export default class LoginPage extends Component {
    render() {
        return (
            <div className='login-page'>
                {/* 图片 */}
                <Img src="logo.png"></Img>
                {/* <img src={IMG}></img> */}
                {/* <img src={require("../assets/images/logo.png")}></img> */}
                {/* {表单} */}
                <form className='login-form'>
                    <FormInput iconClass="shouji" type="text" placeholder="用户名"></FormInput>
                    <FormInput iconClass="mima" type="password" placeholder="密码"></FormInput>
                </form>
            </div>
        )
    }
}
