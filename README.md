<h1  align="center">Challange Front - Vinicius Gasparello ✨</h1>


##  About this project

This project was developed together with the backend challenge, to consume the challenge's API.

In this project we will see routing of a main page and a login page, using the latest version of NextJs technology

## Requirements

- Node.js 16.8 or later.
- npm 8.1.2 or later.

## How to run

1. Install dependencies:

	`npm install` or 'yarn install'

2. Start the project:

   `npm run start` or 'yarn start'

## Page Summary
- `/` <em style="color:purple;"> Main page after login, where available courses will be listed.</em>
- `/login` <em style="color:purple;"> Login page if you don't have an authenticated user saved in the cookie or cache.</em>

## Custom Components

###  Button

 A versatile button with custom properties

- `handleClick:` <em style="color:purple;">function</em> 
- `label:` <em style="color:purple;">string</em> <label> -> The text inside the button</label>
- `width?:` <em style="color:purple;">string</em>
- `height?:` <em style="color:purple;">string</em> 
- `className?:` <em style="color:purple;">string</em>
- `icon?:` <em style="color:purple;">string</em> <label> -> A raw SVG or Image component</label>
- `iconDirection?:` <em style="color:purple;">"left" | "right"</em> <label> -> Icon direction relative to text</label>
- `theme:` <em style="color:purple;">"primary" | "secundary" | "outline" | "disabled" | "load"</em> <label> -> Presets styles buttons themes</label>

###  Select

 A versatile SELECT component with custom properties

- `options:` <em style="color:purple;">string[]</em> <label> -> options available in select.</label>
- `renderIcon?:` <em style="color:purple;">boolean</em> <label> -> Shows a ornament icon into select box.</label>
- `width?:` <em style="color:purple;">string</em>
- `boxUp?:` <em style="color:purple;">boolean</em> <label> -> indicate if box with the options will render to up. To bottom is default.</label>


### Svgs Components

 Svgs transformed into jsx components for customizing and dynamicizing properties.

All svg components are given classname and color properties by default for customization anywhere

- `className?:` <em style="color:purple;">string</em>
- `color?:` <em style="color:purple;">string</em>

The chevron (arrow) svg has an extra property indicating the direction the arrow will point to, using the css transform rotate tool

- `direction?:` <em style="color:purple;">"bottom" | "top"</em> <label> -> "top" is default</label>

### Toast

 A toast callback component indicating success or error. If not closed manually, a 10 second timer will close by itself.

- `status:` <em style="color:purple;">boolean</em> <label> -> Indicate what theme will render, red to error and green to success</label>
- `title:` <em style="color:purple;">string</em>
- `description:` <em style="color:purple;">string</em>
- `handleClose:` <em style="color:purple;">callback function</em> <label> -> Use to close toast.</label>


## Technologies

###  External libraries

 - Tailwind
 - SASS
 - Next

  
