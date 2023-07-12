import Footer from '../Components/Footer';
import Header from '../Components/Header';
import mealIcon from '../images/mealIcon.svg';

function Meals() {
  const routeName = 'Meals';
  return (
    <>
      <Header icon={ mealIcon } routeName={ routeName } />
      <Footer />
    </>
  );
}

export default Meals;
