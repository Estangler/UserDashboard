import Card from "./Card";

export default function LoadingState() {
  return (
    <section className="space-y-8 animate-pulse">
      <div className="space-y-2">
        <p className="w-80 bg-slate-700 h-5 rounded-sm" />
        <p className="w-120 bg-slate-700 h-5 rounded-sm" />
      </div>
      <Card>
        <div className="flex gap-3 items-center p-8 border-b border-slate-700">
          <div className="bg-slate-700 h-18 w-18 rounded-full " />

          <div className="space-y-2">
            <p className="w-40 bg-slate-700 h-5 rounded-sm" />
            <p className="w-40 bg-slate-700 h-5 rounded-sm" />
          </div>
        </div>

        <div className="flex gap-2 justify-between p-8">
          <div className="space-y-2">
            <p className="w-20 bg-slate-700 h-5 rounded-sm" />
            <p className="w-40 bg-slate-700 h-5 rounded-sm" />
          </div>

          <div className="space-y-2">
            <p className="w-20 bg-slate-700 h-5 rounded-sm" />
            <p className="w-40 bg-slate-700 h-5 rounded-sm" />
          </div>

          <div className="space-y-2">
            <p className="w-20 bg-slate-700 h-5 rounded-sm" />
            <p className="w-40 bg-slate-700 h-5 rounded-sm" />
          </div>
        </div>
      </Card>
    </section>
  );
}
