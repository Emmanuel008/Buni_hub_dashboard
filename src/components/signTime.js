import React from "react";
import TimePicker from "react-time-picker";
import axios from "axios"
import Swal from "sweetalert2";
import {urlDev} from "../utils/API"


const SignTime = () => {
  const [value, onChange] = React.useState (new Date());
  const handleChange = (value) => {
    onChange(value);
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`${urlDev}/api/time/createtime`, {
          signInTime: value,
        })
        .then((res) => {
          Success.fire({
            icon: "success",
            title: "Sign In time Save Successfully"
          })
        });
    } catch (error) {
      Error.fire({
        icon: "error",
        title: error.message,
      });
    }
  }
  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="card mt-4">
                <div className="card-header bg-info">Sign In Time</div>
                <div className="card-body">
                  <form
                    onSubmit={(event) => handelSubmit(event)}
                    className="d-flex align-items-center  justify-content-between mt-4"
                  >
                    <label>Time</label>
                    <TimePicker
                      onChange={handleChange}
                      value={value}
                      format="h:m:s a"
                      name="signInTime"
                      required={true}
                    />
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignTime;

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

const Success = Swal.mixin({
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