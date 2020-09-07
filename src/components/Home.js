import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className='home'>
            <img class="home__img" src='https://www.amazon.fr/images/G/08/kindle/journeys/NGU2YjIxODUt/NGU2YjIxODUt-YzFiNDFlNzAt-w1500._CB431878182_.jpg' alt='' />
            <div className='home__row'>
                <Product
                    id='121456'
                    title='Dvd La Manana'
                    price={11.96}
                    rating={5}
                    image='https://www.amazon.fr/images/I/51gOzumVZ1L._AC_SY200_.jpg' />
                <Product
                    id='121456'
                    title='Dvd La Manana'
                    price={11.96}
                    rating={5}
                    image='https://www.amazon.fr/images/I/51gOzumVZ1L._AC_SY200_.jpg' />
            </div>
            <div className='home__row'>
                <Product
                    id='121456'
                    title='Dvd La Manana'
                    price={11.96}
                    rating={5}
                    image='https://www.amazon.fr/images/I/51gOzumVZ1L._AC_SY200_.jpg' />
                <Product
                    id='121456'
                    title='Dvd La Manana'
                    price={11.96}
                    rating={5}
                    image='https://www.amazon.fr/images/I/51gOzumVZ1L._AC_SY200_.jpg' />
                <Product
                    id='121456'
                    title='Dvd La Manana'
                    price={11.96}
                    rating={5}
                    image='https://www.amazon.fr/images/I/51gOzumVZ1L._AC_SY200_.jpg' />
            </div>
            <div className='home__row'>
                <Product
                    id='121456'
                    title='Dvd La Manana'
                    price={11.96}
                    rating={5}
                    image='https://www.amazon.fr/images/I/51gOzumVZ1L._AC_SY200_.jpg' />

            </div>
        </div>)
}

export default Home
