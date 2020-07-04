import React from 'react';

import { useCart } from '../../hooks/cart';

import formatPrice from '../../utils/formatPrice';

import { Container, PokemonList, FinishSection } from './styles';

const Cart: React.FC = () => {
  const { pokemonList, total } = useCart();

  return (
    <Container>
      <PokemonList>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id}>
            <img src={pokemon.imageURL} alt={pokemon.name} />
            <p>{pokemon.name}</p>

            <div>
              <button type="button">-</button>
              <span>{pokemon.amount}</span>
              <button type="button">+</button>
            </div>
          </li>
        ))}
      </PokemonList>

      <FinishSection>
        <p>
          total
          <strong>{formatPrice(total)}</strong>
        </p>

        <button type="button">checkout</button>
      </FinishSection>
    </Container>
  );
};

export default Cart;