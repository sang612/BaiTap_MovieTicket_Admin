import React from "react";
import {
  SET_DANH_SACH_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../types/QuanLyNguoiDung";

const stateDefault = {
  arrUserDefault: [],
  thongTinNguoiDung: {},
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_NGUOI_DUNG: {
      state.arrUserDefault = action.arrUser;
      return { ...state };
    }

    case SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
