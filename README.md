# Debugging with Chrome DevTools and Cursor

This project is designed as a lesson on debugging web applications using Chrome DevTools and Cursor.

## Setup

1. Navigate to the client directory
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open the application in your browser

## Debugging Exercises

### 1. Console Logging Methods

The application includes three buttons that demonstrate different console logging methods:

- **Log Info**: Uses `console.log()` to output standard information
- **Log Warning**: Uses `console.warn()` to output warning messages (highlighted in yellow)
- **Log Error**: Uses `console.error()` to output error messages (highlighted in red)

**Exercise**:

- Open Chrome DevTools (F12 or Right-click > Inspect)
- Navigate to the Console tab
- Click each button and observe the different types of log messages
- Try filtering the console by log level

### 2. Layout Debugging

There's a layout issue in the application where the debugging buttons appear too high and overlap with other content when in "wonky" mode.

**Problem**:
The buttons have a negative top margin (`margin: -70px 0 0 0`) in the CSS when in "wonky" mode, causing them to overlap with the content above.

**Interactive Demo**:
The application starts with a good layout and includes a prominent toggle button that switches between "wonky" and "good" layouts:

- **Layout Status Indicator**: Shows the current state of the layout (WONKY or GOOD)
- **Fix Layout Button**: A purple button with a pointer emoji that fixes the layout issue
- **Make Layout Wonky Button**: A green button that introduces the layout issue

**Exercise**:

1. Click the "Make Layout Wonky" button to see the layout issue
2. Use the Elements panel in Chrome DevTools to inspect the `.debug-buttons` element
3. Observe how the CSS class changes between `.wonky` and `.good`
4. See how the margin property changes in the Styles panel
5. Understand how the negative margin affects the layout in "wonky" mode
6. Click "Fix Layout" to restore the good layout

**Code Exploration**:
Examine how the toggle is implemented:

1. React state (`isWonkyLayout`) controls which CSS class is applied
2. CSS classes `.wonky` and `.good` define different margin values
3. The toggle button changes the state and logs the change to the console

**Solution**:
The CSS defines two different classes:

```css
/* Wonky layout with negative margin */
.debug-buttons.wonky {
  margin: -70px 0 0 0;
}

/* Good layout with positive margin */
.debug-buttons.good {
  margin: 20px 0 0 0;
}
```

## Additional Debugging Tips

1. **Breakpoints**: Set breakpoints in the Sources panel to pause execution and inspect variables
2. **Network Tab**: Monitor network requests and responses
3. **Performance Tab**: Analyze rendering performance
4. **Application Tab**: Inspect storage (localStorage, cookies, etc.)
5. **Cursor Integration**: Use Cursor's built-in debugging tools alongside Chrome DevTools

Happy debugging!
