import './Button.css';
import { FunctionComponent } from 'react';

type Props = {
    texto: string
}

const Button: FunctionComponent<Props> = function (Props) {
    return(
        <>
            <button>{Props.texto}</button>
        </>
       
    );
}

export default Button;