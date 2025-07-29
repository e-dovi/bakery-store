import React from 'react';
import { Card, CardContent, CardImage, CakeName, Button } from './style.js';
import { useDispatch } from 'react-redux';
import { addCakeToCart } from './reducers/cartSlice';

const Item = (props) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <CardImage src={props.pic} alt={props.name} />
      <CardContent>
        <CakeName>{props.name}</CakeName>
        <p className="text-gray-500 text-sm mb-2 text-center">{props.desc}</p>
        <span
  style={{
    backgroundColor: '#db2777', // vibrant pink
    color: '#fff',
    fontWeight: '600',
    fontSize: '1rem',
    padding: '0.3rem 0.75rem',
    borderRadius: '9999px',
    display: 'inline-block',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    marginTop: '0.5rem',
  }}
> ${props.price}
</span>
        <Button
          onClick={() => {
            const item = {
              name: props.name,
              id: props.id,
              price: props.price,
              qty: 1,
            };
             dispatch(addCakeToCart(item))
          }}
        >
         Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default Item;
