import React, { useState } from "react"
import './homepage.css' 
// import Dashboard from "../../Componet/NavbarMenu/Dashboard/Dashboard"
// import Analitys from "../../Componet/NavbarMenu/Analitys/Analitys"
import Files from "../../Componet/NavbarMenu/Files/Files"
import Call from "../../Componet/NavbarMenu/Call/Call"
import Messages from "../../Componet/NavbarMenu/Messages/Messages"
import Community from "../../Componet/NavbarMenu/Community/Community"
import Settings from "../../Componet/NavbarMenu/Settings/Settings"
import { RiSlideshowLine  } from 'react-icons/ri';
import { BsFillFolderFill } from 'react-icons/bs';
import { DiGoogleAnalytics } from 'react-icons/di';
import { MdCall } from 'react-icons/md';
import { AiOutlineMessage } from 'react-icons/ai';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineWechat } from 'react-icons/ai';
 
const HomePage = () =>{
    const [Dash , useDash] = useState(false)
    const [Anali, useAnali] = useState(false)
    const [File, useFile] = useState(false)
    const [Calls, useCalls] = useState(false)
    const [Mess, useMess] = useState(true)
    const [Commu, useCommu] = useState(false)
    const [Sett, useSett] = useState(false)

    const DashboardChek = () =>{
        useDash(true);useAnali(false);useFile(false);useCalls(false);useMess(false);useCommu(false);useSett(false);
    }
    const AnalitysChek =()=>{
        useDash(false);useAnali(true);useFile(false);useCalls(false);useMess(false);useCommu(false);useSett(false);
    }
    const FilesChek = () =>{
        useDash(false);useAnali(false);useFile(true);useCalls(false);useMess(false);useCommu(false);useSett(false);
    }
    const CallChek = () =>{
        useDash(false);useAnali(false);useFile(false);useCalls(true);useMess(false);useCommu(false);useSett(false);
    }
    const MessagesChek = () => {
        useDash(false);useAnali(false);useFile(false);useCalls(false);useMess(true);useCommu(false);useSett(false);
    }
    const CommunityChek = () => {
        useDash(false);useAnali(false);useFile(false);useCalls(false);useMess(false);useCommu(true);useSett(false);
    }
    const SettingsChek = () => {
        useDash(false);useAnali(false);useFile(false);useCalls(false);useMess(false);useCommu(false);useSett(true);
    }

    return(
        <div className="homepage_ctn">
            <div className="navbar_ctn">
            <div className="heading">
                {/* <div className="pic"></div> */}
                <AiOutlineWechat size={45} color="red" />
                <h2>ChatApp</h2>
            </div>
            <div className="menu_bar">
                {/* <button className={Dash ? 'menu selected' : 'menu'}  onClick={DashboardChek}>
                    <RiSlideshowLine color="black" size={24} />
                    <p>Dashboard</p>
                </button>
                <button className={Anali ? 'menu selected' : 'menu'}   onClick={AnalitysChek}>
                    <DiGoogleAnalytics color="black" size={24} />
                    <p>Analitys</p>
                </button> */}
                <button className={File ? 'menu selected' : 'menu'}  onClick={FilesChek}>
                    <BsFillFolderFill color='black' size={24} />
                    <p>Files</p>
                </button>
                <button className={Calls ? 'menu selected' : 'menu'}  onClick={CallChek}>
                    <MdCall color="black" size={24}/>
                    <p>Call</p>
                </button>
                <button className={Mess ? 'menu selected' : 'menu'}  onClick={MessagesChek}>
                    <AiOutlineMessage color="black" size={24} />
                    <p>Messages</p>
                </button>
                <button className={Commu ? 'menu selected' : 'menu'}  onClick={CommunityChek}>
                    <MdOutlinePeopleAlt color="black" size={24} />
                    <p>Community</p>
                </button>
                <button className={Sett ? 'menu selected' : 'menu'}  onClick={SettingsChek}>
                    <FiSettings color="black" size={24} />
                    <p>Settings</p>
                </button>
            </div>
        </div>
           <div className="contain_ctn">
                {/* {Dash && <Dashboard/>}
                {Anali && <Analitys/>} */}
                {File && <Files/>}
                {Calls && <Call/>}
                {Mess && <Messages/>}
                {Commu && <Community/>}
                {Sett && <Settings/>}
           </div>
        </div>
    )
}

export default HomePage;