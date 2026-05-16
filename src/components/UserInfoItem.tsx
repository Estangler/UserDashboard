import type { ReactNode } from "react";

type UserInfoItemProps = {
  label: string;
  children: ReactNode;
};

export default function UserInfoItem({ label, children }: UserInfoItemProps) {
  return (
    <div className="flex flex-col">
      <p className="text-slate-400">{label}</p>

      <div className="font-semibold mt-1">{children}</div>
    </div>
  );
}
