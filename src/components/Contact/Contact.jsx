import style from "./Contact.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ item }) {
  const dispatch = useDispatch();
  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  return (
    <li className={style.container}>
      <div className={style.containerData}>
        <div>
          <AiOutlineUser className={style.icon} />
          <span className={style.itemEl}>{item.name}</span>
        </div>
        <div>
          <FiPhone />
          <span className={style.itemEl}>{item.number}</span>
        </div>
      </div>
      <button className={style.button} onClick={() => handleDelete(item.id)}>
        Delete
      </button>
    </li>
  );
}
