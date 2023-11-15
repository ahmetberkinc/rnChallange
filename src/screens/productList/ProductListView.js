import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import ProductItem from './components/ProductItem';
import Constants from '../../constants';
import SearchBar from './components/SearchBar';
import Sort from './components/Sort';
import Filter from './components/Filter';
import FavoriteList from './components/FavoriteList';
import ColorPicker from './components/ColorPicker';

const ProductListView = ({
  products,
  displayedProducts,
  onSearchTextInput,
  onFilterSelection,
  onSortSelection,
}) => {
  const [colorPickerVisibility, setColorPickerVisibility] = useState(false);

  const renderItem = ({item}) => {
    return (
      <ProductItem
        setColorPickerVisibility={setColorPickerVisibility}
        product={item}
      />
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: Constants.SILVER}}>
      {colorPickerVisibility && (
        <ColorPicker setColorPickerVisibility={setColorPickerVisibility} />
      )}
      <SearchBar onSearchTextInput={value => onSearchTextInput(value)} />
      <View style={{flexDirection: 'row'}}>
        <Sort onSortSelection={key => onSortSelection(key)} />
        <Filter
          onFilterSelection={key => onFilterSelection(key)}
          products={products}
        />
        {/*TODO: Remove this at favoriteList Screen*/}
        <FavoriteList />
      </View>

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
      />
    </View>
  );
};

export default ProductListView;