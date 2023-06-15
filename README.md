# Color switch

There is an array of colors in hex format and buttons `Start` and `Stop`.

```html
<button type="button" data-action="start">Start</button>
<button type="button" data-action="stop">Stop</button>
```

```js
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
```

Write a script that, after pressing the `Start` button, changes
the background color of the `body` once a second to a random value from the array using an inline style. When the button
is clicked `Stop`, the background color change should stop.

> ⚠️ Keep in mind that the `Start` button can be pressed an infinite number of times. Do It
> > so that while the theme change is started, the 'Start` button is inactive.

To generate a random number (the index of an element of an array of colors), use
the `randomIntegerFromInterval` function.

```js
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
```
