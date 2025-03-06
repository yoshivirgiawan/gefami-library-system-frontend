import "assets/css/app.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "pages/HomePage";
import Provider from "helpers/hooks/useGlobalContext";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import GuestRoute from "components/GuestRoute";
import AdminLayout from "./AdminLayout";
import Dashboard from "pages/Admin/Dashboard";
import User from "pages/Admin/User";
import Book from "pages/Admin/Book";
import AddUser from "pages/Admin/AddUser";
import BookDetail from "pages/BookDetail";
import Loan from "pages/Admin/Loan";

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <GuestRoute>
                <LoginPage />
              </GuestRoute>
            }
          />
          <Route
            path="/register"
            element={
              <GuestRoute>
                <RegisterPage />
              </GuestRoute>
            }
          />
          <Route path="/books/:id" element={<BookDetail />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="user" element={<User />} />
            <Route path="user/add" element={<AddUser />} />
            <Route path="books" element={<Book />} />
            <Route path="loans" element={<Loan />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
