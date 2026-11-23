import { useSelector } from "react-redux";
import "./TopBar.css"
import logo from "@/assets/setting.png"
import moreOption from "@/assets/more.png"
export default function VsCodeTopBar(){
        const theme=useSelector((state)=>state.theme)
        const workSpace=useSelector((state)=>state.workspaces)

    return(
        <div className="parent" style={{backgroundColor:theme.backGroundColorElement}}>
            <img className="logo" style={{filter:theme.logoColor}} src={logo}></img>
            <div className="wokrSpaceBar"  style={{borderColor:theme.lightElementColor}}>
                <span>{workSpace.currentSpace}</span>
                <div className="spacer"></div>
                <img src={moreOption} style={{filter:theme.logoColor}} className="imageOptions"></img>
            </div>
        </div>
    )
}