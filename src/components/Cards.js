import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Les Joueurs n'attendent que vous</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/League.jpg'
              text="Affrontez vous dans la Faille de l'Invocateur"
              label='Moba - Leaugue Of Legends'
              path='/Tournoi'
            />
            <CardItem
              src='images/Tekken.jpg'
              text='Tout le monde a une raison de se battre.'
              label='Combat - Tekken 7'
              path='/Tournoi'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/rocket.jpg'
              text=" Le terrain vous attend. Tirez votre coup d'envoi !"
              label='Sport - Rocket League'
              path='/Tournoi'
            />
            <CardItem
              src='images/Overwatch.jpeg'
              text='Overwatch, chaque héros dispose d’un ensemble unique de capacités destructrices.'
              label='FPS - Overwatch'
              path='/Tournoi'
            />
            <CardItem
              src='images/csgo.jpg'
              text='La gachêtte la plus rapide gagne'
              label='FPS - CSGO'
              path='/Tournoi'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;