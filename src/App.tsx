import { Toaster } from "react-hot-toast";
import ShoppingPanel from "./components/ShoppingPanel/ShoppingPanel";

function App() {
  return (
    <div className="App">
      <header className='text-center text-2xl my-10 font-semibold'>
        Shopping Cart Test
      </header>
      <ShoppingPanel />

      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
