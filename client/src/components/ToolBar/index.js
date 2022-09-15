import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { onSelect, setMarkedItems } from "../../redux/slice/select-slice";
import { onDelete } from "../../redux/slice/delete-slice";
import { modalContext } from "../../App";
import Container from "../Container";
import Button from "../Button";
import { ReactComponent as Arrow } from "../../svg/arrow.svg";
import { ReactComponent as Delete } from "../../svg/delete.svg";
import { ReactComponent as Trash } from "../../svg/trash.svg";

function ToolBar() {
  const dispatch = useDispatch();
  const showSelecting = useSelector((state) => state.select.showSelecting);
  const markedItems = useSelector((state) => state.select.markedItems);
  const deletedItems = useSelector((state) => state.delete.deletedItems);
  const { onModalToggle } = useContext(modalContext);

  const arrowStyles = classNames("icon", { cancel: showSelecting });
  return (
    <Container className="toolbar-container">
      <Button
        tip={showSelecting ? "Cancel" : "Mark"}
        onClick={() => {
          dispatch(setMarkedItems(null));
          dispatch(onSelect());
        }}
      >
        <Arrow className={arrowStyles} />
      </Button>
      {showSelecting && (
        <Button
          tip="Delete"
          onClick={() => {
            dispatch(onDelete(markedItems));
            dispatch(onSelect());
            dispatch(setMarkedItems(null));
          }}
          disabled={!markedItems.length}
          className="delete-btn"
        >
          <Delete className="icon" />
        </Button>
      )}
      {deletedItems.length >= 1 && (
        <Button tip="Trash" onClick={() => onModalToggle("is-active")}>
          <Trash className="icon" />
        </Button>
      )}
    </Container>
  );
}

export default ToolBar;
