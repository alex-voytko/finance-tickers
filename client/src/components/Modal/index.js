import { useContext } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { onDelete } from "../../redux/slice/delete-slice";
import { appContext } from "../../App";

import Button from "../Button";
import { ReactComponent as Restore } from "../../svg/restore.svg";

function Modal({ className }) {
  const dispatch = useDispatch();
  const { setModalClassName } = useContext(appContext);
  const deletedItems = useSelector((state) => state.delete.deletedItems);

  return createPortal(
    <div
      className={className}
      onClick={(e) => {
        if (e.target === e.currentTarget) setModalClassName("");
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
              setModalClassName("");
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
