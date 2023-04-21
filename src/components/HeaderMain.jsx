import React, { useState } from 'react'
import {
    Button,
    Dropdown,
    Form,
    Space,
    Tooltip,
    Typography,
    message,
  } from "antd";
  import { FaVolumeUp, FaLanguage, FaVolumeMute } from "react-icons/fa";
  import Select from "react-dropdown-select";
  import { TranslationLanguages } from "../connections/Languages.js";
import "../scss/HeaderMain.scss"
  
function HeaderMain({HandelTranslationSelect}) {
  const [VoiceLevel,SetVoiceLevel] = useState(true)
  return (
    <header className="MainContainerHeader">
    <div className="MainHeaderLogoSection">
      <img
        src={"https://ssebowa.org/static/media/mainLogo.6654af20.png"}
        className="MainHeaderLogo"
      />
      <p className="MainHeaderTitle">AI CHAT</p>
    </div>
    <div className="MainHeaderOptionsSection">
      <Tooltip title={VoiceLevel ? "volume full" : "volume mute"}>
        <Button
        onClick={()=>SetVoiceLevel(!VoiceLevel)}
          type={VoiceLevel ?   "primary"  :"default"}
          shape="circle"
          className="MainHeaderOptionsBtn"
          icon={VoiceLevel ? <FaVolumeUp /> : <FaVolumeMute/>}
        />
      </Tooltip>
<TranslationSelect HandelTranslationSelect={HandelTranslationSelect} />      
    </div>
  </header>
  )
}

export default HeaderMain



const TranslationSelect = ({HandelTranslationSelect}) =>{
  return(<div className="MainLanguageSelect">
  <select name="Language" id="Language" onChange={(e)=>HandelTranslationSelect(e)}>
    {TranslationLanguages?.map((item, i) => {
      return (
        <option key={i} value={item.language}>
          {item.language}
        </option>
      );
    })}
  </select>
</div>)
}