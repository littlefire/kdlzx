import React, { Component } from 'react'

// 抽取 公共图片组件 通过传入 图片名称获取图片展示
export default class Img extends Component {
    render() {
        return (
            <div className='img-div'>
                <img src={require('../assets/images/' +this.props.src)} height={this.props.height}></img>
            </div>
        )
    }
}
