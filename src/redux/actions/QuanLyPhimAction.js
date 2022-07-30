import { quanLyPhimService } from "../../services/QuanLyPhimService";
import {
  SET_DANH_SACH_PHIM,
  SET_THONG_TIN_PHIM,
} from "../types/QuanLyPhimType";

export const layDanhSachPhimAction = (tenPhim = "") => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachPhim(tenPhim);
      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrFilm: result.data.content,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const themPhimUploadHinhAction = (formData) => {
  return async (dispatch) => {
    try {
      // let payload = { ...formData, hinhAnh: formData.hinhAnh };
      let result = await quanLyPhimService.themPhimUploadHinh(formData);
      alert("Thêm phim thành công!");
    } catch (errors) {
      alert("Thêm phim thất bại!");
      console.log(errors.response?.data);
    }
  };
};

export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimService.layThongTinPhim(maPhim);
      dispatch({
        type: SET_THONG_TIN_PHIM,
        thongTinPhim: result.data.content,
      });
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

export const capNhatPhimUploadAction = (formData) => {
  return async (dispatch) => {
    try {
      // let payload = { ...formData, hinhAnh: formData.hinhAnh };
      let result = await quanLyPhimService.capNhatPhimUpload(formData);

      alert("Cập nhật thành công!");
      // navigate("/admin/films");
      dispatch(layDanhSachPhimAction());
      // const navigate = useNavigate;
      // setTimeout(() => navigate("/admin/films"), 1000);
    } catch (errors) {
      alert("Cập nhật thất bại!");
      console.log(errors.response?.data);
    }
  };
};

export const xoaPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimService.xoaPhim(maPhim);
      dispatch(layDanhSachPhimAction());
      alert("Xóa phim thành công");
    } catch (errors) {
      alert("Xóa phim thất bại");
      console.log(errors.response?.data);
    }
  };
};
