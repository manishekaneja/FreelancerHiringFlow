import { FC } from "react";
import { Avatar } from "../Avatar";

const UserCard: FC<{ data: User }> = ({
  data: { name, email, skills },
}) => (
  <div
    className="bg-white rounded-md p-3"
    style={{ borderColor: "#303F6080", borderWidth: 1 }}
  >
    <div className="flex flex-row mb-6">
      <div>
        <Avatar str={name} />
      </div>
      <div className="flex-1 flex flex-col items-stretch justify-start">
        <p className="flex-1 secondary font-bold">{name}</p>
        <p className="flex-1 w-full secondary ">{email}</p>
      </div>
    </div>
    <p className="p-0 m-0 secondary font-semibold text-xs">Skills</p>
    <p className="p-0 m-0 secondary pb-4 text-sm ">{skills}</p>
  </div>
);

export default UserCard;