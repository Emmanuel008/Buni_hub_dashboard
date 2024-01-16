/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Member = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h4 className="font-weight-bold">Members</h4>
              <a href="" className="text-dark">
                Home
              </a>
              <i
                className="ion-android-arrow-dropright ml-2"
                aria-hidden="true"
              />
              <a href="" className="text-dark ml-2">
                Members
              </a>
              <i
                className="ion-android-arrow-dropright ml-2"
                aria-hidden="true"
              />
              <a href="" className="text-dark ml-2">
                Members List
              </a>
            </div>
            <div className="col-sm-6">
              <button className="float-sm-right  btn btn-info">
                <i className="fa fa-plus-circle"></i>
                <span> Add New Member</span>
              </button>
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
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Member Since</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>112</td>
                          <td>JohnMichael</td>
                          <td>mamsery@gmail.com</td>
                          <td>2024-01-14 04:00:38</td>
                          <td>
                            <i className="fa fa-edit text-info" />
                            <i class="fa fa-trash text-danger ml-2"></i>
                          </td>
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

export default Member;
