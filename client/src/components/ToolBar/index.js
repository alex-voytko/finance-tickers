import { useDispatch, useSelector } from "react-redux";
import { onSelect, setMarkedItems } from "../../redux/slice/tickers-slice";

function ToolBar() {
  const dispatch = useDispatch();
  const showSelecting = useSelector((state) => state.tickers.showSelecting);

  return (
    <div className="tollbar-container">
      <button
        onClick={(e) => {
          dispatch(setMarkedItems(null));
          dispatch(onSelect());
        }}
      >
        {showSelecting ? "Cancel" : "Mark"}
      </button>
      {showSelecting && <button>Delete</button>}
    </div>
  );
}

export default ToolBar;
