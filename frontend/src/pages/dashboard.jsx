import { useState } from "react";
import NavBar from '../components/NavBar.jsx';
import DashboardHome from "../components/DashboardHome";
import CadastroAlunos from "../components/CadastroAlunos";
import Historico from "../components/Historico";
import Analytics from "../components/Analytics";
import '../styles/dashboard.css';



function Dashboard() {

      const [currentSection, setCurrentSection] = useState("dashboard");

        const renderContent = () => {
            switch (currentSection) {
            case "dashboard":
                return <DashboardHome />;
            case "cadastro":
                return <CadastroAlunos />;
            case "historico":
                return <Historico />;
            case "Analytics":
                return <Analytics />;
            default:
                return <DashboardHome />;
            }
        };

    return (
        <div className="landing"> 
                <NavBar onSelect={setCurrentSection}/>
            
            {/* 4. Chame a função para exibir o componente */}
            <div className="exibeContent">
                {renderContent()}
            </div>
        </div>
    );
}

export default Dashboard;