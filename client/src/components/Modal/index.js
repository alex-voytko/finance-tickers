import { useContext } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { onDelete } from "../../redux/slice/delete-slice";
import { modalContext } from "../../App";
import Button from "../Button";
import { ReactComponent as Restore } from "../../svg/restore.svg";

function Modal({ className }) {
  const dispatch = useDispatch();
  const { onModalToggle } = useContext(modalContext);
  const deletedItems = useSelector((state) => state.delete.deletedItems);

  return createPortal(
    <div
      className={className}
      onClick={(e) => {
        if (e.target === e.currentTarget) onModalToggle();
      }}
    >
      <h2>Trash</h2>
      <div className="modal-content">
        <div className="modal-wrapper">
          <ul className="trash-list">
            {deletedItems.map(({ name }) => (
              <li key={name}>
                <div className={`deleted-ticker ${name}`}>{name}</div>
              </li>
            ))}
          </ul>
          <Button
            tip="Restore all"
            onClick={() => {
              dispatch(onDelete(null));
              onModalToggle("");
            }}
          >
            <Restore className="icon" />
          </Button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
}

export default Modal;
