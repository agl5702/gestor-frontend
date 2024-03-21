import { useNavigate } from "react-router-dom";

export function TaskCard({ pass }) {
  const navigate = useNavigate();
 
  const red={
    color : '#8DC2D1'
  }
  return (
    <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer" onClick={() => { navigate(`/${pass.id}`); }}>
      <h1 className="text-white font-boldrounded-lg text-primary"><span style={red}>Red social:</span> {pass.social_network}</h1>
      <p className="text-slate-400"><span style={red}>Nombre de usuario: </span>{pass.username}</p>
      <p className="text-slate-400" style={{ overflowWrap: "break-word", wordWrap: "break-word", whiteSpace: "pre-wrap" }}> <span style={red}>Clave:</span> {pass.password}</p>
    </div>
  );
}
