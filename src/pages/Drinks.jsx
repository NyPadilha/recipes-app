import Cards from '../Components/Cards';
import Header from '../Components/Header';
import drinkIcon from '../images/drinkIcon.svg';
import Footer from '../Components/Footer';

function Drinks() {
  const routeName = 'Drinks';
  return (
    <div>
      <Header icon={ drinkIcon } routeName={ routeName } />
      <Cards />
      <Footer />
    </div>
  );
}

export default Drinks;
