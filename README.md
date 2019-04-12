# react-dice-thrower
> A react component allowing you to render a dice on the screen with which the user can interact.

[![NPM Version][npm-image]](https://www.npmjs.com/package/react-dice-roller)

## Install - NPM

```bash
npm i react-dice-thrower
```

## Install - Yarn

```bash
yarn add react-dice-thrower
```


## Usage

Adding a dice to your page is pretty easy, just import it and define the number of sides.

```js
import ReactDice from 'react-dice-thrower';

<ReactDice size={20} /> 
<ReactDice size={12} />
<ReactDice size={10} />
<ReactDice size={8} />
<ReactDice size={6} />
<ReactDice size={4} />
```

### Customize

You can customize several feature of the dice.

#### Progress bar
*Default: false*

You can render a progress bar on the top of the dice, by setting the property `showProgress` to true.

```js
<ReactDice size={6} showProgress  />
```
You can also customize the styling of this progress bar, by passing a class to the property `progressClassName`. Be aware, the width is set programmaticaly, so you should not define it in the class.

#### Roll duration
*Default: 2 (seconds)*

You can change the time the roll needs to finish, by setting the `` property. This value is in seconds and animates several cycles that start of fast and slowly end in the final value in the time set here.

```js
<ReactDice size={6} rollSeconds={3}  />
```

### Styling

There is a default styling rendering a black and white dice with a gray and white overlay. Which you can customize any way you want, by passing in the following classes:

`diceClassName`
This styles the dice itself, the container div.

`overlayClassName`
This styles the overlay which shows the 'Roll' message.

`progressClassName`
This styles the progress bar.

```js
<ReactDice 
  size={6} 
  diceClassName='myCustomDiceClass'
  overlayClassName='myCustomOverlayClass'
  progressClassName='myCustomProgressClass'
/>
```

## Running and building

The component is located in the `react-dice` folder, you can build it by running the command `npm build` in the corresponding folder.

In the root you will find a simple page setup with ParcelJS which renders with two versions of the dice component on there. One is the local component imported, so you can change it while developing. The other is the latest version that is published to npm. You can run the page with the command `npm start` and the page can be located in your browser at `http://localhost:1234`. 

## License

[MIT](http://vjpr.mit-license.org)
