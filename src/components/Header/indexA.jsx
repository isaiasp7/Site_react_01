import './styleA.css'; // Importe seu arquivo CSS



const Header = () => {
  //useScrollDown();
  return (
    <div className="container">
      <div className='topSearch'>
        <div className="logo">
            loja faça seu style
        </div>
        <input type="search" name="" id="search" />
      </div>
      <div className='section'>
          <div className='section1'>1</div>
          <div className='section2'>2</div>
          <div className='section3'>3</div>
      </div>
      

    </div>
  );
};
/*function useScrollDown() {//ao scrollar a tela o section muda de default(static) para fixed
  const [scrollY,usescrollY] = useState(0); 
  usescrollY(window.scrollY);
  useEffect(() => {
      const section = document.querySelector('.section');
      console.log(window.scrollY);
      section.style.position =  'fixed' ;
      

  }, scroll);
}
*/

export default Header;
