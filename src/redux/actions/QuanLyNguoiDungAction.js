import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import {
  SET_DANH_SACH_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../types/QuanLyNguoiDung";

export const layDanhSachUserAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layDanhSachUser();

      dispatch({
        type: SET_DANH_SACH_NGUOI_DUNG,
        arrUser: result.data.content,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const layThongTinNguoiDungAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung(
        taiKhoan
      );

      dispatch({
        type: SET_THONG_TIN_NGUOI_DUNG,
        thongTinNguoiDung: result.data.content,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const themNguoiDungAction = (values) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.themNguoiDung(values);

      alert("Thêm thành công!");
    } catch (errors) {
      alert("Thêm thất bại!");
      console.log(errors.response?.data);
    }
  };
};

export const capNhatThongTinNguoiDungAction = (values) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(
        values
      );

      alert("Cập nhật thành công!");
    } catch (errors) {
      alert("Cập nhật thất bại!");
      console.log(errors.response?.data);
    }
  };
};

export const timKiemNguoiDungAction = (tuKhoa) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.timKiemNguoiDung(tuKhoa);

      dispatch({
        type: SET_DANH_SACH_NGUOI_DUNG,
        arrUser: result.data.content,
      });
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

export const XoaNguoiDungAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan);
      dispatch(layDanhSachUserAction());
      alert("Xóa thành công");
    } catch (errors) {
      alert("Xóa thất bại!");
      console.log(errors.response?.data);
    }
  };
};

export const layThongTinDangNhapAction = (values) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(values);
      let user = result.data.content;
      dispatch({
        type: "SET_NGUOI_DUNG",
        user: user,
      });

      console.log("set state success");
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

export const xoaThongTinDangNhapAction = () => {
  return (dispatch) => {
    try {
      console.log('hihi');
      dispatch({
        type: "XOA_NGUOI_DUNG",
      });
      localStorage.clear();
    } catch (error) {
      console.log("Error: ", error);
    }
  };
};
