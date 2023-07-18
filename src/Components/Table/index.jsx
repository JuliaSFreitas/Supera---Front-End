import { SliderTable } from "../SliderTable";

export function Table(){
    return (
        <div className="table">
            <div className="t-header">
                <p>Saldo total: </p>
                <p>Saldo no período: </p>
            </div>
            <div className="t-body">
                <div className="title">
                    <h5>Dados</h5>
                    <h5>Valência</h5>
                    <h5>Tipo</h5>
                    <h5>Nome do operador transacionado</h5>
                </div>
                <SliderTable/>
            </div>
        </div>
    )
}