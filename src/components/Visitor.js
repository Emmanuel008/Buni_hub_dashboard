/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Visitor = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h4 className="font-weight-bold">Visitors</h4>
              <a href="" className="text-dark">
                Home
              </a>
              <i
                className="ion-android-arrow-dropright ml-2"
                aria-hidden="true"
              />
              <a href="" className="text-dark ml-2">
                Visitors
              </a>
              <i
                className="ion-android-arrow-dropright ml-2"
                aria-hidden="true"
              />
              <a href="" className="text-dark ml-2">
                Visitor List
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
                          <th>Name</th>
                          <th>Email</th>
                          <th>Visited On</th>
                          <th>Role</th>
                          <th>Phone Number</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>JohnMichael</td>
                          <td>mamsery@gmail.com</td>
                          <td>2024-01-14 04:00:38</td>
                          <td>Entreprenuer</td>
                          <td>0756080812</td>
                          <td>
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

export default Visitor;
