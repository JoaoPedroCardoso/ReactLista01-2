import Foto from './Foto';
import Titulo from './Titulo';
import Recomendacao from './Recomendacao';
import Depoimento from './Depoimento';

export default function Post() {
    return (
        <div className="post">
            <Foto/>
            <Titulo/>
            <Recomendacao/>
            <Depoimento/>
        </div>
    );
}