import {Component} from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { withRouter } from "../../utils/withRouter"; // ou ajuste o path
class Login extends Component{
 
  constructor(props){
    super(props);
    this.state = {
      email:"",
      senha:"",
      erro:null
    }
    
  }

  loginHandler = async () => {
    try{
      await signInWithEmailAndPassword(auth, this.state.email, this.state.senha);
      this.props.navigate("/principal");
      
    } catch(err){
      console.log(err)
      alert("Usuário não encontrado ou senha incorreta")
    }
  }

  render(){
    return(
      <div className="page-container">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="E-mail"
        onChange={(e) => this.setState({ email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => this.setState({ senha: e.target.value })}
      />
      <button onClick={this.loginHandler}>Entrar</button>
      {this.state.erro && <p style={{ color: "red" }}>{this.state.erro}</p>}
    </div>
    );
  }
}

export default withRouter(Login); 