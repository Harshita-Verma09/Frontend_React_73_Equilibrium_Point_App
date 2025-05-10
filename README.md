# Equilibrium Index Finder

This is a simple React application that allows you to find the equilibrium index of an array of numbers. An equilibrium index is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

## How to Use

1.  **Enter the array:** In the input field, enter a comma-separated list of numbers. For example: `1,2,0,3`.
2.  **Click "Find Index":** Press the "Find Index" button to calculate the equilibrium index.
3.  **View the result:** The application will display either the equilibrium index if found, or a message indicating that no equilibrium index exists. It will also show an error message if the input is invalid.

## How it Works

The application uses the following logic to find the equilibrium index:

1.  **Calculate the total sum:** It first calculates the sum of all elements in the input array.
2.  **Iterate through the array:** It then iterates through the array, keeping track of the sum of elements to the left of the current index (`leftSum`).
3.  **Calculate the right sum:** For each index, the sum of elements to the right (`totalSum - currentElement`) is calculated.
4.  **Check for equilibrium:** If `leftSum` is equal to the `rightSum`, the current index is the equilibrium index.
5.  **Update sums:** In each iteration, the current element is added to `leftSum`, and it's subtracted from `totalSum`.
6.  **Return the index:** If an equilibrium index is found, its value is returned. If the loop completes without finding an equilibrium index, -1 is returned.

## Running Locally

To run this application on your local machine, you need to have Node.js and npm (or yarn) installed.

1.  **Clone the repository (if applicable):** If you have the code in a repository, clone it to your local machine.
2.  **Navigate to the project directory:** Open your terminal or command prompt and navigate to the project folder.
3.  **Install dependencies:** Run the command `npm install` or `yarn install` to install the necessary packages.
4.  **Start the application:** Run the command `npm start` or `yarn start` to start the development server.
5.  **Open in your browser:** The application will usually open automatically in your browser at a specified address (e.g., `http://localhost:3000`).

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **useState:** A React Hook for managing component state.
* **Tailwind CSS:** A utility-first CSS framework for styling the application.

## Example

**Input:** `1,2,0,3`

* For index 0: `leftSum` = 0, `rightSum` = 2 + 0 + 3 = 5 (Not equal)
* For index 1: `leftSum` = 1, `rightSum` = 0 + 3 = 3 (Not equal)
* For index 2: `leftSum` = 1 + 2 = 3, `rightSum` = 3 (Equal! Equilibrium index is 2)
* For index 3: `leftSum` = 1 + 2 + 0 = 3, `rightSum` = 0 (Not equal)

**Output:** `Equilibrium Index Found at: 2`

**Input:** `-1, 3, -4, 5, 1, -6, 2, 1`

**Output:** `Equilibrium Index Found at: 1`

**Input:** `1, 2, 3`

**Output:** `No Equilibrium Index Found.`
