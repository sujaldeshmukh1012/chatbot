import axios from "axios"
export const FetchMessageFromServer = (query,language) =>{
        const URL = "https://ssebowa-org-chatbot.onrender.com/chatbotapp/"+query
        const response = axios.post(URL).then((resp)=>console.log(resp).catch(e=>{console.log(e)}))
    }