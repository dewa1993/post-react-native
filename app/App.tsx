import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './features/navigation/navigator';
import { Provider } from 'react-redux';
import config from './config';

const App = (): JSX.Element => {
    return (
        <Provider store={config.store}>
            <NavigationContainer>
                <RootNavigation />
            </NavigationContainer>
        </Provider>
    )
}

export default App;
