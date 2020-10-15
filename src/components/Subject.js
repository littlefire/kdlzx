import React, { Component } from 'react'
import '../assets/styles/subject.less'
import { Flex } from 'antd-mobile';


export default class Subject extends Component {
    render() {
        return (
            <div className='subject'>
                <Flex>
                    <Flex.Item>
                        <a>
                            <i style={{backgroundPositionX:0}}></i>
                            <p>Java EE</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a>
                            <i style={{backgroundPositionX:-50}}></i>
                            <p>全栈设计</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a>
                        <i style={{backgroundPositionX:-100}}></i>
                            <p>H5前端</p>
                        </a>
                    </Flex.Item>
                    <Flex.Item>
                        <a>
                        <i style={{backgroundPositionX:-150}}></i>
                            <p>Python</p>
                        </a>
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <a>
                        <i style={{backgroundPositionX:-200}}></i>
                            <p>IOS</p>
                        </a>
                    </Flex.Item><Flex.Item>
                        <a>
                        <i style={{backgroundPositionX:-250}}></i>
                            <p>大数据</p>
                        </a>
                    </Flex.Item><Flex.Item>
                        <a>
                        <i style={{backgroundPositionX:-300}}></i>
                            <p>C++</p>
                        </a>
                    </Flex.Item><Flex.Item>

                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}
