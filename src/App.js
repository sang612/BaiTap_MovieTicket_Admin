import "./App.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home/Home";
import Films from "./pages/Admin/Films/Films";
import AddNew from "./pages/Admin/Films/AddNew/AddNew";
import Edit from "./pages/Admin/Films/Edit/Edit";
import Showtime from "./pages/Admin/Showtime/Showtime";
import Users from "./pages/Admin/Users/Users";
import { EditUsers } from "./pages/Admin/Users/Edit/Edit";
import { AddNewUser } from "./pages/Admin/Users/AddNew/AddNewUser";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<AdminTemplate />}>
          <Route path="/dashboard"></Route>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/films"
            element={
              <ProtectedRoute>
                <Films />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/films/addnew"
            element={
              <ProtectedRoute>
                <AddNew />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/films/edit/:id"
            element={
              <ProtectedRoute>
                <Edit />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/films/showtimes/:maPhim/:tenPhim"
            element={
              <ProtectedRoute>
                <Showtime />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/users/addnew"
            element={
              <ProtectedRoute>
                <AddNewUser />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/users/edit/:taiKhoan"
            element={
              <ProtectedRoute>
                <EditUsers />
              </ProtectedRoute>
            }
          ></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
