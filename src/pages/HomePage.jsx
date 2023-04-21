import React, { useState } from "react";
import "../scss/HomePage.scss";
import HeaderMain from "../components/HeaderMain";
import MainInput from "../components/MainInput";
import BodyMain from "../components/BodyMain";
import { FetchMessageFromServer } from "../connections/FetchMessageFromServer";


function HomePage({ theme }) {
  const [selectedLanguage, SetSelectedLanguage] = useState("english");
  const [Messages, SetMessages] = useState([]);
  const [RequestLoading, SetRequestLoading] = useState(false);
  const [inputVal, SetinputVal] = useState("");
  const onChangeInput = (e) =>{
    SetinputVal(e.target.value)
  }
  const HandelTranslationSelect = (e) =>{
    SetSelectedLanguage(e.target.value)
    console.log(e.target.value)
  }
  const pushMessageAndSet = (m) => {
    SetMessages((old_messages) => [m, ...old_messages]);
    console.log(Messages);
  };
  const RecieveMessageAndFetchResult = (e) =>{
    e.preventDefault()
    SetRequestLoading(true)
    var reqMsg = {
      from:0,
      message:e,
      language:"english"
    }
    pushMessageAndSet(reqMsg);
    var response = FetchMessageFromServer(inputVal,selectedLanguage)
    SetinputVal("")
    // if (response.status === "error"){
    //   var errorMsg = {
    //     from:-1,
    //     message:"An Error Occured, Please try again.",
    //     language:"english"
    //   }
    // pushMessageAndSet(errorMsg);
    // }else{
    //   var successMsg = {
    //     from:1,
    //     message:response.msg,
    //     language:response.language
    //   }
    // pushMessageAndSet(errorMsg);
    // }
  }
  return (
    <div className="HomeBackGround">
      <div className="MainContainer" style={{height:window.innerHeight+"px"}}>
      <HeaderMain HandelTranslationSelect={HandelTranslationSelect} />
      <BodyMain selectedLanguage={selectedLanguage} Messages={Messages} />
      <MainInput RecieveMessageAndFetchResult={RecieveMessageAndFetchResult} onChangeInput={onChangeInput} inputVal={inputVal} />
      </div>
    </div>
  );
}

export default HomePage;
