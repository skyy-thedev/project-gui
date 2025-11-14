import React, { useState } from 'react'; // <-- Importar useState
import { useLocation } from "wouter";
import RegistrarAluno from '../components/registrarAluno.jsx';
import HistoricoComponent from '../components/historicoComponent.jsx';
import '../styles/dashboard.css';

// Defina as constantes para os nomes dos componentes
const CONTENT = {
    REGISTER: 'register',
    HISTORIC: 'historic'
};

function Dashboard() {
    const [, setLocation] = useLocation();
    
    // 1. Defina o estado para controlar qual conteúdo está ativo.
    // O valor inicial pode ser 'register' ou 'historic'.
    const [activeContent, setActiveContent] = useState(CONTENT.REGISTER); 

    // 2. Simplifique as funções de navegação interna para mudar o estado
    const retornar = () => {
        setLocation("/"); // Mantém o retorno para a página inicial (logout)
    }

    const goToRegisterNewStudent = () => {
        // Altera o estado para exibir o componente RegistrarAluno
        setActiveContent(CONTENT.REGISTER);
    }

    const goToHistoric = () => {
        // Altera o estado para exibir o componente HistoricoComponent
        setActiveContent(CONTENT.HISTORIC);
    }

    const getActiveTitle = () => {
        switch (activeContent) {
            case CONTENT.REGISTER:
                return 'Cadastrar Novo Aluno'; // Título claro para o h2
            case CONTENT.HISTORIC:
                return 'Histórico de Registros'; // Título claro para o h2
            default:
                return 'Dashboard';
        }
    }

    // 3. Função principal para renderização condicional
    const renderContent = () => {
        switch (activeContent) {
            case CONTENT.REGISTER:
                return <RegistrarAluno />;
            case CONTENT.HISTORIC:
                return <HistoricoComponent />;
            default:
                return <div>Selecione uma opção.</div>;
        }
    }

    return (
        <div className="dashboard"> 
            <div className="header">
                <nav>
                    <p 
                        className={ `nav-item historic ${activeContent === CONTENT.HISTORIC ? 'selected' : ''}` } 
                        onClick={goToHistoric}
                    >
                        Histórico
                    </p>
                    <p 
                        className={ `nav-item registerStudent ${activeContent === CONTENT.REGISTER ? 'selected' : ''}` } 
                        onClick={goToRegisterNewStudent}
                    >
                        Cadastrar
                    </p>
                    <p className="exit" onClick={retornar}>
                        Sair
                    </p>
                </nav>
            </div>
            
            {/* 4. Chame a função para exibir o componente baseado no estado */}
            <div className="exibeContent">
                <h2>{getActiveTitle()}</h2>
                {renderContent()}
            </div>
        </div>
    );
}

export default Dashboard;