import { Button } from 'evergreen-ui';
import React from 'react'
import { useState } from 'react';

function TestFooter(props) {
    
  return (
    <div>TestFooter
        <footer className='d-flex justify-content-end gap-2 ' >
            <Button appearance="primary" intent="success" >บันทึก</Button>
            <Button intent='danger' onClick={props.show} >ยกเลิก</Button>
        </footer>
    </div>
  )
}

export default TestFooter