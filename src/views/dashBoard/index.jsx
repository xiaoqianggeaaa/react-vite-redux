
import './index.less'
import React, { useRef, useEffect, useImperativeHandle, useState } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import TestComponent from '../../component/testComponent';
import { Button } from 'antd'
import request from '@/api/api'
const FancyInput = React.forwardRef((props, ref) => {
    console.log(props, 'propsprops')
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        state: 1
    }));

    return <input ref={inputRef} type="text" />
})
const Dashboard = (props) => {
    const navigate = useNavigate()
    console.log(props, '>>>>>>>>>>Sd')
    const getMenus = (pmsusertoken) => {
        request.post({
            url: `/api/power/getMenuInSystem?systemType=7`,
        }, {
            token: pmsusertoken
        }, props.dispatch).then(res => {
            setTimeout(() => {
                setLoading(false)
                navigate('/')
            }, 3000)
            sessionStorage.setItem('menuList', JSON.stringify(res.data.data))
        })
    }
    const testRef = useRef()
    const fancyInputRef = useRef();
    const [count, setCount] = useState(0)
    return <div className="page-content" onClick={() => {
        console.log(testRef.current, '>>>>>>>>>>Sd')
    }}>
        <Button
            onClick={() => getMenus()}
        >点击 {props.counter}</Button>
        <Button
        onClick={() => {
            props.dispatch({type:'INCREMENT', ccData: 'ccc'})
            navigate('/sys')
        }}
        >点击ww</Button>
        <TestComponent ref={testRef} dd="cc" ff="fff" getCount={() => {
            setCount(count => count + 1)

            console.log(testRef.current.setSate(state => state + 1))
        }} />
    </div>
}
export default Dashboard

