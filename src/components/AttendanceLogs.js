/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import {SearchOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import {urlDev} from "../utils/API"


const AttendanceLogs = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()

   const [searchText, setSearchText] = useState("");
   const [searchedColumn, setSearchedColumn] = useState("");
   const searchInput = useRef(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        await axios
          .get(`${urlDev}/api/member/getAllMemberAttendance`)
          .then((res) => {
            console.log(res);
            setLoading(false);
            setData(res.data.attendanceWithlocalTime
              );
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

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

   const getColumnSearchProps = (dataIndex) => ({
     filterDropdown: ({
       setSelectedKeys,
       selectedKeys,
       confirm,
       clearFilters,
       close,
     }) => (
       <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
         <Input
           ref={searchInput}
           placeholder={`Search ${dataIndex}`}
           value={selectedKeys[0]}
           onChange={(e) =>
             setSelectedKeys(e.target.value ? [e.target.value] : [])
           }
           onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
           style={{ marginBottom: 8, display: "block" }}
         />
         <Space>
           <Button
             type="primary"
             onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
             icon={<SearchOutlined />}
             size="small"
             style={{ width: 90 }}
           >
             Search
           </Button>
           <Button
             onClick={() => clearFilters && handleReset(clearFilters)}
             size="small"
             style={{ width: 90 }}
           >
             Reset
           </Button>
           <Button
             type="link"
             size="small"
             onClick={() => {
               confirm({ closeDropdown: false });
               setSearchText(selectedKeys[0]);
               setSearchedColumn(dataIndex);
             }}
           >
             Filter
           </Button>
           <Button
             type="link"
             size="small"
             onClick={() => {
               close();
             }}
           >
             close
           </Button>
         </Space>
       </div>
     ),
     filterIcon: (filtered) => (
       <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
     ),
     onFilter: (value, record) =>
       record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
     onFilterDropdownOpenChange: (visible) => {
       if (visible) {
         setTimeout(() => searchInput.current?.select(), 100);
       }
     },
     render: (text) =>
       searchedColumn === dataIndex ? (
         <Highlighter
           highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
           searchWords={[searchText]}
           autoEscape
           textToHighlight={text ? text.toString() : ""}
         />
       ) : (
         text
       ),
   });

  const columns = [
    {
      title: "ID",
      dataIndex: "membership_id",
      key: "membership_id",
      width: "10%",
      ...getColumnSearchProps("membership_id"),
    },
    {
      title: "First Name",
      dataIndex: `first_name`,
      key: "member.first_name",
      width: "20%",
      ...getColumnSearchProps("first_name"),
    },
    {
      title: "Last Name",
      dataIndex: `last_name`,
      key: "last_name",
      width: "20%",
      ...getColumnSearchProps("last_name"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "20%",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      width: "20%",
      ...getColumnSearchProps("time"),
    },
  ];
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
                  <Table columns={columns} dataSource={data} loading= {loading}/>
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