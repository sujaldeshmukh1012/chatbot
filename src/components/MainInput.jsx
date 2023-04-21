import React,{useState} from 'react'
import "../scss/MainInput.scss"
import { Button } from 'antd'
import { FaPaperPlane,FaMicrophone } from 'react-icons/fa'
import chatbotImg from "../assets/chatbot1.png"

function MainInput({RecieveMessageAndFetchResult,onChangeInput,inputVal}) {

  return (
    <form className='MainInputContainer'  onSubmit={(e)=>RecieveMessageAndFetchResult(e)}  >
        <button type='button'  className='MainVoiceBtn'  ><FaMicrophone color='#fff' size={20} /></button>
        <input type='search' className='MainInputField' value={inputVal}
              onChange={(e) => onChangeInput(e)} placeholder='Start asking queries...'  />
        <button type='submit'  className='MainInputBtn'  ><FaPaperPlane color='#fff' size={20} /></button>
    </form>
  )
}

export default MainInput