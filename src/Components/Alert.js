import React from 'react'

export default function Alert(props) {
  return (
    <div className='container' style={{ height: '2rem' }}>
      {props.alert && <div className="alert alert-success" role="alert">
        {props.alert.type}! {props.alert.msg}
      </div>}
    </div>
  )
}
