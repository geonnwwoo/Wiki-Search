# Project Structure

## Overview

There are four main folders inside of "src", which are: "assets", "colorscheme", "front", and "back". The main.js file equivalent in this project is src/index.cts, where all the BrowserWindows and ipc's are operated at. The "assets" folder is where all of the .png files and .svg files are stored, and the "colorscheme" folder is where all of the .json files for colorschemes are stored.

## Front

src/front is a folder for all of the frontend-related files to be stored at. Inside the folder, you can locate specific "pages" used in the project, such as the "home" page or the "library" page.

Some of the pages are Vue Single File Components and the project uses Vite JS to handle and compile them. Examples include the "library" page.

## Back

src/back is a folder for all of the backend-related files to be stored at. Inside the folder, there are backend files (mainly Javascript) that have specific export functions. These functions would be imported by the frontend files in the src/front folder for usage.

## Colorscheme

src/color is a folder for colorschemes used inside of the project. Inside, there will be a colorscheme.txt file with the file name of a colorscheme file.

Colorscheme files are .json file, and all of them have the same pattern. There would be a list of elements set to specific hex-colors for Javascript render files in src/front to read and render.