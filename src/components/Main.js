/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {urlDev} from "../utils/API"


const Main = () => {
  const [visitorNumber, setVistorNumber] = useState(0);
  const [memberrNumber, setMemberNumber] = useState(0);

  useEffect(() => {
    const fetch = async () =>{
      try {
        await axios
          .get(`${urlDev}/api/member/getNumber`)
          .then((res) => {
            setMemberNumber(res.data)
          });
      } catch (error) {
        Error.fire({
          icon: "error",
          title: error.message,
        });
      }
    }
    fetch()
  }, [])

  useEffect(() => {
    const fetch = async () => {
      try {
        await axios
          .get(`${urlDev}/api/visitor/getNumber`)
          .then((res) => {
            setVistorNumber(res.data)
          });
      } catch (error) {
        Error.fire({
          icon: "error",
          title: error.message,
        });
      }
      
    };
    fetch();
  }, []);
  

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Dashboard</h1>
              <span>Welcome to Buni Hub Attendance Management System</span>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-6">
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>{memberrNumber}</h3>
                  <p>TOTAL MEMBERS</p>
                </div>
                <div className="icon">
                  <i className="ion ion-ios-person-outline" />
                </div>
                {/* <a href="#" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a> */}
              </div>
            </div>
            <div className="col-lg-6 col-6">
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>{visitorNumber}</h3>
                  <p>VISITORS TODAY</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add" />
                </div>
                {/* <a href="#" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;

const Error = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  // timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});