import React, { useMemo } from 'react';

import { useCart } from '../../hooks/cart';

import formatPrice from '../../utils/formatPrice';

import { Container } from './styles';

interface PokeCardProps {
  id: string;
  name: string;
  price: number;
  types: Array<{
    type: {
      url: string;
      name: string;
    };
  }>;
}

const PokeCard: React.FC<PokeCardProps> = ({ id, name, price, types }) => {
  const { addOnCart } = useCart();

  const imageURL = useMemo(
    () => `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
    [id],
  );

  function handleAddOnCart(): void {
    addOnCart({
      id,
      name,
      imageURL,
      amount: 1,
      price,
    });
  }

  return (
    <Container>
      <img src={imageURL} alt={name} />
      <h1>{name}</h1>
      <ul>
        {types.map(({ type }) => (
          <li key={type.url}>{type.name}</li>
        ))}
      </ul>

      <div>
        <strong>{formatPrice(price)}</strong>
        <button type="button" onClick={handleAddOnCart}>
          Add to Cart
        </button>
      </div>
    </Container>
  );
};

export default React.memo(PokeCard);
