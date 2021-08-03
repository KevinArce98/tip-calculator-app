# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/reactjs-using-scss-and-tailwind-IJ7iUc1BH)
- Live Site URL: [Demo](https://kevinarce98.github.io/tip-calculator-app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [SASS](https://sass-lang.com/) - CSS preprocessor
- [Tailwind](https://tailwindcss.com/) - CSS framework

### What I learned

I learned about tailwind and differents classes that it has.
Also I used context of React.

```js
import { createContext, useState } from 'react';

const initialValue = { bill: '', tipPercentage: { isCustom: false, value: '' }, people: ''  };
export const DataContext = createContext(initialValue);

export const DataContextProvider = ({ children }) => {
    const [state, setState] = useState(initialValue)
    return (
        <DataContext.Provider value={{ data: state, changeData: setState }}>
            {children}
        </DataContext.Provider>
    )
}
```

## Author
- Frontend Mentor - [@KevinArce98](https://www.frontendmentor.io/profile/KevinArce98)
- Linkedin - [@KevinArce98](https://www.linkedin.com/in/kevinarce98/)
- Twitter - [@KevinArce981](https://twitter.com/KevinArce981)