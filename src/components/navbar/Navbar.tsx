
import { MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react"
import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../contexts/CartContext"

function Navbar() {

    const navigate = useNavigate()

    const [nome, setNome] = useState<string>("")

    const { quantidadeItems } = useContext(CartContext)

    function handleBuscarProdutos(e: ChangeEvent<HTMLInputElement>) {
        setNome(e.target.value)
    }

    function buscarProdutos(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        navigate(`/consultarnome/${nome}`)
        setNome('')
    }

    return (
        <>
            <div className="w-full flex justify-center  bg-slate-800 text-white py-6">
                <div className="container flex justify-between text-xl items-start mx-4 ">
                    <div className="flex justify-between gap-4">

                        <Link to='/home'>
                            <img
                                src="https://ik.imagekit.io/vzr6ryejm/games/logolg.png?updatedAt=1705976699033"
                                alt="Logo Página Home"
                                className="w-60"
                            />
                        </Link>
                    </div>

                    <div className="relative flex items-center justify-center w-2/5 text-black">
                        <form
                            className="flex items-center justify-center w-full"
                            onSubmit={buscarProdutos}
                        >
                            <input
                                className="w-10/12 px-4 py-4 bg-white rounded-lg h-9 focus:outline-none"
                                type="search"
                                placeholder="Pesquisar produto pelo nome"
                                id="nome"
                                name="nome"
                                required
                                value={nome}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleBuscarProdutos(e)}
                            />
                            <button
                                type="submit"
                                className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-900 rounded-lg border border-teal-700"
                            >
                                <MagnifyingGlass
                                    size={14}
                                    weight="bold"
                                />
                            </button>
                        </form>
                    </div>

                    <div className="flex items-center gap-4 py-4">
                        <Link
                            to="/produtos"
                            className="hover:underline"
                        >
                            Produtos
                        </Link>
                        <Link
                            to="/categorias"
                            className="hover:underline"
                        >
                            Categorias
                        </Link>
                        <Link
                            to="/cadastrarcategoria"
                            className="hover:underline"
                        >
                            Cadastrar Categoria
                        </Link>
                        <User
                            size={32}
                            weight="bold"
                        />
                        <Link to="/cart">
                            <ShoppingCart size={32} weight="bold" />
                            {quantidadeItems > 0 && (
                                <span className="relative -top-9 -right-5 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {quantidadeItems}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar