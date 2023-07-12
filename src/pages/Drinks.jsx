import Header from '../Components/Header';
import drinkIcon from '../images/drinkIcon.svg';
import Footer from '../Components/Footer';

function Drinks() {
  const routeName = 'Drinks';
  return (
    <>
      <Header icon={ drinkIcon } routeName={ routeName } />
      <Footer />
    </>
  );
}

export default Drinks;
