/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef } from "react";
import AddMember from "./addMember";
import axios from "axios";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import { DeleteFilled, EditFilled, SearchOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import EditMember from "./EditMember";
import {urlDev} from "../utils/API"

const Member = () => {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const closeModal = (e) => {
    setModalShow(false);
  };
  

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        await axios
          .get(`${urlDev}/api/member/getAllMember`)
          .then((res) => {
            console.log(res);
            setLoading(false);
            setData(res.data.members);
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

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

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

  const Delete = async(row) =>{
    try {
      await axios.delete(`${urlDev}/api/member/deleteMember/${row.membership_id}`)
      .then((res)=>{
        setData(res.data.remainingMembers);
        Success.fire({
          icon: "success",
          title: "Delete is successfully",
        });
      })
    } catch (error) {
      Error.fire({
        icon: "error",
        title: error.message,
      });
    }
  }
  const handelDeleteRow = async (row)=>{
    Swal.fire({
      title: `Do you want to Delete ${row.first_name} ${row.last_name}`,
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Delete(row)
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  const [editModal, setEditModal] = useState(false)
  const [editData, setEditData] = useState()
  const handleEditRow = async (row) => {
    setEditModal(true)
    setEditData(row)
  };

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
      key: "first_name",
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
      title: "Member Since",
      dataIndex: "createdAt",
      key: "createdAt",
      width: "20%",
      ...getColumnSearchProps("createdAt"),
    },
    {
      title: "Action",
      key: "action",
      width: "10%",
      render: (text, record) => (
        <Space size="middle">
          <>
            <>
              <EditFilled
                style={{ color: "blue", fontSize: "16px" }}
                onClick={() => handleEditRow(record)}
              />
            </>
            <DeleteFilled
              style={{ color: "red", fontSize: "16px" }}
              onClick={() => handelDeleteRow(record)}
            />
          </>
        </Space>
      ),
    },
  ];

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
              <button
                className="float-sm-right  btn btn-info"
                onClick={() => {
                  setLoading(true);
                  setModalShow(true);
                }}
              >
                <i className="fa fa-plus-circle"></i>
                <span> Add New Member</span>
              </button>
              <AddMember
                show={modalShow}
                onHide={closeModal}
                setLoading={setLoading}
                setModalShow={setModalShow}
                setData={setData}
              />
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
                  <Table
                    loading={loading}
                    columns={columns}
                    dataSource={data}
                    scroll={{ x: true, y: 400, scrollToFirstRowOnChange: true }}
                    pagination={{
                      pageSize: 15,
                      // total: totalPages,
                      // onChange: (page) => {
                      //   fetchRecords(page);
                      // },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EditMember
        show={editModal}
        onHide={() => setEditModal(false)}
        data={editData}
        setEditModal = {setEditModal}
        setData = {setData}
      />
    </div>
  );
};

export default Member;

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