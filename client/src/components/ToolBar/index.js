import { useDispatch, useSelector } from "react-redux";
import { onSelect, setMarkedItems } from "../../redux/slice/select-slice";
import { onDelete } from "../../redux/slice/delete-slice";
import Container from "../Container";
import Button from "../Button";

function ToolBar() {
  const dispatch = useDispatch();
  const showSelecting = useSelector((state) => state.select.showSelecting);
  const markedItems = useSelector((state) => state.select.markedItems);
  const deletedItems = useSelector((state) => state.delete.deletedItems);

  return (
    <Container className="toolbar-container">
      <Container className="control-btn-container">
        <Button
          name={showSelecting ? "Cancel" : "Mark"}
          onClick={() => {
            dispatch(setMarkedItems(null));
            dispatch(onSelect());
          }}
        />
        {showSelecting && (
          <Button
            name="Delete"
            onClick={() => {
              dispatch(onDelete(markedItems));
              dispatch(onSelect());
              dispatch(setMarkedItems(null));
            }}
            disabled={!markedItems.length}
          />
        )}
      </Container>
      {deletedItems && <Button name="Trash" />}
    </Container>
  );
}

export default ToolBar;
