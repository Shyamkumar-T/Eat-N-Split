Eat-N-Split
A React-based bill-splitting app to manage friends, split shared expenses, and keep track of who owes whom.

🌐 Live Demo: Try Eat-N-Split
Features
- Add Friends: Add friends with their names and profile image URLs.
- Friend List: View friends and their current balances.
- Balance Tracking: See whether you owe a friend, they owe you, or the balance is settled.
- Split Bills: Enter the total bill amount and your share of the expense.
- Flexible Payments: Choose who paid the bill.
- Automatic Balance Updates: Update the selected friend's balance based on the bill split.
- Interactive Forms: Open and close the friend-adding and bill-splitting forms as needed.
- Dynamic UI: Update the interface in response to changes in React state.
Built With
- React
- JavaScript (ES6+)
- HTML5
- CSS3
- npm
Getting Started
Prerequisites
- Node.js
- npm (included with Node.js)
Installation
1. Clone the repository:
   git clone https://github.com/Shyamkumar-T/Eat-N-Split.git
2. Navigate into the project directory:
   cd Eat-N-Split
3. Install dependencies:
   npm install
4. Start the development server:
   npm start
5. Open the local URL displayed in your terminal.
How to Use
1. Click Add Friend to open the friend form.
2. Enter a friend's name and image URL, then click Add.
3. Select a friend to open the bill-splitting form.
4. Enter the total bill amount and your share of the expense.
5. Choose who paid the bill.
6. Click Split Bill to update the friend's balance.
How Balance Calculation Works
The friend's expense is calculated as:
Friend's Expense = Bill Value - Your Expense
The balance is updated according to who paid:
- You paid: The friend's share is added to their balance, meaning they owe you.
- Your friend paid: Your share is subtracted from their balance, meaning you owe them.
A positive balance means your friend owes you. A negative balance means you owe your friend. A balance of zero means you are even.
React Concepts Practiced
- Functional components
- State management with useState
- Props and component communication
- Prop drilling and callback functions
- Event handling
- Controlled form inputs
- Conditional rendering
- Rendering lists with map() and unique keys
- Immutable state updates
Current Limitations
- Friends and balances are stored in React state, so they reset when the page is refreshed.
- The app does not currently use a backend or database.
- Friends must be added again after refreshing the app.
Future Improvements
- Persist friends and balances across page refreshes.
- Add the ability to remove friends.
- Improve validation for bill amounts and expenses.
- Add transaction history for each friend.
- Improve accessibility and mobile responsiveness.
- Add additional user feedback and animations.
Author
Shyamkumar T
Repository
View the Eat-N-Split repository on GitHub
