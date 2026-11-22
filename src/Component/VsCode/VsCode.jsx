import VsCodeLeftBar from "./SubComponent/LeftBar/LeftBar";
import VsCodeMainArea from "./SubComponent/MainArea/MainArea";
import VsCodeRightBar from "./SubComponent/RightBar/RightBar";
import VsCodeTopBar from "./SubComponent/TopBar/TopBar";

export default function VsCode(){
    return(
        <div>
            <VsCodeTopBar></VsCodeTopBar>
            <VsCodeLeftBar></VsCodeLeftBar>
            <VsCodeMainArea></VsCodeMainArea>
            <VsCodeRightBar></VsCodeRightBar>
        </div>
    )
}