import UserCard from "../UserCard";
import { IListUsers } from "../../contexts/UserContext";
import { Dispatch, SetStateAction } from "react";

interface IUsersListProps {
  users: IListUsers[] | [];
  IoAddCircle: React.ElementType;
  setIdUser: Dispatch<SetStateAction<string>>;
  setAddModal: (data: boolean) => void;
  listPetUser: (data: string) => void;
  setAddConsult: (data: boolean) => void;
  setAddVaccine: (data: boolean) => void;
}

const UsersCardList = ({
  users,
  IoAddCircle,
  setIdUser,
  setAddModal,
  listPetUser,
  setAddConsult,
  setAddVaccine,
}: IUsersListProps) => {
  return (
    <ul>
      {users.map((user: IListUsers) => (
        <UserCard
          key={user.id}
          user={user}
          IoAddCircle={IoAddCircle}
          setIdUser={setIdUser}
          setAddModal={setAddModal}
          listPetUser={listPetUser}
          setAddConsult={setAddConsult}
          setAddVaccine={setAddVaccine}
        />
      ))}
    </ul>
  );
};
export default UsersCardList;
