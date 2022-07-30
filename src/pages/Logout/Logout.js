import {
  XoaNguoiDungAction,
  xoaThongTinDangNhapAction,
} from "../../redux/actions/QuanLyNguoiDungAction";
import { useDispatch } from "react-redux";

export const logOutAction = () => {
  //   let dispatch = useDispatch();
  console.log("logout");
  //   dispatch(XoaNguoiDungAction);
  localStorage.clear();
  window.location.href = "/login";
};
