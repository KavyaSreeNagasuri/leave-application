import { createContext } from "react";

const LeaveContext = createContext({
  leaveData: [],
  setLeaveData: (data) => {},
});

export default LeaveContext;
