// Navigation/Navigation.js
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import MainPage from '../Pages/MainPage'
import DetailsOeuvrePage from '../Pages/DetailsOeuvrePage'

const SearchStackNavigator = createStackNavigator({
  MainPage: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: MainPage,
    navigationOptions: {
      title: 'MainPage',
      headerShown: false,
    }
  },
  DetailsOeuvrePage: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: DetailsOeuvrePage,
    navigationOptions: {
      title: 'DetailsOeuvrePage',
      headerShown: false,
    }
  },
})

export default createAppContainer(SearchStackNavigator)