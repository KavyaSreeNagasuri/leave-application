import moment from "moment";
import React, { useContext } from "react";
import LeaveContext from "../../leaveContext";

export default function PendingLeaves() {
  const { leaveData, setLeaveData } = useContext(LeaveContext);

  const pendingLeaves = leaveData.filter((leave) => leave.status === "Pending");
  const onApprove = (leave) => {
    setTimeout(() => {
      const temp = [...leaveData];
      const index = temp.findIndex((obj) => obj.createdAt === leave.createdAt);
      if (index > -1) {
        temp[index].status = "Approved";
      }
      setLeaveData(temp);
    }, 2000);
  };

  return (
    <div className="jumbotron">
      {pendingLeaves && pendingLeaves.length > 0 ? (
        <React.Fragment>
          <h3 className="login-title">List of Pending Leaves</h3>
          <div className="container pending-leaves-container">
            <div className="table-responsive-xs">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Created By</th>
                    <th scope="col">Leave Type</th>
                    <th scope="col">From Date</th>
                    <th scope="col">To Date</th>
                    <th scope="col">Leave Count</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingLeaves.map((leave, index) => {
                    return (
                      <tr key={`pending-leave-${index}`}>
                        <th scope="row">{index + 1}</th>
                        <td>{leave.createdBy}</td>
                        <td>{leave.leaveType}</td>
                        <td>
                          {moment(leave.startDate, "YYYY-MM-DD").format(
                            "DD/MM/YYYY"
                          )}
                        </td>
                        <td>
                          {moment(leave.endDate, "YYYY-MM-DD").format(
                            "DD/MM/YYYY"
                          )}
                        </td>
                        <td>{leave.leaveCount}</td>
                        <td>
                          <button
                            key={`approve_${leave.createdAt}`}
                            onClick={() => onApprove(leave)}
                            className="btn btn-sm btn-primary"
                          >
                            Approve
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="login-title pending-leaves-container">
          <h3>No Pending Leaves to be approved</h3>
        </div>
      )}
    </div>
  );
}
