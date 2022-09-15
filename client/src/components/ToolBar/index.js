import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { onSelect, setMarkedItems } from "../../redux/slice/select-slice";
import { onDelete } from "../../redux/slice/delete-slice";
import { setPerforming } from "../../redux/slice/tickers-slice";
import { appContext } from "../../App";

import Container from "../Container";
import Button from "../Button";
import { ReactComponent as Arrow } from "../../svg/arrow.svg";
import { ReactComponent as Delete } from "../../svg/delete.svg";
import { ReactComponent as Trash } from "../../svg/trash.svg";
import { ReactComponent as Stop } from "../../svg/pause.svg";
import { ReactComponent as Play } from "../../svg/play.svg";

function ToolBar({ isStopped }) {
  const dispatch = useDispatch();
  const showSelecting = useSelector((state) => state.select.showSelecting);
  const markedItems = useSelector((state) => state.select.markedItems);
  const deletedItems = useSelector((state) => state.delete.deletedItems);
  const { setModalClassName } = useContext(appContext);

  const styles = {
    arrow: classNames("icon", { cancel: showSelecting }),
    performing: classNames("icon", { "is-stopped": isStopped }),
  };

  return (
    <Container className="toolbar-container">
      <Button
        tip={showSelecting ? "Cancel" : "Mark"}
        onClick={() => {
          dispatch(setMarkedItems(null));
          dispatch(onSelect());
        }}
      >
        <Arrow className={styles.arrow} />
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
        <Button tip="Trash" onClick={() => setModalClassName("is-active")}>
          <Trash className="icon" />
        </Button>
      )}
      <Button
        tip={isStopped ? "Play" : "Stop"}
        onClick={() => dispatch(setPerforming())}
      >
        {isStopped ? (
          <Play className={styles.performing} />
        ) : (
          <Stop className={styles.performing} />
        )}
      </Button>
    </Container>
  );
}

export default ToolBar;
