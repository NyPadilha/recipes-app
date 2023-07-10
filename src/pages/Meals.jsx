import Header from '../Components/Header';
import mealIcon from '../images/mealIcon.svg';

function Meals() {
  const routeName = 'Meals';
  return (
    <Header icon={ mealIcon } routeName={ routeName } />
  );
}

export default Meals;
