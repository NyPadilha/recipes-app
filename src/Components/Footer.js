import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';

function Footer() {
  return (
    <div
      data-testid="footer"
      className="footer"
    >
      <button>
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="drinkIcon"
        />
      </button>
      <button>
        <img
          data-testid="meals-bottom-btn"
          src={ mealIcon }
          alt="searchIcon"
        />
      </button>
    </div>
  );
}

export default Footer;
