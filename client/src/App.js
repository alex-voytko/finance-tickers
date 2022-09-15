import { useState, useEffect, useRef, createContext, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { fetch } from "./redux/slice/tickers-slice";
import classNames from "classnames";
import TickerList from "./components/TickerList";
import Container from "./components/Container";
import ToolBar from "./components/ToolBar";
import AppBar from "./components/AppBar";
import Modal from "./components/Modal";

export const modalContext = createContext();

function App() {
  const dispatch = useDispatch();
  const tickers = useSelector((state) => state.tickers.items);
  const isDarkModeOn = useSelector((state) => state.theme.isDarkModeOn);
  const [modalClassName, setmodalClassName] = useState("");
  const socket = useRef();

  const connect = () => {
    socket.current = io("http://localhost:4000/");
    socket.current.on("ticker", (res) => dispatch(fetch(res)));
    socket.current.emit("start", (res) => console.log(res));
  };
  const onModalToggle = (className) => setmodalClassName(className);
  const modalStyles = classNames("backdrop-modal", modalClassName);

  useEffect(() => {
    connect();
    document.getElementById("dark-mode-toggle").checked = isDarkModeOn;
    console.dir(document.querySelector(".ticker-list"));
  }, []);
  useEffect(() => {
    if (isDarkModeOn) {
      document.body.classList.add("is-dark");
    } else {
      document.body.classList.remove("is-dark");
    }
  }, [isDarkModeOn]);

  return (
    <Container>
      <modalContext.Provider value={{ onModalToggle }}>
        <AppBar />
        <ToolBar />
        <TickerList tickers={tickers} />
        <Modal className={modalStyles} />
      </modalContext.Provider>
    </Container>
  );
}

export default memo(App);
