# React Test Task

## Implemented:

### Fetching

- Fetching tickers with socket.io, saving in Redux store, localStorage;
- Saving prev tickers in order to сompare and calculate difference;

### Markering of growth and drop

- growth: green color, drop: red color;

### Theme

- lite/dark theme for eye's comfort in any time of the day;

### Toolbar

- Mark/Cancel button: Mark button is default, Cancel button is on, when select mode is on;
- Delete button: hidden by default, appears when select mode is on but with "disabled" attribute. And become abled when there is at least 1 selected ticker;
- Stop/Play button: Stop is default. After pushing it the Play button replaces the Stop button;

### Select mode

- This mode allows you to select tickers as many as you want. Instead to try to click straight the checkbox, you can also click in any zone of <li> item to select it;

### Deleting

- In order to delete any tickers, firstable you should select the tickers and than delete button will abled.

### Trash

- Trash folder will appear when at least one ticker will be deleted
- Trash folder opens in modal window (as pop-up). There you can view deleted tickers and restore all.

### Stop/play tickers

- This button allows you to stop and play tickers;

### Saving data to localStorage

- Theme, tickers, deleted tickers saves to localStorage by every changing;
- Selecting mode is not saving in localStorage;

### Adaptive/Responsive

-well adapted for different devices: from small smartphone with 360px of viewport-width (such as Sumsung s10e) to Retina displays 3000px+ (MacBook Pro 16)

## Not implemented:

### Testing

- Need more time to learn it, sorry, I've never did it. I've already started, but it will pay more time than I expected, need mentoring.

### Specifing interval time by user

- I really can implement it, but don't think that this possibility is very important for user. I will leave it for the end after successful testing implementation.
