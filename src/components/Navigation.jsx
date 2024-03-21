import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between py-3 items-center">
      <Link to="/index">
        <h1 className="font-bold text-3xl mb-4">Mi Gestor de contraseñas</h1>
      </Link>
      <button className="bg-green-400 p-3 rounded-lg">
        <Link to="/create">Comenzar</Link>
      </button>
    </div>
  );
}
