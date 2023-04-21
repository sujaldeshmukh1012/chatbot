import React,{useState} from "react";
import "../scss/BodyMain.scss";
import { FaClone, FaCopy, FaLanguage } from "react-icons/fa";
import { Button, Tooltip, Space } from 'antd';
import { LoadingOutlined } from "@ant-design/icons";

function BodyMain({selectedLanguage,Messages}) {
    const [ShowABortBtn,SetShowAbortBtn] = useState(true)

  return (
    <div className="BodyMainContainer">
        {ShowABortBtn && <AbortButton/>}
        {Messages?.map((item,i)=>{
          if(item.from === 0){return(<MessageSent text={item.message} />)}
          else if(item.from == 1){return(<MessageRecievded selectedLanguage={selectedLanguage} />)}
          else if(item.from == -1){return(<MessageError />)}
          else{return(<MessageWait />)}
        })}
    </div>
  );
}

export default BodyMain;

const AbortButton = () =>{
    return(
        <div className="AbortButtonMainDiv">
        <Tooltip title="Stop Ai from generating current response">
            <Button className="AbortButton" type="ghost">Stop Generating</Button>
            </Tooltip>
        </div>
    )
}

const MessageRecievded = ({selectedLanguage}) => {
  return (
    <div className="MessageLeft">
      <div className="MessageRecievdedInner">
       <p>MessageSentdd ddddd dddddd dssssss sssssssssss sssss ssssssss sssssss
        sssssssss</p>
        <div className="MessageRecievdedActionDiv">
        <Button type="dashed" size="small" className="MessageRecievdedranslateBtn" icon={<FaLanguage size={12} />}>
        <p>Translate to {selectedLanguage}</p>
      </Button>
        <Tooltip title="copy">
        <Button type="primary" size="small" shape="circle" className="MessageRecievdedCopyBtn" icon={<FaClone size={10} />} />
      </Tooltip>
        </div>
      </div>
    </div>
  );
};
const MessageSent = ({text}) => {
  return (
    <div className="MessageRight">
      <div className="MessageSentInner">
        <p>{text}</p>
      </div>
    </div>
  );
};
const MessageWait = () => {
  return (
    <div className="MessageLeft">
      <div className="MessageWaitInner"><LoadingOutlined size={50} color="#fff" /></div>
    </div>
  );
};
const MessageError = () => {
  return (
    <div className="MessageLeft">
      <div className="MessageErrorInner">MessageError</div>
    </div>
  );
};
