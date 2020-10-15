import React, { Component } from 'react'
import '../assets/styles/loginPage.less'
import Img from '../components/Img'
// import IMG from '../assets/images/logo.png'
import FormInput from '../components/FormInput'
import FormBtn from '../components/FormBtn'


export default class LoginPage extends Component {
    render() {
        return (
            <div className='login-page'>
                {/* logo 图片 */}
                <Img src="logo.png"></Img>
                {/* <img src={IMG}></img> */}
                {/* <img src={require("../assets/images/logo.png")}></img> */}
                {/* {form 表单} */}
                <form className='login-form'>
                    {/* 1.用户输入框 */}
                    <FormInput iconClass="shouji" type="text" placeholder="用户名"></FormInput>
                    {/* 2.密码输入框 */}
                    <FormInput iconClass="mima" type="password" placeholder="密码"></FormInput>
                    {/* 3.登陆按钮 */}
                    <FormBtn isFull={true}>登陆</FormBtn>
                    {/* 4.忘记密码按钮 */}
                    <FormBtn type='ordinary'>忘记密码</FormBtn>
                    {/* 5.免费注册 */}
                    <FormBtn>免费注册</FormBtn>&ensp;
                    {/* 6.游客登陆 */}
                    <FormBtn>游客登陆</FormBtn>
                </form>
            </div>
        )
    }
}
