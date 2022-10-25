import React, { useContext } from "react";
import LoginContext from "../../loginContext";
import LeaveContext from "../../leaveContext";

export default function Dashboard() {
  const {
    loginData: { loggedInDetails },
  } = useContext(LoginContext);
  const { leaveData } = useContext(LeaveContext);

  const pendingRequests = leaveData.filter(
    (leave) => leave.status === "Pending"
  );
  const approvedRequests = leaveData.filter(
    (leave) => leave.status === "Approved"
  );

  return (
    <div className="jumbotron">
      <h3 className="login-title">Leave Tracking Application Dashboard</h3>
      <div className="login-title">{`Welcome, ${loggedInDetails.name}`}</div>
      <div className="container dashboard-container">
        {loggedInDetails.role === "ADMIN" && (
          <div className="row">
            <div className="col-xs-6 col-xs-offset-4">
              <div className="row">
                <label className="col-xs-6">
                  Number of Pending Leave Requests
                </label>
                <span className="col-xs-6">: {pendingRequests.length}</span>
              </div>
              <div className="row">
                <label className="col-xs-6">
                  Number of Approved Leave Requests
                </label>
                <span className="col-xs-6">: {approvedRequests.length}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
