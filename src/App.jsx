import {Route, Routes} from "react-router";
import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home.jsx";
import NoteDetails from "./pages/NoteDetails.jsx";
import {NoteContextProvider} from "./context/NoteContext.jsx";

const App = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-['Outfit'] bg-[#ffffff]  ">

      <NoteContextProvider>

        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/note/:noteId" element={<NoteDetails/>}/>
          </Route>
        </Routes>

      </NoteContextProvider>

    </div>
  );
};

export default App;
