import React, {useEffect, useState} from 'react';
import ProductListView from './ProductListView';
import {getProductList} from '../../services/productApi';

const ProductListContainer = () => {
  //Store non filtered products
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  //Meaning of this state is showing correct products after
  //Filter -> Select a Brand -> Sort -> Suggested flow

  useEffect(() => {
    getAllProducts();
  }, []);

  //Get all products when page is render
  function getAllProducts() {
    getProductList().then(result => {
      setProducts(result.products);
      setDisplayedProducts(result.products);
    });
  }

  //Display products with user input
  function onSearchTextInput(searchValue) {
    if (searchValue.length === 0) {
      getAllProducts();
    } else {
      setDisplayedProducts(
        products.filter(product => {
          return (
            product?.title.toLowerCase().includes(searchValue) ||
            product?.description.toLowerCase().includes(searchValue)
          );
        }),
      );
    }
  }

  //Sort products with user sort option
  function sortProducts(keyToSortBy, sortOrder) {
    if (keyToSortBy === 'default') {
      setDisplayedProducts(products);
    } else {
      setDisplayedProducts(
        [...displayedProducts].sort(function (a, b) {
          return sortOrder === 'Ascending'
            ? a[keyToSortBy] - b[keyToSortBy]
            : b[keyToSortBy] - a[keyToSortBy];
        }),
      );
    }
  }

  //Filter products with user brand filter option
  function filterProducts(keyToFilterBy) {
    if (keyToFilterBy === 'ALL') {
      setDisplayedProducts(products);
    } else {
      setDisplayedProducts(
        [...products].filter(product => {
          return product.brand === keyToFilterBy;
        }),
      );
    }
  }

  return (
    <ProductListView
      products={products}
      displayedProducts={displayedProducts}
      onSearchTextInput={searchValue => onSearchTextInput(searchValue)}
      onSortSelection={(sortKey, sortOrder) => sortProducts(sortKey, sortOrder)}
      onFilterSelection={filterKey => filterProducts(filterKey)}
    />
  );
};

export default ProductListContainer;
