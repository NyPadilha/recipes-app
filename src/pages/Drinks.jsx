import Header from '../Components/Header';
import drinkIcon from '../images/drinkIcon.svg';

function Drinks() {
  const routeName = 'Drinks';
  return (
    <Header icon={ drinkIcon } routeName={ routeName } />
  );
}

export default Drinks;
