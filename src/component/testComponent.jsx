import React, { forwardRef, useState, useImperativeHandle, useRef, useContext } from 'react'
import { Button } from 'antd'
//  const TestComponent = forwardRef((ref,props) => {
//     const testRef = useRef()
//     useImperativeHandle(ref, () => ({
//         focus: () => {
//             inputRef.current.focus();
//         },
//         state: 1
//     }));
//     const [count, setCount ] = useState(0)
//     return <div ref={testRef}>TestComponent</div>
// })
// export default TestComponent
const FancyInput = forwardRef((props, ref) => {
    const [state, setSate] = useState(1)
    useImperativeHandle(ref, () => ({
        state: state,
        setSate,
        ...props
    }));

    return <div>TestComponent<Button onClick={() => context.setData({a:'ddd'})}>添加{state}{context.data.a}</Button></div>
})
export default FancyInput