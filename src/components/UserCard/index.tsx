import { IListUsers } from "../../contexts/UserContext";
import { Dispatch, SetStateAction } from "react";

interface IUserCardProps {
  user: IListUsers;
  IoAddCircle: React.ElementType;
  setIdUser: Dispatch<SetStateAction<string>>;
  setAddModal: (data: boolean) => void;
  listPetUser: (data: string) => void;
  setAddConsult: (data: boolean) => void;
}

const UserCard = ({
  user,
  IoAddCircle,
  setIdUser,
  setAddModal,
  listPetUser,
  setAddConsult,
}: IUserCardProps) => {
  return (
    <li className="data">
      <p className="list-pet">{user.name}</p>
      <p className="list-animal">{user.email}</p>
      <div className="buttons-add">
        <IoAddCircle
          className="add-pets"
          size={40}
          onClick={() => {
            setIdUser(user.id);
            setAddModal(true);
          }}
        />
        <IoAddCircle
          className="add-consults"
          size={40}
          onClick={() => {
            listPetUser(user.id);
            setIdUser(user.id);
            setAddConsult(true);
          }}
        />
      </div>
    </li>
  );
};

export default UserCard;
