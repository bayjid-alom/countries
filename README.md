

### API
```
https://openapi.programming-hero.com/api/all
```


### Notes



#### Toggle (Conditional)
const [visited, setVisited] = useState(false)

>> Way - 01
```
const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        if (visited) {
            setVisited(false)
        } else {
            setVisited(true)
        }
    }


 <button onClick={handleVisited} >{visited ? "Visited" : "Not Visited"}</button>
 ```

 >> Way - 02
 ```
 setVisited(visited ? false : true)
 ```

 >> Way - 03 (Shorthand)

 ```
 setVisited(!visited)
 ```


 ### Conditional class add

```
<div className='country-card'>
/
<div className={`country-card ${visited ? "visited-country" : "not-visited-country"}`}>
/
<div className={`country-card ${visited && "visited-country"}`}>
```


### Total Visited Countries
### Lift up the State (Child to Parent)

 const [visitedCountries, setVisitedCountries] = useState([])
 > Handler in same file.jsx

```
const [visitedCountries, setVisitedCountries] = useState([])

const handleVisitedCountries = () => {
    console.log("visited country clicked");
}

<Country handleVisitedCountries={handleVisitedCountries}> </Country>
```


#### received props , called function and send country props to Countries.jsx : 

```
const Country = ({ country, handleVisitedCountries }) => {
    const handleVisited = () => {
        setVisited(!visited)
        handleVisitedCountries(country)
    }
}
```

Clicked Country's Object :
```
const handleVisitedCountries = (country) => {
    // console.log("visited country clicked", country);
        
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
}
```

- visitedCountries(array) er country guloke kivabe dekhabo.... to show in ui .... loop through








