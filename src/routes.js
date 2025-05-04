import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Principal from "./pages/Principal";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/principal" element={<Principal />} />
    </Routes>
  );
}