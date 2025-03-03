import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { atualizar, listar, cadastrar } from "../../../services/Services";
import Categoria from "../../../models/Categoria";

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarCategoriasPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert('Não foi possível encontrar a categoria')
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriasPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar('/categorias', categoria, setCategoria)
                alert('A Categoria foi atualizada com sucesso!')
            } catch (error: any) {
                alert('Erro ao atualizar a categoria!')
            }
        } else {
            try {
                await cadastrar('/categorias', categoria, setCategoria)
                alert('A Categoria foi cadastrada com sucesso!')
            } catch (error: any) {
                alert('Erro ao cadastrar a categoria!')
            }
        }
        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate('/categorias')
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar uma nova Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="tipo">Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name='tipo'
                        className="border-1 border-slate-700 rounded p-2"
                        value={categoria.tipo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-slate-700 
                    hover:bg-slate-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true} />
                        :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;