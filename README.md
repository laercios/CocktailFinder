# CocktailFinder 🍸

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

Description:

CocktailFinder is a small project in order to search some drinks.

The environment and some libraries that was used in order to develop this project:

- MacOS: 11.3 (BigSur, latest)
- Xcode: 12.5 (iOS 14.5, latest)
- React-Native: 0.64 (latest)
- React-Navigation: 5.9.4

How run this project ?

Run this commands:

1. "yarn install" (or just "yarn")
2. "cd ios && pod install && cd .."
3. "yarn ios" (in order to run iOS)
4. "yarn android (in order to run Android)

Folder structure:

```
.
├── App.js
├── Router.js -> React-Navigation Settings is here
├── app.json -> App name
├── common
│   ├── Colors.js -> This file is the reference of all colors in this app
│   ├── Constants.js -> API_URL is here
│   └── index.js
├── components
│   ├── DrinkItem -> This component is used to build the drink list
│   │   ├── DrinkItem.js
│   │   ├── index.js
│   │   └── styles.js
│   ├── Header -> This component has search field
│   │   ├── Header.js
│   │   ├── index.js
│   │   └── styles.js
│   ├── WelcomeButton -> This component is used in WelcomeScreen
│   │   ├── WelcomeButton.js
│   │   ├── index.js
│   │   └── styles.js
│   └── WelcomeLogo -> This component is used in WelcomeScreen
│       ├── WelcomeLogo.js
│       ├── index.js
│       └── styles.js
├── redux
│   ├── actions
│   │   ├── GetDrinksActions.js -> To Fetch drink list through API 
│   │   ├── ResetDrinksActions.js -> To clean drink list
│   │   ├── index.js
│   │   └── types.js -> This file is reference of all types
│   └── reducers
│       ├── DrinksReducer.js
│       └── index.js
└── screens
    ├── SearchList -> This is wireframe 2
    │   ├── SearchList.js
    │   ├── index.js
    │   └── styles.js
    └── Welcome -> This is wireframe 1
        ├── Welcome.js
        ├── index.js
        └── styles.js
```

# Screenshots

<img src="https://github.com/laercios/CocktailFinder/raw/main/screenshot/Screen_Shot_1.png" alt="Screenshot 1" height="800">
<img src="https://github.com/laercios/CocktailFinder/raw/main/screenshot/Screen_Shot_2.png" alt="Screenshot 2" height="800">
<img src="https://github.com/laercios/CocktailFinder/raw/main/screenshot/Screen_Shot_3.png" alt="Screenshot 3" height="800">
