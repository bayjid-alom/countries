## 🌍 Countries

**Discover the world, one country at a time.** Explore countries, uncover essential information, and keep track of the places you've visited.

[📌 View Countries](https://countries-verse.netlify.app)

---





#### ❔ Learning `Workflow` & `Notes`

<details>
<summary>Click to view the implementation workflow</summary>

### 1. Toggle (Conditional)

`visited` state দিয়ে country visited হয়েছে কি না, তা control করা হয়।

**Way - 01**
```jsx
const [visited, setVisited] = useState(false)

const handleVisited = () => {
    if (visited) {
        setVisited(false)
    } else {
        setVisited(true)
    }
}

<button onClick={handleVisited}>
    {visited ? "Visited" : "Not Visited"}
</button>
```

**Way - 02**
```jsx
setVisited(visited ? false : true)
```

**Way - 03 (Shorthand)**

```jsx
setVisited(!visited)
```

`!visited` আগের value-কে উল্টে দেয়।

<br>


### 2. Conditional Class Add

`visited` state-এর উপর ভিত্তি করে different class add করা যায়।

```jsx
<div className="country-card">
```

```jsx
<div className={`country-card ${visited ? "visited-country" : "not-visited-country"}`}>
```

```jsx
<div className={`country-card ${visited && "visited-country"}`}>
```

- `? :` — condition অনুযায়ী class select করে।
- `&&` — condition true হলে class add করে।

<br>



### 3. Total Visited Countries

কতগুলো country visited হয়েছে, তা `visitedCountries` array-এর length দিয়ে দেখা যায়।

```jsx
visitedCountries.length
```


<br>


### 4. Lift Up the State (Child to Parent)

Child component থেকে Parent component-এ data পাঠানোর জন্য function props হিসেবে পাঠানো হয়।

**Handler in same file.jsx**

```jsx
const [visitedCountries, setVisitedCountries] = useState([])

const handleVisitedCountries = () => {
    console.log("visited country clicked")
}

<Country handleVisitedCountries={handleVisitedCountries} />
```

এখানে `Countries.jsx`-এ handler function তৈরি করা হয়েছে এবং `Country.jsx`-এ props হিসেবে পাঠানো হয়েছে।

**Received Props, Called Function and Send Country Props to Countries.jsx**

```jsx
const Country = ({ country, handleVisitedCountries }) => {
    const handleVisited = () => {
        setVisited(!visited)
        handleVisitedCountries(country)
    }
}
```

এখানে `Country.jsx` থেকে `handleVisitedCountries(country)` call করে selected country-এর object Parent component-এ পাঠানো হয়েছে।

**Clicked Country's Object**

```jsx
const handleVisitedCountries = (country) => {
    // console.log("visited country clicked", country)

    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
}
```

`...visitedCountries` দিয়ে আগের array-এর data copy করে নতুন country add করা হয়।


<br>


### 5. Show Visited Countries in UI

`visitedCountries` array-এর country-গুলোকে UI-তে দেখানোর জন্য `map()` ব্যবহার করা যায়।

```jsx
{
    visitedCountries.map(country => (
        <p key={country.cca3}>{country.name.common}</p>
    ))
}
```

`map()` array-এর প্রতিটি country-এর জন্য UI element তৈরি করে। এখানে `cca3`-কে unique key হিসেবে ব্যবহার করা হয়েছে, যদি API response-এ field-টি থাকে।

> ||

</details><br>









### 📌 Project Overview

**Countries Verse** is an interactive country exploration application that allows users to discover countries around the world and explore essential information about them through a clean, dark-themed interface.

Browse country cards, explore country details, mark countries as visited, and view your visited countries in a dedicated section.

This project focuses on practicing **React components, props, state management, conditional rendering, API integration, event handling, and lifting state up** through a practical application.

---

### 📌 What You Can Explore

- **Explore Countries** — Discover countries using data fetched from the Programming Hero API.
- **Country Information** — View country flags, names, population, region, and other available information.
- **Country Details** — Explore additional country information through interactive controls.
- **Visited Countries** — Mark countries as visited and keep track of your selections.
- **Toggle Visited Status** — Switch between visited and not-visited states.
- **Dynamic Card Styling** — Apply different styles to visited country cards.
- **Visited Country Count** — Track the number of visited countries.
- **Reusable Components** — Organize the interface into manageable React components.
- **Loading Experience** — Display a themed loading interface while country data is being fetched.
- **Dark UI Design** — Explore countries through a modern interface with subtle borders and smooth hover transitions.

---

### ⚙️ Built With

| Technology | Role |
|:--|:--|
| **React** | Component-based UI development |
| **JavaScript (ES6+)** | Application logic and interactivity |
| **Tailwind CSS** | Utility-based styling |
| **CSS3** | Custom card styling and transitions |
| **Fetch API** | Retrieving country data |
| **Programming Hero API** | Country information source |
| **Git & GitHub** | Version control and source code management |
| **Netlify** | Deployment and hosting |

---

### 🔌 API Reference

**Countries API**

```text
https://openapi.programming-hero.com/api/all
```

The API provides country data used to render the country cards dynamically.

The application fetches the data and uses it to display country information in the interface.

---


### 🧠 React Concepts Practiced

- **Components** — Breaking the UI into reusable parts.
- **Props** — Passing country data and handler functions between components.
- **useState** — Managing visited status and the visited countries array.
- **use()** — Reading a Promise-based API response in React.
- **Suspense** — Displaying fallback UI while waiting for data.
- **Conditional Rendering** — Showing different content based on state.
- **Conditional Classes** — Applying styles according to visited status.
- **Event Handling** — Responding to button clicks.
- **Lifting State Up** — Sending selected country data from child to parent.
- **Array Methods** — Using `map()` to render countries and `length` to count visited countries.
- **Spread Operator** — Creating an updated array when adding a visited country.

---


### 🛠️ Development Environment

- **Visual Studio Code** — Writing and managing code.
- **Chrome DevTools** — Debugging and inspecting the application.
- **GitHub** — Tracking project changes and maintaining source code.
- **Netlify** — Publishing the live application.


<br>






## 👨‍💻 Author

**Bayjid Alom**

*Learning by building. Growing one project at a time.*




