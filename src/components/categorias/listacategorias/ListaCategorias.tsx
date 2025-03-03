import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import CardCategorias from "../cardcategorias/CardCategorias";
import { listar } from "../../../services/Services";

function ListaCategorias() {

    const navigate = useNavigate();

    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function buscarCategorias() {
        try {

            await listar('/categorias', setCategorias)

        } catch (error: any) {
            alert('Não foram encontras categorias')
            retornar()
        }
    }

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    function retornar() {
        navigate('/')
    }

    return (
        <>

            {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}


            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            categorias.map((categoria) => (
                                <CardCategorias key={categoria.id} categoria={categoria} />
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaCategorias;