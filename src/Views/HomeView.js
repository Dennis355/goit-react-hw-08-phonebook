import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh-50px)',
    display: 'flex',
    alingItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};
const HomeView = () => (
    <div style= {styles.container}>
        <h1  style= {styles.title}>
            Преведственная страница нашего сервиса

        </h1>

    </div>
);
export default HomeView;

