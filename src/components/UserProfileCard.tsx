import { Diameter } from "lucide-react";
import UserInfoItem from "./UserInfoItem";
import Card from "./Card";
import ErrorState from "./ErrorState";
import EmptyState from "./EmptyState";
import LoadingState from "./LoadingState";

export type APIType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type Geo = {
  lat: string;
  lng: string;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type UserProfileCardProps = {
  isError: string | null;
  isEmpty: boolean;
  isLoading: boolean;
  user: APIType | null;
};

export default function UserProfileCard({
  isEmpty,
  isError,
  isLoading,
  user,
}: UserProfileCardProps) {
  if (isError) {
    return <ErrorState />;
  }
  if (isEmpty) {
    return <EmptyState />;
  }
  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">Perfil do Usuário</h2>
        <p className="text-sm text-slate-400">
          Gerencie suas informações pessoas e preferências da conta.
        </p>
      </div>

      <Card>
        <div>
          <div className="flex gap-3 items-center p-8 border-b border-slate-700">
            <div className="bg-linear-to-br from-blue-700 to-slate-700 h-18 w-18 rounded-full flex items-center justify-center font-bold">
              {user?.username}
            </div>
            <div>
              <h3 className="text-xl font-semibold">{user?.username}</h3>
              <p className="text-sm text-slate-400">Front End Developer</p>
            </div>
          </div>

          <div className="flex justify-between gap-3 p-8 text-sm">
            <UserInfoItem label={"Nome Completo"}>{user?.name}</UserInfoItem>
            <UserInfoItem label={"Empresa"}>
              <div className="flex items-center gap-2">
                <div className="bg-indigo-500 p-1 rounded-sm">
                  <Diameter size={14} />
                </div>

                <span>{user?.company.name}</span>
              </div>
            </UserInfoItem>
            <UserInfoItem label="Email">
              {user?.email?.toLocaleLowerCase()}
            </UserInfoItem>
          </div>
        </div>
      </Card>
    </>
  );
}
