import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { fetch } from "./redux/slice/tickers-slice";
import Title from "./components/Title";
import TickerList from "./components/TickerList";
import Container from "./components/Container";
import Toggler from "./components/Toggler";
import ToolBar from "./components/ToolBar";

function App() {
  const dispatch = useDispatch();
  const tickers = useSelector((state) => state.tickers.items);
  const isDarkModeOn = useSelector((state) => state.darkMode.isDarkModeOn);
  const socket = useRef();

  function connect() {
    socket.current = io("http://localhost:4000/");
    socket.current.on("ticker", (res) => dispatch(fetch(res)));
    socket.current.emit("start", (res) => console.log(res));
  }

  console.log(tickers);
  useEffect(() => {
    connect();
    document.getElementById("dark-mode-toggle").checked = isDarkModeOn;
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
      <Toggler />
      <Title />
      <ToolBar />
      <TickerList tickers={tickers} />
    </Container>
  );
}

export default App;
