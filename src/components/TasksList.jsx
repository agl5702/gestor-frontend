import { useEffect, useState } from "react";
import { getAllP } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TasksList() {
  const [passes, setPasses] = useState([]);

  useEffect(() => {
    async function loadP() {
      try {
        const res = await getAllP();
        setPasses(res.data);
      } catch (error) {
        console.error("Error al cargar las contraseñas:", error);
      }
    }
    loadP();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {passes.map((pass) => (
        <TaskCard key={pass.id} pass={pass} />
      ))}
    </div>
  );
}
