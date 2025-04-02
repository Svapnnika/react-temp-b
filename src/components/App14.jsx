import React from 'react'
import Parent from './Parent'
import Child1 from './Child1'
import Child2 from './Child2'


export default function App14() {
  return (
    <div>
      <h1>This is App14</h1>
      <Parent name="svap">
        <Child1 />
        <Child2 />
      </Parent>
    </div>
  )
}
