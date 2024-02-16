import {Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from "framer-motion"

import {Header} from './layout/Header';
import Home from './pages/Home';

function App() {
    const location = useLocation()

    return (
        <>
            <Header/>
           <main>
               <AnimatePresence mode="wait">
                   <Routes location={location} key={location.pathname}>
                       <Route index element={<Home title="FULL-CYCLE EVENT AGENCY"/>}/>
                       <Route path="about" element={<Home title="This is About page!"/>}/>
                   </Routes>
               </AnimatePresence>
           </main>
        </>
    );
}

export default App;
