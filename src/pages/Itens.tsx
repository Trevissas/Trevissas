import './itens.css';
import Cabecalho from  '../components/Cabecalho';
import Rodape from '../components/Rodape';
import Button from '../components/Button';


const ItensPage = function()  {
    //let estado: 'Iniciar';
    const [estado, setEstado] = useState('INICIAL');

const BotaoCriarClicado = function () {
    setEstado('CRIAR');
};

    return (
        <>
            <Cabecalho/>
            <main>
                <button onClick={   BotaoCriarClicado}>Testando</button>
                <h1>Itens</h1>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>    
                </ul>
                {(estado === 'Iniciar') && (
                    <Button texto='Criar'/>
                )}
                {(estado === 'criar') && (
                    <form className='item'>
                    <label>
                        Nome: 
                        <input type="text" placeholder= "nome"/>                
                    </label>
                    <label>
                        <textarea placeholder= "descrição"></textarea>  
                    </label>
                    <div>
                        <Button texto='salvar'/>
                        <Button texto='cancela'/>
                    </div>
                </form> 
                )}
                <Button texto="Criar" /> <Button texto='Cancela'/>
        
            </main>
            <Rodape/>
        </>

    );
};
                   
                   
                    

export default ItensPage;

function useState(arg0: string): [any, any] {
    throw new Error('Function not implemented.');
}
