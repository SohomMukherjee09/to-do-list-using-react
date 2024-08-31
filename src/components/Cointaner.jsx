import React from 'react'
import { useRef, useState } from 'react'
import './cointaner.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons/faDeleteLeft'
import { FaDeleteLeft, FaTrash } from 'react-icons/fa6'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'
const Cointaner = (props) => {


  const element = <FontAwesomeIcon icon={faEdit} />
  const icon = <FontAwesomeIcon icon={faTrash} />

  const refer = useRef()


  return (
    <div>


      <div  ref={refer}  className="con">

        <div className="check">

          {/* {console.log(props.status)} */}
          <input onChange={() => { props.checker(props.status, props.txt) }} checked={props.status} type="checkbox" />

        </div>

        <div ref={props.con1} className={(props.status) ? " content line" : "content"} >
            <div>
                {props.txt}
            </div>

            <div className='ic' >
              <button  onClick={()=>{props.editcon(props.show,props.txt)}}  className='black'  >
              {element}

              </button>

              <button  onClick={()=>{props.del(props.show,props.txt)}}  className='black' >
              {icon}

              </button>


            </div>


        </div>


      </div>


    </div>

  )
}

export default Cointaner
