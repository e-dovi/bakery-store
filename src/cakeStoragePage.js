import React from 'react';
import { /*Card, Button, CardContent,*/ ScrollArea } from './style.js';
import Item from './item';
import { motion } from 'framer-motion';

const cakeOptions = [
    
      {
        id:6,
        name:'Guava Coconut',
        image:'/images/guava_coconut.jpg',
        description:'✨Las rosas rojas son siempre una buena opción ✨🌹',
        price:900
      },

      {
        id: 4,
        name: 'Birthday Cake',
        image: '/images/bday.jpg',
        description: '✨Para una chica muy femenina, que ama las mariposas 🦋 y le encanta el pink 💓',
        price: 900,
      },

      {
        id:1,
        name:'Mothers Day',
        image:'/images/mother.jpg',
        description:'✨ De nuestra colección de madres 2022✨|Una librita llena de amor |🌹',
        price:900
      },

      {
        id: 3,
        name: 'Mothers Day',
        image: '/images/mothers.jpg',
        description: '✨El regalo perfecto para MaMá 💝 ',
        price: 900,
      },
    
      {
          id: 2,
          name: 'Gender Reveal',
          image: '/images/gender.jpg',
          description: 'It’s a girl! 🎀',
          price: 900,
      },

      {
        id: 5,
        name: 'Fruit Theme',
        image: '/images/orange.jpg', // ✅ Correct
        description: '🍊✨',
        price: 900,
      },

      {
          id:7,
          name:'Safari',
          image:'images/safari.jpg',
          description:'SAFARI 🦁🐵🦒🌿',
          price:900
      },
      {
        id: 5,
        name: 'Sonic',
        image: '/images/sonic.jpg', // ✅ Correct
        description: 'S O N I C 💫💫',
        price: 900,
      },
];


export const CakeStorePage = () => {

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h1 className="text-3xl font-bold mb-4">🎂 Browse Cakes</h1>
        <ScrollArea className="h-[500px] pr-4" style={{ width: '100%', boxSizing: 'border-box' }}>
{cakeOptions.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    style={{ padding: '1%' }}
  >
    <Item
      name={item.name}
      pic={item.image}
      desc={item.description}
      price={item.price}
      id={item.id}
    />
  </motion.div>
))}        </ScrollArea>
      </div>
    </div>
  );
};

export default CakeStorePage;