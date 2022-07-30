import {
  SET_DANH_SACH_PHIM,
  SET_THONG_TIN_PHIM,
} from "../types/QuanLyPhimType";

const stateDefault = {
  arrFilm: [
    {
      maPhim: 8902,
      tenPhim: "DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS 321",
      biDanh: "doctor-strange-in-the-multiverse-of-madness-321",
      trailer: "https://www.youtube.com/embed/Rf8LAYJSOL8",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/doctor-strange-in-the-multiverse-of-madness_gp01.jpg",
      moTa: "Trailer mới Doctor Strange In The Multiverse Of Madness hé lộ một nhân vật bí ẩn dường như là giáo sư X phiên bản già Patrick Stewart. Cả giáo sư X phiên bản trẻ (James McAvoy) và Jean Grey (Sophie Turner) đều có tin xuất hiện ở phim trường Phù Thủy Tối Thượng Trong Đa Vũ Trụ Hỗn Loạn. Đặc biệt nhất là lời đồn không tưởng về việc Tom Cruise sẽ trở thành Iron Man mới đang lan truyền rộng rãi.",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-07-12T11:45:19.483",
      danhGia: 10,
      hot: true,
      dangChieu: true,
      sapChieu: true,
    },
  ],
  arrFilmDefault: [],
  user: {
    taiKhoan: "Quynhthp",
    hoTen: "Quynh Tran",
    email: "quynhthp@gmail.com",
    soDT: "1234567890",
    matKhau: "123456",
    maLoaiNguoiDung: "QuanTri",
  },
  thongTinPhim: {},
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrFilmDefault = action.arrFilm;
      return { ...state };
    }

    case SET_THONG_TIN_PHIM: {
      state.thongTinPhim = action.thongTinPhim;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
