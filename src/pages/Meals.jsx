import Header from '../Components/Header';
import mealIcon from '../images/mealIcon.svg';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';

function Meals() {
  const routeName = 'Meals';
  return (
    <div>
      <Header icon={ mealIcon } routeName={ routeName } />
      <Cards />
      <Footer />
    </div>
  );
}

export default Meals;
