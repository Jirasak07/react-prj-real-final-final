import { MDBInput } from 'mdbreact'
import React from 'react'


function User_Add() {
  return (
    <div>
        <MDBInput label="username" outline  />
        <MDBInput label="password" outline />
        <div className='btn btn-success' >เพิ่ม</div>
    </div>
  )
}

export default User_Add