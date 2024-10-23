

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Listecategorie from './components/categories/Listecategorie';
import Insertcategorie from './components/categories/Insertcategorie';
import Editcategorie from './components/categories/Editcategorie';
import Viewcategorie from './components/categories/Viewcategorie';
import Listescategorie from './components/scategories/Listescategorie';
import Insertscategorie from './components/scategories/Insertscategorie';
import Editscategorie from './components/scategories/Editscategorie';
import Viewscategorie from './components/scategories/Viewscategorie';
import Listearticles from './components/articles/Listearticles';
import Insertarticle from './components/articles/Insertarticle';
import Editarticle from './components/articles/Editarticle';
import Viewarticle from './components/articles/Viewarticle';
import Menu from './components/Menu';

function App() {

  return (
    <>
      <Router>
        <Menu/>
        <Routes>
          <Route path="/categories" element={<Listecategorie/>}/>
          <Route path="/categories/add" element={<Insertcategorie/>}/>
          <Route path="/categories/edit/:id" element={<Editcategorie/>}/>
          <Route path="/categories/view/:id" element={<Viewcategorie/>}/>

          <Route path="/scategories" element={<Listescategorie/>}/>
          <Route path="/scategories/add" element={<Insertscategorie/>}/>
          <Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
          <Route path="/scategories/view/:id" element={<Viewscategorie/>}/>

          <Route path="/articles" element={<Listearticles/>}/>
          <Route path="/articles/add" element={<Insertarticle/>}/>
          <Route path="articles/edit/:id" element={<Editarticle/>}/>
          <Route path="/articles/view/:id" element={<Viewarticle/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
