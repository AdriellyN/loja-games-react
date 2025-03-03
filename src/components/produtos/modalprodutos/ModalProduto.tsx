import Popup from "reactjs-popup";
import FormProduto from "../formproduto/FormProduto";
import './ModalProduto.css';


function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='px-4 py-2 border border-white rounded hover:bg-white hover:text-slate-800'>
                        Novo Produto
                    </button>
                }
                modal
            >
                <FormProduto />
            </Popup>
        </>
    );
}

export default ModalProduto;