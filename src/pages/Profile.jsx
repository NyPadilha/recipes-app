import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Profile() {
  const [profileEmail, setProfileEmail] = useState('');
  const routeName = 'Profile';
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  useEffect(() => {
    const localEmail = JSON.parse(localStorage.getItem('user'));
    if (localEmail !== null) {
      setProfileEmail(localEmail);
    }
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
        <button
          data-testid="profile-favorite-btn"
          onClick={ () => { history.push('/favorite-recipes'); } }
        >
          Favorite Recipes
        </button>
        <button
          data-testid="profile-logout-btn"
          onClick={ () => logout() }
        >
          Logout
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
