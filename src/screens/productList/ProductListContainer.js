import React, {useEffect, useState} from 'react';
import ProductListView from './ProductListView';
import {getProductList} from '../../services/productApi';

const ProductListContainer = () => {
  //Store non filtered products
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);

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

  //TODO: CHANGE SEARCH LOGIC
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
  function sortProducts(keyToSortBy) {
    setDisplayedProducts(
      [...displayedProducts].sort(function (a, b) {
        return a[keyToSortBy] - b[keyToSortBy];
      }),
    );
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
      onSortSelection={sortKey => sortProducts(sortKey)}
      onFilterSelection={filterKey => filterProducts(filterKey)}
    />
  );
};

export default ProductListContainer;
