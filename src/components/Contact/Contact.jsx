import css from "./Contact.module.css";

import { FaUser } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

const Contact = ({ userContact, onDelete }) => {
  const { id, name, number } = userContact;

  return (
    <li className={css.contact}>
      <div className={css["user-information"]}>
        <div>
          <FaUser />
          <p>{name}</p>
        </div>
        <div>
          <BsTelephone />
          <p>{number}</p>
        </div>
      </div>
      <button
        type="button"
        name="delete"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
