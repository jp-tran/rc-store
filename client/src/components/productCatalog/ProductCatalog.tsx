import * as React from 'react';

import { makeStyles } from '@material-ui/core';

import ProductCard, { ProductCardProps } from './ProductCard';
import FeaturedProduct from './FeaturedProduct';

const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: '4fr 2fr',
    gridTemplateAreas: `
    "product1 product2"
    "product1 product3"
    "catalog catalog"
    `,
    placeItems: 'center center',
    background: 'white',
  },
  product1: {
    gridArea: 'product1',
    background: 'red',
  },
  product2: {
    gridArea: 'product2',
    background: 'blue',
  },
  product3: {
    gridArea: 'product3',
    background: 'yellow',
  },
  container: {
    gridArea: 'catalog',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export interface ProductCatalogProps {
  productList: ProductCardProps[];
}

const ProductCatalog: React.FunctionComponent<ProductCatalogProps> = (
  props
) => {
  const { productList } = props;
  const classes = useStyles();

  interface FeaturedProductAndStyle {
    productProps: ProductCardProps;
    style: string;
  }

  // Get top 3 products and corresponding style
  const featuredProducts: FeaturedProductAndStyle[] = [
    { productProps: productList[0], style: classes.product1 },
    { productProps: productList[1], style: classes.product2 },
    { productProps: productList[2], style: classes.product3 },
  ];
  return (
    <div className={classes.grid}>
      {featuredProducts.map(({ productProps, style }) => {
        return (
          <div className={style}>
            <FeaturedProduct
              productName={productProps.productName}
              imageSrc={productProps.imageSrc}
            />
          </div>
        );
      })}
      <div className={classes.container}>
        {productList.map((productProps) => {
          const {
            productId,
            productName,
            imageSrc,
            description,
          } = productProps;

          return (
            <ProductCard
              productId={productId}
              productName={productName}
              imageSrc={imageSrc}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductCatalog;
