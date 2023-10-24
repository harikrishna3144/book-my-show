import React from 'react'
import SelectUserType from '../SelectUserType'
import './index.css'
import SelectSeat from '../SelectSeat'

const BookMyShow = () => {
  return (
    <div className='Main-container'>
        <div>
            <SelectUserType />
            <SelectSeat/>
        </div>

    </div>
  )
}

export default BookMyShow
