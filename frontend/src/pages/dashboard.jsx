import { useLocation } from "wouter";

function Dashboard() {

   const [, setLocation] = useLocation();

   const retornar = () => {
    setLocation("/");
   }

   return (
    <>
        <h1>Parabéns, você conseguiu fazer login com sucesso!</h1>
        <button onClick={retornar}>Clique aqui para retornar!</button>
    </>
   );
}

export default Dashboard;