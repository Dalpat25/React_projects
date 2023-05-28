import React, { useState } from "react"
// import './community.css'
import { FaFolderOpen } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { IoIosPersonAdd } from 'react-icons/io';
import { BiPointer, BiSearchAlt2 } from 'react-icons/bi';
import { BsCameraVideo } from 'react-icons/bs';
import { MdCall } from 'react-icons/md';
// import { RiSendPlaneFill } from 'react-icons/ri';


const Community = () => {
    const contacts = [
        { name: "Project Group" },
        { name: "Family" },
        { name: "Friend Group" }
      ];
      
      const [messages, setMessages] = useState({});
      const [name, setName] = useState("");
      const [text, setText] = useState("");
      
      const addMessage = () => {
        if (text !== "") {
          setMessages(prevMessages => ({
            ...prevMessages,
            [name]: [...(prevMessages[name] || []), { name: "You", text: text }]
          }));
          setText("");
        }
      };
      
      const changeContact = (contactName) => {
        setName(contactName);
      };
      
      const addText = (event) => {
        setText(event.target.value);
      };
    // const [chat, setChat] = useState([])



    return(
        <div className="community_ctn">
        <div className="contact_ctn">
            <div className="head">
                <h2>Contacts</h2>
                <div><BiSearchAlt2 color="blue" size={24}/></div>
                <div><AiOutlineUserAdd color="blue" size={24}/></div>
            </div>
            <div className="contact_name">
            {contacts.map((contact, index) => (
                <p key={index}
                className={`names ${name === contact.name ? "selected" : ""}`}
                onClick={() => changeContact(contact.name)}
                >
                {contact.name}
                </p>
                ))}
</div>
        </div>
        <div className="chat_ctn">
            <div className="chatbox_ctn">
                <div className="name_ct">
                    <h2>{name}</h2>
                    <div className="icons_ctn">
                        <div><BsCameraVideo color="blue" size={24}/></div>
                        <div><MdCall color="blue" size={24}/></div>
                        <div><IoIosPersonAdd color="blue" size={24}/></div>
                    </div>
                </div>
                <div className="icon_reac">
                    <div className="message_bar">
                        {messages[name] && messages[name].map((message, index) => (
                        <p key={index} className="msg_text">
                        {message.name}: {message.text}
                        </p>
                        ))}
                    </div>
                    <div className="inp_bar">
                        <div className="bar1">
                            <label className="upload_file">
                                <FaFolderOpen color="gray" size={25}/>
                                <input type="file" style={{ display: 'none' }} />
                            </label>
                            <input type="text" className="input_fild" placeholder="Type something...." onChange={addText} value={text} 
                                onKeyPress={(event) => {if (event.key === "Enter") {addMessage();}}}/>
                            {/* <div onClick={addMessage}><RiSendPlaneFill color="green" size={25}/></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Community;