import css from './Contact.module.css';
import { BsPhone, BsPerson, BsTrash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ data: { id, number, name } }) {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.containerContact}>
      <div className={css.thumbContact}>
        <h2 className={css.nameContact}>
          <BsPerson size="22" />
          {name}
        </h2>
        <p className={css.numberContact}>
          <BsPhone size="22" />
          {number}
        </p>
      </div>
      <button className={css.buttonDelete} onClick={handleDeleteItem}>
        <BsTrash size="15" />
        Delete
      </button>
    </div>
  );
}