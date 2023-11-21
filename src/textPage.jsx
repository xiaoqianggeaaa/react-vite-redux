import { useState, useCallback,useEffect } from "react";
export default function TextPage(...props) {
    console.log(props, '??')
    const [count, setCount] = useState(1)
    const [num, setNum] = useState(0)
    let testFn = () =>{}
    const handleClick = useCallback(() => {
        console.log(66, ProductPage, num)
    },[num])

    const handleSet = () => {
        setNum(num => num +1)
        setCount(count => count +1)
        console.log(handleClick == testFn)

        setTimeout(() => {
        }, 2000)
    }
    useEffect(() =>{
        testFn = handleClick
    },[])
    return <div >testPage...{count} {num}
        <div>
            <button onClick={ProductPage}>确定</button>
            <button onClick={handleSet}>确定1</button>
        </div>
    </div>
}
function ProductPage({ productId ='', referrer ='', theme ='' } ={}) {
    const handleSubmit = useCallback((orderDetails) => {
      post('/product/' + productId + '/buy', {
        referrer,
        orderDetails,
      });
    }, [productId, referrer])
    return <></>
}