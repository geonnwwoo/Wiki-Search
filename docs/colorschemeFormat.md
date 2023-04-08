# Format for Colorscheme Files

## Name of File

The name of the colorscheme's spaces should be replaced with "-" character. It must be labeled as a ".json" file.

## File Content

Example (Spotify.json):
```
{
    "START-body":"#121212",
    "START-search-bar-input":"#ffffff",
    "START-search-bar-enter":"#5864f2",
    "START-search-bar-enter-hover":"#4751c4",
    "START-search-result-text":"#ffffff",
    "START-search-result-hover":"#2a2929",
    "SEARCH-body":"#ffffff",
    "ALL-menu-color":"#000000",
    "ALL-menu-text-color": "#ffffff",
    "ALL-menu-scrollbar-track": "#transparent",
    "ALL-menu-scrollbar-thumb": "transparent"
}
```

All of the elements below should be provided inside of the json file for the colorscheme to work properly:

"START-body" should be set to the color of the main screen in the starting page (home page).
"START-search-bar-input" should be set to the color of the search bar's input div.
"START-search-bar-enter" should be set to the color of the search bar's enter button color.
"START-search-bar-enter-hover" should be set to the color of the search bar's enter button color when hovered.
"START-search-result-text" should be set to the text color of the search results (after searching)
"START-search-result-hover" should be set to the color of a search result when hovered.
"SEARCH-body" should be set to the color of the search screen in the search page.
"ALL-menu-color" should be set to the background color for the menu bar (global).
"ALL-menu-text-color" should be set to the text color for the menu bar (global).
"ALL-menu-scrollbar-track" should be set the the color for the scrollbar track (global)
"ALL-menu-scrollbar-thumb" should be set the the color for the scrollbar thumb (global)