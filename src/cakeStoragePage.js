import React from 'react';
import { /*Card, Button, CardContent,*/ ScrollArea } from './style.js';
import Item from './item';
import { motion } from 'framer-motion';

const cakeOptions = [

      {
        id: 5,
        name: 'Black Forest Cake',
        image: '/images/black_forrest.png',
        description: 'Chocolate sponge, whipped cream, and cherries',
        price: 900,
      },

      {
        id: 4,
        name: 'Vanilla Sponge Cake',
        image: '/images/vanilla.png',
        description: 'Smooth buttercream and rosette border',
        price: 900,
      },

      {
        id:1,
        name:'Red Velvet Cake',
        image:'/images/red.png',
        description:'Cream cheese frosting and red crumb topping',
        price:900
      },

      {
        id: 3,
        name: 'Carrot Cake',
        image: '/images/carrot.png',
        description: 'Cream cheese frosting with chopped walnuts',
        price: 900,
      },
    
      {
          id: 2,
          name: 'Lemon Drizzle Cake',
          image: '/images/lemon.png',
          description: 'Lemon curd, frosting, and zest curls',
          price: 900,
      },

      {
        id:7,
        name:'Strawberry Shortcake',
        image:'images/strawberry.png',
        description:'Whipped cream and fresh strawberries',
        price:900
      },
      {
        id: 5,
        name: 'Tiramisu Cake',
        image: '/images/tiramisu.png',
        description: 'Coffee-soaked sponge, mascarpone cream, and cocoa dusting',
        price: 900,
      },

      {
        id:6,
        name:'Chocolate Cake',
        image:'/images/chocolate.png',
        description:'Rich sponge with glossy ganache and piped swirls',
        price:900
      }
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
              style={{ padding: '1%' }}>
              <Item
                name={item.name}
                pic={item.image}
                desc={item.description}
                price={item.price}
                id={item.id} />
            </motion.div>
))}     </ScrollArea>
      </div>
    </div>
  );
};

export default CakeStorePage;