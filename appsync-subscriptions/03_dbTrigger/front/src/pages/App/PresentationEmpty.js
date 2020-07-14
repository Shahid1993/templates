import React from 'react';

export default function AppPresentationEmpty(props) {
  return <div>
    <button className='button mb-5 mr-2' onClick={props.create}>Send Data</button>
    <h1 className='is-size-4'>Status: {props.sendingStatus ? 'sending...' : ''}</h1>
    <div className='card px-5 py-5'>
      <p className='has-text-weight-bold'>Past Transactions</p>
      <p>There is no data available yet!</p>
    </div>
  </div>
}


