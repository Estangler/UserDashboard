import { TriangleAlert, RefreshCcw } from "lucide-react";
import Card from "./Card";

export default function ErrorState() {
  return (
    <Card>
      <div className="flex flex-col items-center p-8">
        <div className="h-24 w-24 rounded-full bg-red-500/5 flex items-center justify-center animate-pulse">
          <div className="h-18 w-18 rounded-full bg-red-500/8 flex items-center justify-center text-red-400">
            <TriangleAlert size={42} />
          </div>
        </div>

        <p>Não foi possível carregar os dados</p>
        <p className="text-sm text-slate-400">
          Ocorreu um erro de comunicação com os servidores da API. Por favor,
          verifique sua conexão ou tente novamente.
        </p>
        <button className="bg-indigo-500 flex gap-2 items-center font-semibold border border-transparent rounded-md p-1 hover:opacity-80 active:scale-95 transition duration-300">
          <RefreshCcw size={16} />
          Tente novamente
        </button>
      </div>
    </Card>
  );
}
