import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const DUMMY_DATA = [
    {
      id: '1',
      price: 35,
      title: 'Functional programming in JS',
      description: 'Functional Programming in JavaScript. by L. Atencio',
    },
    {
      id: '2',
      price: 40,
      title: 'Refactoring a JavaScript',
      description: 'Refactoring a JavaScript by Martin Fowler',
    },
  ];

  const productList = DUMMY_DATA.map((product) => <ProductItem key={product.id} {...product} />);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productList}</ul>
    </section>
  );
};

export default Products;
