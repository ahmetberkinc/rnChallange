import React from 'react';
import {View, FlatList} from 'react-native';
import ProductItem from './components/ProductItem';
import Constants from '../../constants';
import SearchBar from './components/SearchBar';
import Sort from './components/Sort';
import Filter from './components/Filter';

const ProductListView = ({
  products,
  displayedProducts,
  onSearchTextInput,
  onFilterSelection,
  onSortSelection,
}) => {
  const renderItem = ({item}) => {
    return <ProductItem product={item} />;
  };

  return (
    <View style={{flex: 1, backgroundColor: Constants.SILVER}}>
      <SearchBar onSearchTextInput={value => onSearchTextInput(value)} />
      <View style={{flexDirection: 'row'}}>
        <Sort onSortSelection={key => onSortSelection(key)} />
        <Filter
          onFilterSelection={key => onFilterSelection(key)}
          products={products}
        />
      </View>
      <FlatList
        style={{
          marginHorizontal: 8,
        }}
        numColumns={2}
        data={displayedProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      />
    </View>
  );
};

export default ProductListView;
