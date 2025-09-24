more info and more projects: https://fizagameengines.blogspot.com/

# Game of Life (JavaScript Console Implementation)

This repository contains a simple implementation of Conway's Game of Life in JavaScript, running in the terminal/console.

## Overview

Conway's Game of Life is a cellular automaton devised by mathematician John Conway. This program simulates the evolution of a grid of cells, each of which can be alive or dead. The state of each cell in the next generation is determined by the states of its eight neighbors according to a simple set of rules.

This implementation uses:
- A `Cell` class to represent each cell and its neighbors
- A 2D array grid of customizable size
- Random initialization of the grid
- Console output to display the state of the grid on each evolution step

## Features

- Adjustable grid size (`width` and `height` variables)
- Randomly seeded initial state
- Runs as an infinite loop, updating the grid in the console
- Displays the proportion of alive cells in each generation

## How to Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ivanzamoraarias/gameOfLife.git
   cd gameOfLife
   ```

2. **Run the script with Node.js:**
   ```bash
   node gameOfLife.js
   ```

   The program will display the evolving grid in your terminal. Alive cells are shown as `*`, dead cells as `_`.

## Game Rules

For each cell:
- **Survival:** An alive cell with 2 or 3 alive neighbors stays alive.
- **Death:** An alive cell with fewer than 2 or more than 3 alive neighbors dies.
- **Birth:** A dead cell with exactly 3 alive neighbors becomes alive.

## Customization

- Modify `width` and `height` at the top of `gameOfLife.js` to change the grid size.
- Adjust the probability in `getRandomLife()` to make the initial grid more or less populated.

## Example Output

```
 * _ _ * * _ _ _ * _ * _ _ * ...
 _ * _ _ _ * _ _ _ * _ _ _ * ...
...
===========================
0.17
===========================
```

## License

This project is licensed under the MIT License.

---

Made by [ivanzamoraarias](https://github.com/ivanzamoraarias)


<img width="1754" alt="image" src="https://github.com/ivanzamoraarias/gameOfLife/assets/30245989/2b85f438-3bfb-445e-b9ae-38f49f91f7ee">
<img width="1741" alt="image" src="https://github.com/ivanzamoraarias/gameOfLife/assets/30245989/c8fa5166-64d4-44c8-89f0-9f04caa50371">
<img width="1702" alt="image" src="https://github.com/ivanzamoraarias/gameOfLife/assets/30245989/0ee3534a-a79a-45b2-965b-971bfc12ffb8">
