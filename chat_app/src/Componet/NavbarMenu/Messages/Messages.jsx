import React, { useState, useEffect } from "react";
// import { createObjectCsvWriter } from "csv-writer";
// import jsonexport from "jsonexport/dist";
import './messages.css';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiPointer, BiSearchAlt2 } from 'react-icons/bi';
import { BsCameraVideo } from 'react-icons/bs';
import { MdCall } from 'react-icons/md';
import { AiOutlineMessage } from 'react-icons/ai';
import { RiSendPlaneFill } from 'react-icons/ri';
// import {  } from 'react-icons/fa';
import { FcBusinesswoman,FcBusinessman } from 'react-icons/fc';
// import csv from 'csv-parser';

const Messages = () => {
    const contacts = [
        { name: "Ankit", pic: <FaUser size={24}/>, mono:"7828242302"},
        { name: "Twenkle", pic: <FcBusinesswoman size={24}/>, mono:"9830660221"},
        { name: "Dalpat", pic: <FcBusinessman size={24}/>, mono:"6367407119"}
      ];
      
      // const messagesRef = useRef({});
      const [messages, setMessages] = useState({});
      const [name, setName] = useState("");
      const [text, setText] = useState("");
      const [selectedContact, setSelectedContact] = useState(null);
      

      const addMessage = () => {
        if (text !== "") {
        const timestamp = new Date().toLocaleString();
        setMessages(prevMessages => ({
            ...prevMessages,
            [selectedContact.name]: [...(prevMessages[selectedContact.name] || []), { name: "You", text: text, timestamp: timestamp }]
          }));
          setText("");
          saveChatToCSV();
        }
      };
      
      const changeContact = (contactName) => {
        // setName(contactName);
        const selected = contacts.find((contact) => contact.name === contactName);
        setSelectedContact(selected);
      };
      

      

      const addText = (event) => {
        setText(event.target.value);
      };
    
    const saveChatToCSV = () => {
    const chatData = [];

  // Convert messages object to an array of chat data
  if (selectedContact && messages[selectedContact.name]) {
    const contactMessages = messages[selectedContact.name];
    contactMessages.forEach((message) => {
      const row = [
        message.text,
        message.name,
        selectedContact.name,
        message.timestamp.split(",")[0].trim(),
        message.timestamp.split(",")[1].trim(),
      ];
      chatData.push(row);
    });
  }

  const csvData = chatData.map((row) => row.join(",")).join("\n");
  const downloadLink = document.createElement("a");
  const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  downloadLink.setAttribute("href", url);
  downloadLink.setAttribute("download", `${selectedContact.name}.csv`); // Use selected contact's name for the filename
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

      

    return (
        <div className="message_ctn">
            <div className="contact_ctn">
                <div className="head">
                    <h2>Contacts</h2>
                    <div><BiSearchAlt2 color="blue" size={24}/></div>
                    <div><AiOutlineUserAdd color="blue" size={24}/></div>
                </div>
                <div className="contact_name">
                {contacts.map((contact, index) => (
                    <div key={index}
                    className={`names ${name === contact.name ? "selected" : ""}`}
                    onClick={() => changeContact(contact.name)}
                    style={{
                        backgroundColor: selectedContact?.name === contact.name ? "blue" : "",
                        color: selectedContact?.name === contact.name ? "white" : "",
                        borderRadius: selectedContact?.name === contact.name ? "5px" : ""
                      }}
                    >
                    {/* <div className="contact_info"> */}
                        <div className="contact_photo">{contact.pic}</div>
                        <div className="contact_details">
                            <p className="contact_names">{contact.name}</p>
                            <p className="contact_mono">{contact.mono}</p>
                        </div>
                    {/* </div> */}
                    </div>
                    ))}
    </div>
            </div>
            <div className="chat_ctn">
                <div className="chatbox_ctn">
                    <div className="name_ct">
                        {/* <h2>{name}</h2> */}
                        {selectedContact && (
                        <div className="name_cantrol">
                            <div className="contact_photo" style={{ fontSize: "45px" }}>{React.cloneElement(selectedContact.pic, { size: 35 })}</div>
                            <div className="contact_details">
                                <h2>{selectedContact.name}</h2>
                                <p className="contact_mono">{selectedContact.mono}</p>
                            </div>
                        </div>
                        )}
                        <div className="icons_ctn">
                            <div><BsCameraVideo color="blue" size={24}/></div>
                            <div><MdCall color="blue" size={24}/></div>
                            <div><AiOutlineMessage color="blue" size={24}/></div>
                        </div>
                    </div>
                    <div className="icon_reac">
                        <div className="message_bar">
                        {messages[selectedContact?.name] && messages[selectedContact.name].map((message, index) => (
                            <div key={index} className="mess">
                            <p className="msg_text">
                              {message.name}: {message.text}
                            </p>
                            <p className="msg_time">{message.timestamp}</p>
                          </div>
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
                                <div onClick={addMessage}><RiSendPlaneFill color="green" size={25}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;
