import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';

//  Screens
import GameListScreen from './app/components/Games/GameListScreen';
import GameBriefScreen from './app/components/Games/GameBriefScreen';
import QuizScreen from './app/components/Quizzes/QuizScreen';
import GameResultsScreen from './app/components/Games/GameResultsScreen';

class App extends Component {
  render() {
    return (
     <AppContainer/>
    );
  }
}

export default App;

const AppStackNavigator = createStackNavigator(
  {
    GameListScreen: { screen: GameListScreen },
    GameBriefScreen: { screen: GameBriefScreen },
    QuizScreen: { screen: QuizScreen },
    GameResultsScreen: { screen: GameResultsScreen },
  },
  {
    initialRouteName: 'GameListScreen',
  }
);

const AppContainer = createAppContainer(AppStackNavigator);


