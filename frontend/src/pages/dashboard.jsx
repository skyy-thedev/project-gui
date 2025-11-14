import { useLocation } from "wouter";
import '../styles/dashboard.css';
function Dashboard() {

   const [, setLocation] = useLocation();

   const retornar = () => {
    setLocation("/");
   }

   return (
        <div className="dashboard"> 
            <div className="header">
            <h1>Histórico</h1>
            <h1>Cadastrar</h1>
            <h1 className= "exit" onClick={retornar}>Sair</h1>

            </div>
        </div>
        
   );
}

export default Dashboard;