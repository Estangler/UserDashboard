import { CircleUser } from "lucide-react";
import Card from "./Card";

export default function EmptyState() {
  return (
    <div>
      <Card>
        <div className="flex flex-col items-center p-8">
          <div className="h-18 w-18 rounded-full bg-gray-500/8 flex items-center justify-center text-gray-400">
            <CircleUser size={42} />
          </div>
          <p>Perfil Incompleto</p>
          <p className="text-sm text-slate-400">
            Parece que você ainda não configurou as informações do seu perfil.
            Complete seu cadastro para usar todos os recursos.
          </p>
          <button className="bg-indigo-500 flex gap-2 items-center font-semibold border border-transparent rounded-md p-1 hover:opacity-80 active:scale-95 transition duration-300">
            Configurar Perfil
          </button>
        </div>
      </Card>
    </div>
  );
}
