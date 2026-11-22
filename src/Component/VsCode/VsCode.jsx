import { useSelector } from "react-redux";
import VsCodeLeftBar from "./SubComponent/LeftBar/LeftBar";
import VsCodeMainArea from "./SubComponent/MainArea/MainArea";
import VsCodeRightBar from "./SubComponent/RightBar/RightBar";
import VsCodeTopBar from "./SubComponent/TopBar/TopBar";
import "./VsCode.css"
export default function VsCode(){
    const theme=useSelector((state)=>state.theme)
    return(
        <div className="vsCodeWindow" style={{backgroundColor:theme.backGroundColor}}>
            <VsCodeTopBar></VsCodeTopBar>
            <VsCodeLeftBar></VsCodeLeftBar>
            <VsCodeMainArea></VsCodeMainArea>
            <VsCodeRightBar></VsCodeRightBar>
        </div>
    )
}