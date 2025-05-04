// src/utils/withRouter.js
import { useNavigate } from "react-router";

export function withRouter(Component) {
  return function Wrapper(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}
