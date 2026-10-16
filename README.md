

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
// <div className='country-card'>
// <div className={`country-card ${visited ? "visited-country" : "not-visited-country"}`}>
    <div className={`country-card ${visited && "visited-country"}`}>
```



