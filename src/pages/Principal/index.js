import { Component } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      nascimento: ""
    };
  }

  async componentDidMount() {
    const user = auth.currentUser;
    if (user) {
      const ref = doc(db, "usuarios", user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const dados = snap.data();
        this.setState({
          nome: dados.nome,
          sobrenome: dados.sobrenome,
          nascimento: dados.nascimento
        });
      }
    }
  }

  render() {
    return (
      <div className="page-container">
        <h1>Dados de cadastro</h1>
        <p>Nome: {this.state.nome}</p>
        <p>Sobrenome: {this.state.sobrenome}</p>
        <p>Data de Nascimento: {this.state.nascimento}</p>
      </div>
    );
  }
}

export default Principal;
