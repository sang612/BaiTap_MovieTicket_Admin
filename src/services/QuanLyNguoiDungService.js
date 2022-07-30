import { baseService } from "./baseService";
import { GROUPID } from "../util/settings/config";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }

  dangNhap = (values) => {
    return this.post(`api/QuanLyNguoiDung/DangNhap`, values);
  };

  layDanhSachUser = () => {
    return this.get(
      `api/QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=${GROUPID}`
    );
  };

  layDanhSachLoaiNguoiDung = () => {
    return this.get(`api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`);
  };

  layThongTinNguoiDung = (taiKhoan) => {
    return this.post(
      `api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`
    );
  };

  themNguoiDung = (values) => {
    return this.post("api/QuanLyNguoiDung/ThemNguoiDung", values);
  };

  capNhatThongTinNguoiDung = (values) => {
    return this.post("api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", values);
  };

  timKiemNguoiDung = (tuKhoa) => {
    return this.get(`api/QuanLyNguoiDung/TimKiemNguoiDung?tuKhoa=${tuKhoa}`);
  };

  xoaNguoiDung = (taiKhoan) => {
    return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
