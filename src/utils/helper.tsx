// import { BiRadioCircle } from 'react-icons/bi';
// import { LuMoreHorizontal } from 'react-icons/lu';
// import { TbProgress } from 'react-icons/tb';
// import { IoRadioButtonOn } from "react-icons/io5";
// import { IoCheckmarkDoneCircle } from 'react-icons/io5';
// import { AiFillCloseCircle, BsExclamationSquare } from 'react-icons/ai';
// import { BiSignal2, BiSignal3, BiSignal4 } from 'react-icons/bi';


// export const getPriorityIcon = (priority: string) => {
//     switch (priority) {
//         case "No priority": return <LuMoreHorizontal color="#797d84" size={14} />
//         case "Low": return <BiSignal2 color='#6b6f76' size={14} />
//         case "Medium": return <BiSignal3 color='#6b6f76' size={14} />
//         case "High": return <BiSignal4 color='#6b6f76' size={14} />
//         case "Urgent": return <BsExclamationSquare color='#fc7840' size={14} />
//         default: return <BsExclamationSquare color='#fc7840' size={14} />
//     }
// }

// export const getStatusIcon = (priority: string) => {
//     switch (priority) {
//         case "Backlog": return <BiRadioCircle color='#e2e2e2' size={24} />
//         case "Todo": return <BiRadioCircle color='#e2e2e2' size={24} />
//         case "In progress": return <IoRadioButtonOn color='#f1ca4b' size={16} />
//         case "Done": return <IoCheckmarkDoneCircle color='#5e6ad2' size={16} />
//         case "Canceled": return <AiFillCloseCircle color='#94a2b3' size={16} />
//         default: return <AiFillCloseCircle color='#94a2b3' size={16} />
//     }

import { BiRadioCircle } from "react-icons/bi";
import { IoRadioButtonOn, IoCheckmarkDoneCircle } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai"; // Removed AiFillExclamationCircle
import { BiSignal2, BiSignal3, BiSignal4 } from "react-icons/bi";

export const getPriorityIcon = (priority: string) => {
  switch (priority) {
    case "No priority":
      return <BiRadioCircle color="#797d84" size={14} />;
    case "Low":
      return <BiSignal2 color="#6b6f76" size={14} />;
    case "Medium":
      return <BiSignal3 color="#6b6f76" size={14} />;
    case "High":
      return <BiSignal4 color="#6b6f76" size={14} />;
    case "Urgent":
      return (
        <div
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            width: "16px",
            height: "16px",
            backgroundColor: "#fc7840", // Background rectangle color
            borderRadius: "2px", // Slight rounding to make it look like a rectangle
          }}
        >
          <span
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "12px", // Font size of the exclamation mark
            }}
          >
            !
          </span>
        </div>
      );
    default:
      return (
        <div
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            width: "16px",
            height: "16px",
            backgroundColor: "#fc7840",
            borderRadius: "2px",
          }}
        >
          <span
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            !
          </span>
        </div>
      );
  }
};

export const getStatusIcon = (status: string) => {
  switch (status) {
    case "Backlog":
      return <BiRadioCircle color="#e2e2e2" size={24} />;
    case "Todo":
      return <BiRadioCircle color="#e2e2e2" size={24} />;
    case "In progress":
      return <IoRadioButtonOn color="#f1ca4b" size={16} />;
    case "Done":
      return <IoCheckmarkDoneCircle color="#5e6ad2" size={16} />;
    case "Canceled":
      return <AiFillCloseCircle color="#94a2b3" size={16} />;
    default:
      return <AiFillCloseCircle color="#94a2b3" size={16} />;
  }
};

}
