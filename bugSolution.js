```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    // Correctly clean up the interval when the component unmounts
    interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    return () => clearInterval(interval);  
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```