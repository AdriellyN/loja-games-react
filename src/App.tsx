import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria'
import FormCategoria from './components/categorias/formcategorias/FormCategoria'
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListarProdutos from './components/produtos/listarprodutos/ListarProdutos'
import FormProduto from './components/produtos/formproduto/FormProduto'
import DeletarProduto from './components/produtos/deletarprodutos/DeletarProdutos'
import ListarProdutosPorNome from './components/produtos/listarprodutospornome/ListarProdutosPorNome'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex flex-col min-h-screen bg-gray-200 ">
          <div className='flex-grow'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListarProdutos />} />
              <Route path="/cadastrarproduto" element={<FormProduto />} />
              <Route path="/editarproduto/:id" element={<FormProduto />} />
              <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
              <Route path="/consultarnome/:nome" element={<ListarProdutosPorNome />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App