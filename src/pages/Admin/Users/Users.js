import React, { Fragment, useEffect, useState } from "react";
import { Button, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  layDanhSachUserAction,
  timKiemNguoiDungAction,
  XoaNguoiDungAction,
} from "../../../redux/actions/QuanLyNguoiDungAction";

const Users = () => {
  const { arrUserDefault } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const [page, setPage] = useState(1);
  const [value, setValue] = useState();
  const [tempValue, setTempValue] = useState();

  useEffect(
    () => {
      // Wait 1000ms before copying the value of tempValue into value;
      const timeout = setTimeout(() => {
        setValue(tempValue);
      }, 1000);

      // If the hook is called again, cancel the previous timeout
      // This creates a debounce instead of a delay
      return () => clearTimeout(timeout);
    },
    // Run the hook every time the user makes a keystroke
    [tempValue]
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (value) {
      dispatch(timKiemNguoiDungAction(value));
    } else dispatch(layDanhSachUserAction());
  }, [value]);

  const { Search } = Input;

  const onSearch = (value) => {
    dispatch(timKiemNguoiDungAction(value));
  };

  const columns = [
    {
      title: "STT",
      key: "index",

      render: (record) => data.indexOf(record) + 1,
    },
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) => {
        let taiKhoanA = a.taiKhoan.toLowerCase().trim();
        let taiKhoanB = b.taiKhoan.toLowerCase().trim();
        if (taiKhoanA > taiKhoanB) {
          return 1;
        }
        return -1;
      },
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => {
        let emailA = a.email.toLowerCase().trim();
        let emailB = b.email.toLowerCase().trim();
        if (emailA > emailB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDT",
      sorter: (a, b) => a.soDT - b.soDT,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Mật Khẩu",
      dataIndex: "matKhau",
      sorter: (a, b) => {
        let matKhauA = a.matKhau;
        let matKhauB = b.matKhau;
        if (matKhauA > matKhauB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Loại Người Dùng",
      dataIndex: "maLoaiNguoiDung",
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",
      render: (text, user) => {
        return (
          <Fragment>
            <NavLink to={`/admin/users/edit/${user.taiKhoan}`}>
              <EditOutlined className="text-xl mr-5 text-blue-400 hover:text-blue-600 transition duration-500" />
            </NavLink>

            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (
                  window.confirm("Bạn có muốn xóa người dùng " + user.taiKhoan)
                ) {
                  dispatch(XoaNguoiDungAction(user.taiKhoan));
                }
              }}
            >
              <DeleteOutlined className="text-xl text-red-400 hover:text-red-600 transition duration-500" />
            </span>
          </Fragment>
        );
      },
      width: "15%",
    },
  ];
  const data = arrUserDefault;

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <h3 className="text-4xl text-center uppercase font-bold">
        Quản lý Người Dùng
      </h3>
      <Button
        className="mt-4"
        onClick={() => {
          navigate("/admin/users/addnew");
        }}
      >
        Thêm Người Dùng
      </Button>
      <Search
        className="my-4"
        placeholder="Nhập từ khóa"
        onChange={({ target }) => setTempValue(target.value)}
        onSearch={onSearch}
        enterButton
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey="taiKhoan"
        pagination={{
          onChange(current) {
            setPage(current);
          },
        }}
      />
    </div>
  );
};

export default Users;
