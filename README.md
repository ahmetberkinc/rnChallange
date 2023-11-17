# React Native Challange

## Description

The application allows users to browse and interact with a dynamic product list fetched from a dummy API. The application includes advanced features such as sorting, filtering, searching, favoriting, and detailed product information.
It was implemented using the Container/View pattern. It is basically consists of 3 screens (ProductList, FavoriteList, ProductDetail). Each screen contains its own subcomponents.

## Getting Started

### Dependencies

* @react-navigation/native
* @react-navigation/native-stack
* react-native-bootsplash
* react-native-fast-image
* react-native-safe-area-context
* react-native-screens
* react-native-toast-message
* react-native-vector-icons
* react-native-wheel-color-picker

### Key Decisions
* react-native-bootsplash library was preferred for splash screen implementation.
* react-navigation was used for navigation operations within the application.
* react-native-fast-image library was used to contribute to performance for all images shown.
* In order to ensure offline use of the application, the internet connection was checked with the @react-native-community/netinfo library and the necessary navigation operations were carried out.
* In order for the user to dynamically select the color of the heart emoji, the react-native-wheel-color-picker library was used and the variable was kept with useContext. In addition, the tooltip on how the user can change the color after adding a favorite in the application is shown with the react-native-toast-message library.
* Logo, AppIcon and AppName that are appropriate for the application have been preferred.
* Large lists are rendered with flatList to contribute to performance.
* react-native-vector-icons library was used for the icons in the application.
* The products added to the favorites were stored using the @react-native-async-storage/async-storage library and made available for offline use. Favorite products can be updated using the addFavProduct, removeFavProduct, getFavProducts and checkProductIsFav methods.
* On the favorite list screen, useContext was used to ensure that the products removed from the favorites disappeared from the list, and the getFavProducts request was made and the data to be rendered was updated.
* In order for the products removed from the favorites to disappear directly from the list on the favorite list screen, the getFavProducts request was made with useContext and the data to be rendered was updated.
* Sort => It consists of 5 options: Recommended (order via API), ascending and descending by price, ascending and descending by score.
* Filter => It allows the user to make a selection by finding the brands among the products displayed.
* In both options, the clear option has been added to clear the preference.
* Filter and Sort designs were implemented using Modal.
* Details of the product are shown on the detail screen and it is possible to navigate to the previous and next item. The data is shown as an infinite structure in the first and last item cases.
* A rendering was made that informs the user when there is no product on the favorite list screen and shows how to add a favorite product.


### Installation & Usage

```
// Clone repository
$ git clone https://github.com/ahmetberkinc/rnChallange.git


// Go into the repository
$ cd rnChallange


// Install dependencies
$ npm install


// Install iOS dependencies
$ cd ios && pod install && cd ..


// Run app for Android
# using npm
$ npm run android

# OR using Yarn
$ yarn android


// Run app for IOS
# using npm
$ npm run ios

# OR using Yarn
$ yarn ios


```
