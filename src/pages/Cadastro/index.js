import React, { Component } from 'react';
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

class Cadastro extends Component{
 
  constructor(props){
    super(props);
    this.state = {
      nome:"",
      sobrenome:"",
      email:"",
      senha:"",
      birthdate:""
    }
    this.gravar = this.gravar.bind(this)
    this.criarUsuario = this.criarUsuario.bind(this)
  }

  async gravar(uid) {
    await setDoc(doc(db, "usuarios", uid), {
      nome: this.state.nome,
      sobrenome: this.state.sobrenome,
      nascimento: this.state.birthdate
    });
  }
  async criarUsuario() {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        this.state.email,
        this.state.senha
      );

      const user = userCredential.user;
      await this.gravar(user.uid);

      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      alert("Erro ao cadastrar: " + error.message);
    }
  }

  render(){
    return(
      <div>
        <h1>Página de Cadastro</h1>
        <input type ="email" placeholder='E-mail' onChange={(e) => this.setState({email: e.target.value})}/>
        <input type ="password" placeholder='Senha' onChange={(e) => this.setState({senha: e.target.value})}/>
        <input type ="text" placeholder='Nome' onChange={(e) => this.setState({nome: e.target.value})}/>
        <input type ="text" placeholder='Sobrenome' onChange={(e) => this.setState({sobrenome: e.target.value})}/>
        <input type ="date" placeholder='Data de nascimento' onChange={(e) => this.setState({birthdate: e.target.value})}/>
        <button onClick={this.criarUsuario}>Gravar</button>
      </div>
    )
  }
}

export default Cadastro;