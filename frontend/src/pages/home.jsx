import '../styles/home.css';

function Inicio(){
    return (
        <div className='body'>
            <div className='login'>
                <h1>Login</h1>
                <h2>Nome</h2><input id="Nomeinput" type="text" placeholder='Nome'/>
                <h2>Senha</h2><input id="Senhainput" type="text" placeholder='Senha'/> <br/>
                <button>Salvar</button>
            </div>
        </div>

    );
}

export default Inicio;