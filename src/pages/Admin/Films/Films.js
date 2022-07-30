import React, { Fragment, useEffect, useState } from "react";
import { Button, Table } from "antd";
import {
  AudioOutlined,
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Input, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachPhimAction,
  xoaPhimAction,
} from "../../../redux/actions/QuanLyPhimAction";
import { NavLink, useNavigate } from "react-router-dom";

const Films = () => {
  const { arrFilmDefault } = useSelector((state) => state.QuanLyPhimReducer);

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

  useEffect(() => {
    dispatch(layDanhSachPhimAction(value));
  }, [value]);

  const { Search } = Input;

  const onSearch = (value) => {
    dispatch(layDanhSachPhimAction(value));
  };

  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      key: "maPhim",
      value: (text, object) => {
        return <span>{text}</span>;
      },
      sorter: (a, b) => {
        let maPhimA = a.maPhim;
        let maPhimB = b.maPhim;
        if (maPhimA > maPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, film, index) => {
        return (
          <Fragment>
            <img
              className="transition duration-500 hover:scale-200 "
              src={film.hinhAnh}
              alt={film.tenPhim}
              width={50}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                // e.target.src = `https://picsum.photos/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: "15%",
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "20%",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      sorter: (a, b) => {
        let moTaA = a.moTa.toLowerCase().trim();
        let moTaB = b.moTa.toLowerCase().trim();
        if (moTaA > moTaB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      render: (text, film) => {
        return (
          <Fragment>
            {window.innerWidth < 480 ? film.moTa.length > 30
              ? film.moTa.substr(0, 30) + "..."
              : film.moTa : film.moTa.length > 300
              ? film.moTa.substr(0, 300) + "..."
              : film.moTa}
            {/* {film.moTa.length > 300
              ? film.moTa.substr(0, 300) + "..."
              : film.moTa} */}
          </Fragment>
        );
      },
      width: "35%",
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",
      render: (text, film) => {
        return (
          <Fragment>
            <NavLink to={`/admin/films/edit/${film.maPhim}`}>
              <EditOutlined className="text-xl mr-5 text-blue-400 hover:text-blue-600 transition duration-500" />
            </NavLink>

            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (window.confirm("Bạn có muốn xóa phim " + film.tenPhim)) {
                  dispatch(xoaPhimAction(film.maPhim));
                }
              }}
            >
              <DeleteOutlined className="text-xl text-red-400 hover:text-red-600 transition duration-500" />
            </span>
            <NavLink
              to={`/admin/films/showtimes/${film.maPhim}/${film.tenPhim}`}
              onClick={() => {
                localStorage.setItem("filmParams", JSON.stringify(film));
              }}
            >
              <CalendarOutlined className="text-xl mx-5 text-green-400 hover:text-green-600 transition duration-500" />
            </NavLink>
          </Fragment>
        );
      },
      width: "15%",
    },
  ];
  const data = arrFilmDefault;

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  const navigate = useNavigate();

  return (
    <div className="">
      <h3 className="text-4xl text-center uppercase font-bold">Quản lý Phim</h3>
      <Button
        className="mt-4"
        onClick={() => {
          navigate("/admin/films/addnew");
        }}
      >
        Thêm phim
      </Button>

      <Search
        className="my-4"
        placeholder="Nhập tên phim"
        onChange={({ target }) => setTempValue(target.value)}
        onSearch={onSearch}
        enterButton
      />

      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey="maPhim"
      />
    </div>
  );
};

export default Films;
