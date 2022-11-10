# My Portfolio by Varun Anand Patkar

## Introduction

This is a 3D Portfolio made by and for Mr. Varun Anand Patkar using Blender, ViteJS, 3JS, GSAP and ScrollTrigger Plugin.

- Blender is used for Modeling the different objects in the scene. The Gmail Model has been downloaded from Sketchfab. The rest are handmodeled using primitive shapes in Blender.
- ViteJS is used for fast setup and providing live server service for development.
- 3JS is used for all 3D display of the objects.
- GSAP is used for animating the camera and switching colors and intensities od the lights in the Theme Switcher. It is also used to animate the ficker of the Lamp Light when switching to Dark Mode.
- The ScrollTrigger Plugin of GSAP is used to achieve scrubbing with scrolling and allowing smooth animations with the mousewheel.

I am following an 8 hr tutorial by Andrew Woan where he recreated an Awwwards Website. He has requested that we do not take the exact idea of the creator. That's why I have tried to do something different every step of the way and I plan to add a virtual terminal or some interactive HTML element when the camera pans over to the computer screen which will give my project some unique value.

## Current Features

- A 3D Model takes centre stage of a room with different elements.
- The camera pans around to different stuff in the room and focuses on them according to the content with the scrollwheel as the controller
- There is a Light and Dark Mode toggle which will turn the lights on and off and in the Dark Mode a lamp will flicker on with a delay.
- The Model rotates as the mouse goes left and right so we can get a feel of the 3D world.
- A video plays on the Computer Screen on a loop.

## Deployment

Deployed via Vercel.com : [Deployment](https://varun-patkar-portfolio.vercel.app/)

## Installation and How to run it on your Machine

1. Clone it to your machine by running the command on a terminal.

`git clone https://github.com/Varun-Patkar/VarunPatkarPortfolio.git`

2. Ensure that you have `node` and `npm` installed. If not you can follow [the docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install it.

3. Navigate to the folder that is just created using the following command.

`cd VarunPatkarPortfolio`

4. Run the following command to install all the dependencies.

`npm install`

5. To open it up on the development server run the followinf command and open the link provided by the terminal.

`npm run dev`

6. To build just run the following command. This will put it in the `dist` folder.

`npm run build`

## Resources used

1. [Tutorial Followed](https://www.youtube.com/watch?v=rxTb9ys834w)
2. [Awwwards Website Recreated in Above Tutorial]()
3. [Gmail Icon Model taken from Sketchfab](https://sketchfab.com/3d-models/3d-icons-email-dfe7298e6c4f4a0385fc2b42104ddaa4)
