import React, { useEffect, useState } from "react";
import { DatePicker, Form, Input, InputNumber, Radio, Switch } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  capNhatPhimUploadAction,
  layThongTinPhimAction,
} from "../../../../redux/actions/QuanLyPhimAction";
import { GROUPID } from "../../../../util/settings/config";
import { useNavigate, useParams } from "react-router-dom";

const Edit = (props) => {
  const { id } = useParams();
  const { thongTinPhim } = useSelector((state) => state.QuanLyPhimReducer);
  const [componentSize, setComponentSize] = useState("default");
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(layThongTinPhimAction(id));
  }, []);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: thongTinPhim.maPhim,
      tenPhim: thongTinPhim?.tenPhim,
      trailer: thongTinPhim?.trailer,
      moTa: thongTinPhim?.moTa,
      ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
      dangChieu: thongTinPhim?.dangChieu,
      sapChieu: thongTinPhim?.sapChieu,
      hot: thongTinPhim?.hot,
      danhGia: thongTinPhim?.danhGia,
      hinhAnh: null,
      maNhom: GROUPID,
    },
    onSubmit: (values) => {
      values.maNhom = GROUPID;
      let formData = new FormData();

      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("hinhAnh", values.hinhAnh);
          }
        }
      }

      //goi api
      dispatch(capNhatPhimUploadAction(formData));
    },
  });

  const handleChangeDatePicker = (name) => {
    return (value) => {
      let ngayKhoiChieu = moment(value).format();
      formik.setFieldValue(name, ngayKhoiChieu);
    };
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = async (e) => {
    // lay file tu e
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      // tao doi tuong doc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
      alert("Vui l??ng ch??? 1 gi??y ????? up ???nh l??n");

      setTimeout(() => {
        formik.setFieldValue("hinhAnh", file);
        alert("???? up ???nh xong");
      }, 1000);
    }
  };

  return (
    <div>
      <h3 className="text-4xl mb-4 text-center uppercase font-bold">
        Th??m m???i Phim
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
        <Form.Item label="T??n phim">
          <Input
            name="tenPhim"
            onChange={formik.handleChange}
            value={formik.values.tenPhim}
          />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            name="trailer"
            onChange={formik.handleChange}
            value={formik.values.trailer}
          />
        </Form.Item>
        <Form.Item label="M?? t???">
          <Input
            name="moTa"
            onChange={formik.handleChange}
            value={formik.values.moTa}
          />
        </Form.Item>
        <Form.Item label="Ng??y kh???i chi???u">
          <DatePicker
            onChange={handleChangeDatePicker("ngayKhoiChieu")}
            value={moment(formik.values.ngayKhoiChieu)}
            format="DD/MM/YYYY"
          />
        </Form.Item>
        <Form.Item label="??ang chi???u" valuePropName="checked">
          <Switch
            className="red-4"
            onChange={handleChangeSwitch("dangChieu")}
            checked={formik.values.dangChieu}
          />
        </Form.Item>
        <Form.Item label="S???p chi???u" valuePropName="checked">
          <Switch
            onChange={handleChangeSwitch("sapChieu")}
            checked={formik.values.sapChieu}
          />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch
            onChange={handleChangeSwitch("hot")}
            checked={formik.values.hot}
          />
        </Form.Item>
        <Form.Item label="S??? sao">
          <InputNumber
            onChange={handleChangeInputNumber("danhGia")}
            min={1}
            max={10}
            value={formik.values.danhGia}
          />
        </Form.Item>

        <Form.Item label="H??nh ???nh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg, image/gif, image/jpg"
          />
          <img
            src={imgSrc === "" ? thongTinPhim.hinhAnh : imgSrc}
            alt="..."
            style={{ width: 100, height: 100, marginTop: 10 }}
          />
        </Form.Item>

        <Form.Item label="T??c v???">
          <button type="submit" className="bg-blue-500 text-white p-2">
            C???p nh???t phim
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Edit;
