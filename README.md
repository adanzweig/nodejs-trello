# Node.js Trello Integration

This Node.js application demonstrates basic integration with the Trello API. It allows users to interact with Trello boards and cards, including listing boards, retrieving lists within boards, creating cards, and moving cards between lists.

## Features

- **List All Boards**: Retrieve and display all Trello boards associated with the user.
- **Get Lists from a Board**: Get all lists from a specified Trello board.
- **Create a Card**: Add a new card to a specific list.
- **Move a Card**: Move an existing card to a different list.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have a Trello account.
- You have obtained your Trello API key and token.

## Installation

1. Clone the repository to your local machine.
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the project and add your Trello API key and token:
   ```
   TRELLO_API_KEY=your_api_key
   TRELLO_TOKEN=your_token
   ```

## Usage

Here are some instructions on how to use the application:

- **List All Boards**: 
  ```javascript
  getAllBoards();
  ```
  This function lists all boards available to the authenticated user.

- **Get Lists from a Board**: 
  ```javascript
  getAllBoardsList('your_board_id');
  ```
  Replace `'your_board_id'` with the actual ID of the board to retrieve its lists.

- **Create a Card**: 
  ```javascript
  createCard('your_list_id', 'Card Title', 'Card Description');
  ```
  Replace `'your_list_id'`, `'Card Title'`, and `'Card Description'` with the desired values.

- **Move a Card**: 
  ```javascript
  moveCard('your_card_id', 'new_list_id');
  ```
  Replace `'your_card_id'` and `'new_list_id'` with the respective card and list IDs.

Run the application:
```bash
node index.js
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contact

For any queries, please reach out at [adanzweig@gmail.com].