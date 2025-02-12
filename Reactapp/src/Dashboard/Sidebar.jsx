import { IoPersonCircleSharp } from "react-icons/io5";
import { RxDragHandleDots2 } from "react-icons/rx";
import { IoIosAdd } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import './Dashboard_Styles/sidebar.css';


function Sidebar(){
    return(
        <section className="allClasses">
        <div className="leftClass">
          <div className="headerOfIcons"> <div><IoPersonCircleSharp className="loginIcon"/></div> <div className="loginheader">Login</div></div> <br></br>
          <hr></hr>
          <div className="divClass"> All Boards(4)</div>
          <div className="divClass"><RxDragHandleDots2/>Platform Launch</div>
          <div className="divClass"><RxDragHandleDots2/>Marketing Plan</div>
          <div className="divClass"><RxDragHandleDots2 className="divClass4"/>Roadmap</div>
          <div className="divClass"> <IoIosAdd /> Create New Board</div>
         
        </div>
        <hr></hr>
        <div className="rightClass">
          
             <div className="platformHeader">Platform Launch</div>
             <div className="subHeader"> <button className="addTaskBtn"> <IoIosAdd />Add New Task </button>   <CiMenuKebab /></div>
          
        </div>
       
        </section>
    )
}

export default Sidebar;