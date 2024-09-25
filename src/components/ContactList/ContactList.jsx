import { useSelector } from "react-redux";
import { selectContacts, selectFilter } from "../../redux/selectors.js";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={style.container}>
      {visibleContacts.map((contact) => (
        <Contact key={contact.id} item={contact} />
      ))}
    </ul>
  );
}
