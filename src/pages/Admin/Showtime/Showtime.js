import React, { useEffect, useState } from "react";
import { Button, Form, DatePicker, InputNumber, Select } from "antd";
import { quanLyRapService } from "../../../services/QuanLyRapService";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import moment from "moment";
import { quanLyDatVeService } from "../../../services/QuanLyDatVeService";

const Showtime = () => {
  const { maPhim } = useParams();
  const formik = useFormik({
    initialValues: {
      maPhim: maPhim,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    onSubmit: async (values) => {
      try {
        const result = await quanLyDatVeService.taoLichChieu(values);
        alert("Tạo lịch chiếu thành công");
      } catch (error) {
        alert("Tạo lịch chiếu thất bại");
        console.log(error.response?.data);
      }
    },
  });

  const [state, setState] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
  });

  useEffect(() => {
    async function callAPI() {
      try {
        let result = await quanLyRapService.layThongTinHeThongRap();
        setState({
          ...state,
          heThongRapChieu: result.data.content,
        });
      } catch (error) {
        console.log(error.response?.data);
      }
    }
    callAPI();
  }, []);

  const handleChangeHeThongRap = async (values) => {
    // tu he thong rap call api lay thong tin rap

    try {
      let result = await quanLyRapService.layThongTinCumRap(values);

      setState({
        ...state,
        cumRapChieu: result.data.content,
      });
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const onOk = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
  };

  const onChangeDate = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
  };

  const handleChangeGia = (values) => {
    formik.setFieldValue("giaVe", values);
  };

  const convertSelectHTR = () => {
    return state.heThongRapChieu?.map((htr, index) => {
      return { label: htr.tenHeThongRap, value: htr.maHeThongRap };
    });
  };

  const handleChangeCumRap = (values) => {
    formik.setFieldValue("maRap", values);
  };

  let film = {};
  if (localStorage.getItem("filmParams")) {
    film = JSON.parse(localStorage.getItem("filmParams"));
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      //   onFinish={onFinish}
      //   onFinishFailed={onFinishFailed}
      autoComplete="off"
      onSubmitCapture={formik.handleSubmit}
      className="max-w-xl mx-auto"
    >
      <div className="my-3">
        <h3 className="text-center text-3xl my-3 uppercase font-bold">
          Tạo lịch chiếu
        </h3>
        <h2 className="text-center text-2xl my-3">{film.tenPhim}</h2>
        <img
          className="mx-auto"
          src={film.hinhAnh}
          alt={film.tenPhim}
          width="100px"
          height="auto"
        />
      </div>
      <Form.Item label="Hệ thống rạp">
        <Select
          options={convertSelectHTR()}
          onChange={handleChangeHeThongRap}
          placeholder="Chọn hệ thống rạp"
        />
      </Form.Item>

      <Form.Item label="Cụm rạp">
        <Select
          options={state.cumRapChieu?.map((cumRap, index) => ({
            label: cumRap.tenCumRap,
            value: cumRap.maCumRap,
          }))}
          onChange={handleChangeCumRap}
          placeholder="Chọn cụm rạp"
        />
      </Form.Item>

      <Form.Item label="Ngày - giờ chiếu">
        <DatePicker
          format="DD/MM/YYYY hh:mm:ss"
          showTime
          onChange={onChangeDate}
          onOk={onOk}
        />
      </Form.Item>

      <Form.Item label="Giá vé">
        <InputNumber min={75000} max={200000} onChange={handleChangeGia} />
      </Form.Item>

      <Form.Item label="Hành động">
        <Button htmlType="submit">Tạo lịch chiếu</Button>
      </Form.Item>
    </Form>
  );
};

export default Showtime;
