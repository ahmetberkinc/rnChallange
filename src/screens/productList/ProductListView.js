import React from 'react';
import {View, FlatList} from 'react-native';
import ProductItem from './components/ProductItem';
import SearchBar from './components/SearchBar';
import Sort from './components/Sort';
import Filter from './components/Filter';
import FavoriteList from './components/FavoriteList';
import EmptyFavList from '../favoriteList/components/EmptyFavList';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ProductListView = ({
  products,
  displayedProducts,
  onSearchTextInput,
  onFilterSelection,
  onSortSelection,
  favoriteScreen,
}) => {
  const insets = useSafeAreaInsets();

  const renderItem = ({item}) => {
    return <ProductItem productList={products} product={item} />;
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top / 4,
        paddingBottom: insets.bottom,
      }}>
      <SearchBar onSearchTextInput={value => onSearchTextInput(value)} />
      <View style={{flexDirection: 'row'}}>
        <Sort onSortSelection={(key, order) => onSortSelection(key, order)} />
        <Filter
          onFilterSelection={key => onFilterSelection(key)}
          products={products}
        />
        {!favoriteScreen && <FavoriteList />}
      </View>

      {favoriteScreen && displayedProducts.length === 0 ? (
        <EmptyFavList />
      ) : (
        <FlatList
          style={{
            marginHorizontal: 6,
          }}
          numColumns={2}
          data={displayedProducts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default ProductListView;
