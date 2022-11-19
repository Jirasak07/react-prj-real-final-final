import { MDBInput } from 'mdbreact'
import React from 'react'


function User_Add() {
  return (
    <div>
        <MDBInput label="username" outline  />
        <MDBInput label="password" outline />
        <MDBInput type='file' label="555" outline />
        <div className='btn btn-success' >เพิ่ม</div>
    </div>
  )
}

export default User_Add