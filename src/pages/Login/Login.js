import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { layThongTinDangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";

const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});

  const dispatch = useDispatch();
  const [userState, setUserState] = useState({});

  const dangNhap = async (values) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(values);

      let user = result.data.content;
      if (user.maLoaiNguoiDung !== "QuanTri") {
        setErrorMessages({
          message:
            "Tài khoản của bạn không đủ quyền đăng nhập vào hệ thống quản trị!",
        });
        return;
      }
      dispatch(layThongTinDangNhapAction(values));

      localStorage.setItem("user", JSON.stringify(user));
      alert("Đăng nhập thành công");
      setUserState({
        userState: user,
      });
      window.location.href = "dashboard";
    } catch (errors) {
      console.log(errors.response?.data);
      setErrorMessages({
        message: errors.response?.data.content,
      });
      return;
    }
  };

  const renderErrorMessage = () => (
    <span className="error">{errorMessages.message}</span>
  );

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    let account = { taiKhoan: uname.value, matKhau: pass.value };

    dangNhap(account);
  };

  return (
    <div className="max-w-xs mx-auto mt-3">
      <h2 className="text-center text-2xl font-bold	text-red-600/80">
        Đăng Nhập Movie Admin
      </h2>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            name="uname"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            name="pass"
            required
          />

          <p className="text-red-500 text-xs italic"> {renderErrorMessage()}</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          {/* <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
