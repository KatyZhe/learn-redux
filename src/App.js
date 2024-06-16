import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  return (
    <body>
      <div class="container">
        <div class="number">{cash}</div>
        <div class="buttons">
          <button class="button" onClick={() => addCash(Number(prompt()))}>
            Пополнить счет
          </button>
          <button class="button" onClick={() => getCash(Number(prompt()))}>
            Снять со счета
          </button>
        </div>
      </div>
    </body>
  );
}

export default App;
