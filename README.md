# Eat-N-Split

A simple and interactive bill-splitting application built with **React** that helps you manage friends, split shared expenses, and track who owes whom.

## 🚀 Live Demo

**[Try Eat-N-Split](https://eat-n-split-two-iota.vercel.app/)**

Experience the application live without installing anything.

## ✨ Features

- **Add Friends:** Add friends with their names and profile image URLs.
- **Friend List:** View your friends and their current balances.
- **Balance Tracking:** See whether you owe a friend, they owe you, or your balances are settled.
- **Split Bills:** Enter the total bill amount and your share of the expense.
- **Flexible Payments:** Choose whether you or your friend paid the bill.
- **Automatic Balance Updates:** Update the selected friend's balance based on the bill split.
- **Interactive Forms:** Open and close the friend-adding and bill-splitting forms.
- **Dynamic UI:** Keep the interface synchronized with application state using React.

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- npm
- Vercel (deployment)

## 📁 Project Structure

```text
Eat-N-Split/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── App.js
│   ├── index.css
│   └── index.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shyamkumar-T/Eat-N-Split.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Eat-N-Split
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the local URL displayed in your terminal, usually `http://localhost:3000`.

## 📖 How to Use

1. Open the application.
2. Click **AddFriend** to open the friend form.
3. Enter a friend's name and image URL, then click **Add**.
4. Click **Select** beside a friend to open the bill-splitting form.
5. Enter the total bill amount.
6. Enter your share of the expense.
7. Choose who paid the bill.
8. Click **Split Bill** to update the friend's balance.

## 🧮 How Balance Calculation Works

The friend's share is calculated as:

**Friend's Expense = Bill Value − Your Expense**

The balance is then updated according to who paid:

- **You paid:** The friend's share is added to their balance, meaning they owe you.
- **Your friend paid:** Your share is subtracted from their balance, meaning you owe them.

A positive balance means your friend owes you, a negative balance means you owe your friend, and a zero balance means you are even.

## 🧠 React Concepts Practiced

- Functional components
- Props and component communication
- State management with `useState`
- Event handling and callback functions
- Controlled form inputs
- Conditional rendering
- Rendering lists with `map()` and unique keys
- Updating arrays immutably
- Managing state between parent and child components

## 🔮 Future Improvements

- Persist friends and balances across page refreshes.
- Add the ability to remove friends.
- Improve validation for bill amounts and expenses.
- Add transaction history for each friend.
- Improve accessibility and mobile responsiveness.
- Enhance the interface with additional feedback and animations.

## ⚠️ Current Limitations

- Friend details and balances are stored in React state and reset when the page is refreshed.
- The application does not currently use a backend or database.
- Friends must be added again after refreshing the application.

## 👨‍💻 Author

**Shyamkumar T**

## 🔗 Links

- **Live Demo:** https://eat-n-split-two-iota.vercel.app/
- **GitHub Repository:** https://github.com/Shyamkumar-T/Eat-N-Split
