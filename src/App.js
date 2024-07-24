import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addCustomerAction,
  deleteCustomerAction,
} from "./store/customerReducer";
import { addCashAction, getCashAction } from "./store/cashReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const deleteCustomer = (customer) => {
    dispatch(deleteCustomerAction(customer.id));
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
          <button class="button" onClick={() => addCustomer(prompt())}>
            Добавить клиента
          </button>
          {/* <button class="button" onClick={() => deleteCustomer(customer.id)}>
            Удалить клиента
          </button> */}
        </div>
        {customers.length > 0 ? (
          <div>
            {customers.map((customer) => (
              <div onClick={() => deleteCustomer(customer)} style={{fontSize: "2rem", border: '1px solid black', width: '200px', margin: '20px auto'}}>{customer.name}</div>
            ))}
          </div>
        ) : (
          <div>Клиенты отсутствуют</div>
        )}
      </div>
    </body>
  );
}

export default App;
