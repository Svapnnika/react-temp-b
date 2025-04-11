import React from 'react'

export default function Hello(props) {
  return (
    <div>
      <h1>Hey {props.name}</h1>
      <h2>When should you use default props?</h2>
      <ul>
        <li>When you want to avoid errors due to missing props.</li>
        <li>When you want to ensure your component always behaves predictably.</li>
        <li>Default props are values that a component uses when no prop is passed for a particular property.
            Think of them as a backup value for a prop.</li>
      </ul>
      <h2>There are two ways to define default props in functional components.</h2>
      <ol>
        <li> Using default parameters in function</li>
        <li>Using defaultProps (older way, still valid)</li>
      </ol>
    </div>
  )
}

