import React from 'react'
import { useLocation } from 'react-router-dom';

function CheckProduct() {
    const location = useLocation();
    const data = location.state.id
  return (
    <div>CheckProduct {data} </div>
  )
}

export default CheckProduct