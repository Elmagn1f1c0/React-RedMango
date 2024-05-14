import React from 'react'

function MenuItemDetails() {
  return (
    <div className='container pt-4 pt-md-5'>
        <div className='row'>
            <div className='col-7'>
                <h2 className='text-success'>NAME</h2>
                <span>
                    <span className='badge text-bg-dark pt-2'
                    style={{height: "40px", fontSize: "20px"}}>
                        CATEGORY
                    </span>
                </span>
                <span>
                    <span className='badge text-bg-light pt-2'
                    style={{height: "40px", fontSize: "20px"}}>
                        SPECIAL TAG
                    </span>
                </span>
                <p style={{fontSize: "20px"}} className='pt-2'>
                    DESCRIPTION
                </p>
            </div>
        </div>
    </div>
  )
}

export default MenuItemDetails