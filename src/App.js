import { Link } from "react-router";
import AppRoutes from './routes';

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Login</Link> |{" "}
        <Link to="/cadastro">CADASTRO</Link>
      </nav>

      <AppRoutes />
    </div>
  );
}