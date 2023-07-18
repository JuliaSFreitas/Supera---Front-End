import './index.css'

export function Search (){
    return(
        <form action="">
            <div className="form">
                <div className="flex-col">
                    <label htmlFor="">Data início</label>
                    <input type="text" />
                </div>
                <div className="flex-col">
                    <label htmlFor="">Data fim</label>
                    <input type="text" />
                </div>
                <div className="flex-col">
                    <label htmlFor="">Nome do operador transacionado</label>
                    <input type="text" />
                </div>
            </div>
            <input type="submit" value="pesquisar" />
        </form>
    )
}