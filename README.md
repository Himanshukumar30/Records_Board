# Records Board

## Description

The project displays a Head to head records board for Teams demonstrating number of wins and losses.

## Getting Started

### Dependencies

- None

# Table of contents

- [Records Board](#Records-board)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Solution Development](#development)
- [Contribute](#contribute)
- [Footer](#footer)

# Installation

To use this project, first clone the repo on your device using the command below:

`git init`

`git clone https://github.com/Himanshukumar30/Weather-Journal-App.git`

[(Back to top)](#table-of-contents)

# Solution Development

- The project is developed by first getting the data from JSON file [data.JSON]. We have used fetch and await to get the data from JSON here.
- Now we need something to store team names so that we can iterate over them to fill our headings. Here, we have used an empty array 'teams' and then pushed the data from JSON using for loop.
- Its time to start with the board which will be a 2-dimensional array. we have an empty array 'board' to create array of rows, each row is array of cells (board[y][x])
- 'HEIGHT' AND 'WIDTH' decide the size of arrays. So it will vary with the number of teams we are getting from data.JSON
- We have set "board" to empty HEIGHT x WIDTH matrix array, which basically defines the size of board.
- We will now start building html board by getting "htmlBoard" from the item in HTML w/ID of "records", which is a table element from index.html. The class list on line 35 is just to style the board using Bootstrap.
- We have the top row dynamically created by using for loop till the WIDTH length. during each loop, team name is picked using array index and append to the 'headcell', which is td element of the table. The 'headcell' is then append to 'top', which is a 'tr' element of the table. 'top' is finally being append to the 'htmlboard' and the top row thus appears on the UI.
- Now we are dynamically creating table rows to display the records board by iterating using for loop over the length of 'HEIGHT'. For each HEIGHT, we are iterating using for loop over the length 'WIDTH', which will fill data by creating 'td' element in each row created. Once the nested loop is over, the row is then append to htmlboard to display all the rows created, which build the complete board.
- Under line 63 - 71, you will notice we have to check 'if' the team matches, we display '--', 'else' the value of number of wins is grabbed from data.JSON and stored in count, which is then append to cell ['td' element of the table].
- The bottom row is created dynamically like we created top row by iterating over 'teams' for the length of 'WIDTH' to create bottom row, which is then append to 'htmlboard' to show on the UI.
- makeHtmlBoard is function is called to finally build the board on UI.

[(Back to top)](#table-of-contents)

# Contribute

If you'd like to contribute to my project,you may do so by raising a new branch and raising a pull request for your additions.

[(Back to top)](#table-of-contents)

# Footer

Leave a star in GitHub if you found this helpful.

[(Back to top)](#table-of-contents)
