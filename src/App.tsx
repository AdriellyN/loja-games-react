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
import { CartProvider } from './contexts/CartContext'
import Cart from './components/carrinho/cart/Cart'

function App() {

  return (
    <>
      <CartProvider>
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
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App