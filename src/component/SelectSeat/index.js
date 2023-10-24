import './index.css'
import ContainerList from '../ContainerList'

const dbData = [
  {
    id:'1',
    pData:[
      {
        optionId:'11',
        text:'Q',
        numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
      }
    ]
  },
  {
    id:'2',
    pData:[
      {
        optionId:'12',
        text:'P',
        numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
      }
    ]
  },
  {
    id:'3',
    pData:[
      {
        optionId:'13',
        text:'N',
        numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
      }
    ]
  },
  {
    id:'4',
    pData:[
      {
        optionId:'13',
        text:'M',
        numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
      }
    ]
  },
  {
    id:'5',
    pData:[
      {
        optionId:'13',
        text:'N',
        numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
      }
    ]
  },
  {
    id:'6',
    pData:[
      {
        optionId:'13',
        text:'L',
        numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
      }
    ]
  },
  {
    id:'7',
    pData:[
      {
        optionId:'13',
        text:'K',
        numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
      }
    ]
  },
  {
    id:'8',
    pData:[
      {
        optionId:'13',
        text:'J',
        numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
      }
    ]
  },
  {
    id:'9',
    pData:[
      {
        optionId:'13',
        text:'H',
        numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
      }
    ]
  },
  {
    id:'10',
    pData:[
      {
        optionId:'13',
        text:'G',
        numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
      }
    ]
  },
  {
    id:'11',
    pData:[
      {
        optionId:'13',
        text:'F',
        numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
      }
    ]
  },
  {
    id:'12',
    pData:[
      {
        optionId:'13',
        text:'E',
        numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
      }
    ]
  },
]

const SelectSeat = () => {

  return (
    <div>
    <div className='main-container'>
      <div>
    <div className='select-seat-container'>
      <ul className='ul-container'>
        {dbData.map(eachList => (
          <ContainerList key={eachList.id} containerDetails={eachList.pData[0]} />
        ))}
      </ul>
    </div>
    <div className='proceed-btn-container'>
      <button type='button' className='proceed-btn' >PROCEED</button>


    </div>
    </div>
    <div className='total-seat-details'>
        <h1 className='heading'>Key to SeatLayout:</h1>
        <div className='available-container'>
          <div className='available-status-container'>
            <div className='available'>

            </div>
            <p>Available</p>
          </div>

          <div className='available-status-container'>
            <div className='unavailable'>

            </div>
            <p>Unavailable</p>
          </div>

          <div className='available-status-container'>
            <div className='select-type'>

            </div>
            <p>Your Selection</p>
          </div>

        </div>
      </div>
    </div>

    </div>
  )
}

export default SelectSeat