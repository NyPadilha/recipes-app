import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Profile() {
  const [profileEmail, setProfileEmail] = useState('');
  const routeName = 'Profile';
  const history = useHistory();

  useEffect(() => {
    const localEmail = JSON.parse(localStorage.getItem('user'));
    setProfileEmail(localEmail);
  }, []);

  return (
    <>
      <Header routeName={ routeName } />
      <div>
        <div data-testid="profile-email">{ profileEmail.email }</div>
        <button
          data-testid="profile-done-btn"
          onClick={ () => { history.push('/done-recipes'); } }
        >
          Done Recipes
        </button>
        <button data-testid="profile-favorite-btn">Favorite Recipes</button>
        <button data-testid="profile-logout-btn">Logout</button>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
