import React from 'react';
import { /*Card, Button, CardContent,*/ ScrollArea } from './style.js';
import Item from './item';
import { motion } from 'framer-motion';

const cakeOptions = [
    
      {
        id:6,
        name:'Graduation Cake',
        image:'/images/guava_coconut.jpg',
        description:'Floral theme graduation cake, with bees and birds decoration.',
        price:900
      },

      {
        id: 4,
        name: 'Birthday Cake',
        image: '/images/bday.jpg',
        description: '3 layer half vanilla/ half chocolate cake with vanilla buttercream and vanilla drip.',
        price: 900,
      },

      {
        id:1,
        name:'Tropical Theme',
        image:'/images/mothers.jpg',
        description:'Fondant decor, buttercream cake with base cake having edible wafer paper.',
        price:900
      },

      {
        id: 3,
        name: 'Construction Theme',
        image: '/images/mother.jpg',
        description: '3 layers of 6” funfetti cake, vanilla buttercream and white chocolate drip',
        price: 900,
      },
    
      {
          id: 2,
          name: 'Birthday Cake',
          image: '/images/gender.jpg',
          description: 'Two Fast!',
          price: 900,
      },

      {
        id: 5,
        name: 'Orange',
        image: '/images/orange.jpg', // ✅ Correct
        description: 'Chocolate cake, chocolate buttercream, with chocolate ganache drip and a variety of chocolate candy and sprinkles.',
        price: 900,
      },

      {
          id:7,
          name:'Scrap Metal',
          image:'images/safari.jpg',
          description:'Fondant dusted with silver luster dust and copper luster dust to give a rusted look.',
          price:900
      },
      {
        id: 5,
        name: 'Orange',
        image: '/images/sonic.jpg', // ✅ Correct
        description: 'Chocolate cake, chocolate buttercream, with chocolate ganache drip and a variety of chocolate candy and sprinkles.',
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