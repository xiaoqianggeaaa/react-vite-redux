import { Button, FloatButton, Spin } from 'antd';
import {
    useState, useEffect, useCallback
} from 'react'
import { useNavigate  } from 'react-router-dom';
import request from '@/api/api'
export default function Login() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const loginByPortal = useCallback((code) => {
        setLoading(true)
        sessionStorage.setItem('pmsusertoken', 'd1f7a95951c24a1d8981f19665c547ec')
        sessionStorage.setItem('yjk_user', '{"account":"yanrui","userName":"颜瑞","workNo":"052636","departId":"17161","appAccount":"yanrui","title":"主管","pmsUserToken":"d1f7a95951c24a1d8981f19665c547ec"}')
        getMenus('d1f7a95951c24a1d8981f19665c547ec')
    }, [])
    const getMenus = (pmsusertoken) => {
        request.post({
            url: `/api/power/getMenuInSystem?systemType=7`,
        }, {
            token: pmsusertoken
        }).then(res => {
            setTimeout(() =>{
                setLoading(false)
                navigate('/')
            }, 3000)
            sessionStorage.setItem('menuList', JSON.stringify(res.data.data))
        })
    }
    useEffect(() => {
        loginByPortal()
    },[])

    return <div><Spin fullscreen spinning={loading} /></div>
}