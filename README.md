# spinner-react-native

A lightweight and customizable spinner component for React Native applications. This package provides an easy way to add loading indicators to your app.

![Custom Spinner Example](https://i.postimg.cc/4yLH4C0Y/one.png)
![Custom Spinner Example](https://i.postimg.cc/L6V8PQVJ/twoo.gif)




```npm
# using npm
npm i @naly_moslih/spinner-react-native
```

```yarn
# using yarn
yarn add @naly_moslih/spinner-react-native
```



## Installation
```
yarn add d3-shape
yarn add lodash
yarn add react-native-confetti-cannon
yarn add react-native-modal
yarn add react-native-svg
```

## Usage

```js
import Spinner from '@naly_moslih/spinner-react-native';


// ...

const App = () => {
  return (
    <View>
       <Spinner
        knobSize={50}
        duration={4000}
        backgroundColor={'transparent'}
        knobSource={require('./image/example.png')}
        getWinner={(value, index) => { 
          console.log(value,index);
        }}
        rewards={[
          'jonathan',
          'joseph',
          'jotaro',
          'josuke',
          'giorno',
          'jolyne',
        ]}
        colors={[
          '#E07026',
          '#E8C22E',
          '#ABC937',
          '#4F991D',
          '#22AFD3',
          '#5858D0',
          '#7B48C8',
          '#D843B9',
          '#E23B80',
          '#D82B2B',
        ]}
        />
    </View>
  );
};
```

# spinner
