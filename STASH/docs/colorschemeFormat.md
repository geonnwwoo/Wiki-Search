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
    "START-search-result-hover-speed":"100ms",
    "SEARCH-body":"#121212",
    "SEARCH-title-text-color": "#ffffff",
    "SEARCH-header-text-color":"#ffffff",
    "SEARCH-subheader-text-color":"#ffffff",
    "SEARCH-subsubheader-text-color":"#ffffff",
    "SEARCH-normal-text-color":"#ffffff",
    "ALL-menu-color":"#000000",
    "ALL-menu-text-color": "#b3b3b3",
    "ALL-menu-text-hover-color": "#ffffff",
    "ALL-menu-scrollbar-track": "#transparent",
    "ALL-menu-scrollbar-thumb": "transparent"
}
```

All of the elements below should be provided inside of the json file for the colorscheme to work properly:

"START-body" should be set to the color of the main screen in the starting page (home page).

"START-search-bar-input" should be set to the color of the search bar's input div.

"START-search-bar-enter" should be set to the color of the search bar's enter button color.

"START-search-bar-enter-hover" should be set to the color of the search bar's enter button color when hovered.

"START-search-result-text" should be set to the text color of the search results (after searching).

"START-search-result-hover" should be set to the color of a search result when hovered.

"START-search-result-hover-speed" should be set to the speed of the hover effect (of search result).

"SEARCH-body" should be set to the color of the search screen in the search page.

"SEARCH-title-text-color" should be set to the text color of the title of the article.

"SEARCH-header-text-color" should be set to the text color of the headers in the article.

"SEARCH-subheader-text-color" should be set to the text color of the subheaders in the article.

"SEARCH-subsubheader-text-color" should be set to the text color of the subsubheaders in the article.

"SEARCH-normal-text-color" should be set to the text color of the normal text in the article.

"ALL-menu-color" should be set to the background color for the menu bar (global).

"ALL-menu-text-color" should be set to the text color for the menu bar (global).

"ALL-menu-text-hover-color" should be set to the text color for the menu bar when hovered (global).

"ALL-menu-scrollbar-track" should be set the the color for the scrollbar track (global)

"ALL-menu-scrollbar-thumb" should be set the the color for the scrollbar thumb (global)