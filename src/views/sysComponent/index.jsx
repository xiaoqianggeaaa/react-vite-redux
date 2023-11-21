import React, { useEffect, useCallback, useMemo, useState, useRef, useLayoutEffect, useReducer, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/reduxTool/counterSlice'
import { useNavigate } from 'react-router-dom'
import listData from '@/assets/listData'
import { Select, List, Avatar, Button } from 'antd';
import { Context } from '@/utils/context'
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};
const options = listData.data.map(item => {
  return {
    value: item.jiraIssueCode,
    title: item.jiraIssueSummary
  }
})
console.log(options, '??')
// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
const dataList = options
const parenDiv = document.createElement('div')

for (var i = 0; i < dataList.length; i++) {
  const childDiv = document.createElement('div')
  parenDiv.appendChild(childDiv)

}
console.log(parenDiv, dataList.length)

function BoxComparison() {
  const [heightEffect, setHeightEffect] = useState(0);
  const [heightLayoutEffect, setHeightLayoutEffect] = useState(0);
  const refEffect = useRef(null);
  const refLayoutEffect = useRef(null);

  // useEffect(() => {
  //   if (refEffect.current) {
  //     setHeightEffect(refEffect.current.offsetWidth);
  //   }
  // }, []);

  useLayoutEffect(() => {
    if (refLayoutEffect.current) {
      setHeightLayoutEffect(refLayoutEffect.current.offsetWidth);
    }
  }, []);

  return (
    <div>
      <div>
        <h2>使用 useEffect</h2>
        <div ref={refEffect} style={{ width: '200px', height: '50px', background: 'lightgray' }}>这是一个方块</div>
        <div style={{ width: '1000px', height: `${heightEffect}px`, background: 'red', marginTop: '10px' }}>红色方块</div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2 onClick={() => setHeightEffect(3000)}>使用 useLayoutEffect</h2>
        <div ref={refLayoutEffect} style={{ width: '200px', height: '50px', background: 'lightgray' }}>这是一个方块</div>
        <div style={{ width: '1000px', height: `${heightLayoutEffect}px`, background: 'blue', marginTop: '10px' }}>蓝色方块</div>
      </div>
    </div>
  );
}

const initalState = { count: 1 }
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { num: 'cc' }
    case 'decrement':
      return {
        num: 'dd'
      }
  }
}
export default function Counter() {
  const [count, setCount] = useState(1)
  const { state, dispatch } = useContext(Context)
  const [inter, setInter] = useState(() => { })
  const router = useNavigate()
  let timer = null
  const callFn = useCallback(() => {
    return 'xx'
  })
  const callData = useMemo(() => ({ b: 'ss', count }))

  const [num, setNum] = useState(0)

  const ref = useRef()


  useEffect(() => {
    if (num > 10) {
      console.log('大于10了，清除定时器')
      console.log('ref.current', timer)
      timer = null
      clearInterval(timer)
    }
  }, [num])



  const data = useSelector(state => {
    return state.counter
  })
  console.log(data, '>>>>>ss')
  function handleScroll(e) {
    console.log(e.target.scrollTop)
  }

  return (
    <div style={{ height: '100%', overflow: 'auto' }} onScroll={handleScroll}>
      <Button onClick={() => setCount(count + 1)}>count {count}{callData.count}</Button>
      <Button onClick={() => dispatch({ type: 'decrement' })}>decrement</Button>

      <BoxComparison />
      <List
        itemLayout="horizontal"
        dataSource={[]}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </div>
  )
}