import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createP, deleteP, getP, updateP } from "../api/tasks.api";
import { toast } from "react-hot-toast";

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateP(params.id, data);
      toast.success("Actualizado", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createP(data);
      toast.success("añadido", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }

    navigate("/index");
  });

  useEffect(() => {
    async function loadP() {
      if (params.id) {
        const { data } = await getP(params.id);
        setValue("social_network", data.social_network);
        setValue("username", data.username);
        setValue("password", data.password);
      }
    }
    loadP();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Red Social"
            {...register("social_network", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full"
            autoFocus
          />
          {errors.title && <span>Este campo es requerido</span>}
        </div>

        <div className="mb-3">
          <input
            placeholder="Nombre de Usuario"
            {...register("username", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full"
          />
          {errors.description && <span>Este campo es requerido</span>}
        </div>

        <div className="mb-3">
          <input
            placeholder="Contraseña"
            {...register("password", { required: true })}
            className="bg-zinc-700 p-3 rounded-lg block w-full"
          />
          {errors.description && <span>Este campo es requerido</span>}
        </div>

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Guardar
        </button>
      </form>

      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("Estás seguro que quieres eliminar?");
              if (accepted) {
                await deleteP(params.id);
                toast.success("Eliminado", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/index");
              }
            }}
          >
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
}
