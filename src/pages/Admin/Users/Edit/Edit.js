import React, { useEffect, useState } from "react";
import { Form, Input, Radio, Select } from "antd";

import { useFormik } from "formik";
import { quanLyNguoiDungService } from "../../../../services/QuanLyNguoiDungService";
import {
  capNhatThongTinNguoiDungAction,
  layThongTinNguoiDungAction,
} from "../../../../redux/actions/QuanLyNguoiDungAction";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GROUPID } from "../../../../util/settings/config";

export const EditUsers = () => {
  const { taiKhoan } = useParams();
  const { thongTinNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  //   const formik = useFormik();
  const [componentSize, setComponentSize] = useState("default");
  const [state, setState] = useState({
    danhSachLoaiNguoiDung: [],
  });

  const dispatch = useDispatch();

  useEffect(() => {
    async function callAPI() {
      try {
        dispatch(layThongTinNguoiDungAction(taiKhoan));
        let result = await quanLyNguoiDungService.layDanhSachLoaiNguoiDung();
        setState({
          ...state,
          danhSachLoaiNguoiDung: result.data.content,
        });
      } catch (error) {
        console.log(error.response?.data);
      }
    }
    callAPI();
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: thongTinNguoiDung.taiKhoan,
      hoTen: thongTinNguoiDung?.hoTen,
      email: thongTinNguoiDung?.email,
      soDT: thongTinNguoiDung?.soDT,
      matKhau: thongTinNguoiDung.matKhau,
      maLoaiNguoiDung: thongTinNguoiDung?.maLoaiNguoiDung,
      maNhom: GROUPID,
    },
    onSubmit: (values) => {

      //goi api
      dispatch(capNhatThongTinNguoiDungAction(values));
    },
  });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const convertSelectLND = () => {
    return state.danhSachLoaiNguoiDung?.map((lnd) => {
      return { label: lnd.tenLoai, value: lnd.maLoaiNguoiDung };
    });
  };

  const handleChangeLoaiNguoiDung = (values) => {
    formik.setFieldValue("maLoaiNguoiDung", values);
  };

  return (
    <div>
      <h3 className="text-4xl mb-4 text-center uppercase font-bold">
        Chỉnh sửa thông tin Người dùng
      </h3>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
          name: "concac",
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tài khoản">
          <Input
            name="taiKhoan"
            value={formik.values.taiKhoan}
            disabled={true}
          />
        </Form.Item>
        <Form.Item label="Họ tên">
          <Input
            name="hoTen"
            onChange={formik.handleChange}
            value={formik.values.hoTen}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Form.Item>
        <Form.Item label="Số ĐT">
          <Input
            name="soDT"
            onChange={formik.handleChange}
            value={formik.values.soDT}
          />
        </Form.Item>
        <Form.Item label="Mật khẩu">
          <Input
            name="matKhau"
            onChange={formik.handleChange}
            value={formik.values.matKhau}
          />
        </Form.Item>
        <Form.Item label="Loại người dùng">
          <Select
            options={convertSelectLND()}
            onChange={handleChangeLoaiNguoiDung}
            // onChange={formik.handleChange}
            placeholder="Chọn loại người dùng"
            value={formik.values.maLoaiNguoiDung}
          />
        </Form.Item>

        <Form.Item label="Tác vụ">
          <button type="submit" className="bg-blue-500 text-white p-2">
            Cập nhật Người dùng
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};
