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
}

const UsersCardList = ({
  users,
  IoAddCircle,
  setIdUser,
  setAddModal,
  listPetUser,
  setAddConsult,
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
        />
      ))}
    </ul>
  );
};
export default UsersCardList;
