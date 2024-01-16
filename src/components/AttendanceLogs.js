/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const AttendanceLogs = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h4 className="font-weight-bold">Attendance</h4>
              <a href="" className="text-dark">
                Home
              </a>
              <i
                className="ion-android-arrow-dropright ml-2"
                aria-hidden="true"
              />
              <a href="" className="text-dark ml-2">
                Attendance
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      id="example1"
                      className="table table-bordered table-striped"
                    >
                      <thead>
                        <tr
                          style={{ backgroundColor: "#212529", color: "white" }}
                        >
                          <th>Date</th>
                          <th>MemberID</th>
                          <th>Name</th>
                          <th>Time In</th>
                          <th>Time Out</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>2024-01-14</td>
                          <td>112</td>
                          <td>JohnMichael</td>
                          <td>2024-01-14 04:00:38</td>
                          <td>2024-01-14 07:00:38</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AttendanceLogs;
