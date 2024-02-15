import { Toaster } from "react-hot-toast";
import ShoppingPanel from "./components/ShoppingPanel/ShoppingPanel";
import ToDoListPanel from "./components/ToDoListPanel/ToDoListPanel";

function App() {
  return (
    <div className="App">
      <header className='text-center text-2xl my-10 font-semibold'>
        Shopping Cart Test
      </header>
      <ShoppingPanel />

      <h1 className='text-center text-2xl my-10 font-semibold'>
        To Do List
      </h1>

      <ToDoListPanel />
      
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
