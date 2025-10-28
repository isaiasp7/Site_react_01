import './styleA.css'; // Importe seu arquivo CSS
import imagem from '../../img-icons/02d32a69fddd9b57813213b2096d645b-removebg-preview.png';

const Header = () => {
  return (
    <div className="container">
     <img src={imagem} alt="Descrição da imagem, ex.: ícone de exemplo" className='img_logo'/>
      <div className='section'>
          <div className='section1'>1</div>
          <div className='section2'>2</div>
          <div className='section3'>3</div>
      </div>
      

    </div>
  );
};


export default Header;
