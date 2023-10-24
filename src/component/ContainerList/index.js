import {useState} from 'react'
import './index.css'

const ContainerList = (props) => {
    const {containerDetails} = props
    //console.log(props)
    //console.log(containerDetails)
    const {text, numbers} = containerDetails


    const [count, setCount] = useState(0)

    const onclickSeatNum = () => {
        const countNum = count
        if(countNum < 1){
            setCount(countNum +1)
        }
        else if(countNum => 2){
            setCount(count +1)

        }
    }

  return (
        <li className='li-container'>
            <div className='row-num-container'>
            <p className='row-num'>{text}</p>

            </div>
            {numbers.map(eachNum => (
                <div className='seat-container' onClick={onclickSeatNum} >
                    <p className='seat-num'>{eachNum}</p>

                </div>
            ))}
        </li>
  )
}

export default ContainerList