import React from 'react';

import UsersList from '../components/pages/UsersList';

function Users() {
  const USERS = [
    {
      id: 'u1',
      name: 'Aiden Selman',
      image:
        'https://tse3.mm.bing.net/th?id=OIP.75QlW0c2G5fEK9flVvYknAHaLH&pid=Api&P=0',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
}

export default Users;
