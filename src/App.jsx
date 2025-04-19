import { useState } from 'react';
const App = () => {
const [count, setCount] = useState(0); // Counter state
const [step, setStep] = useState(1); // Step value
// Increase Counter
const increase = () => setCount(count + step);
// Decrease Counter (Prevent below 0)
const decrease = () => setCount(count - step >= 0 ? count - step : 0);
// Reset Counter
const reset = () => setCount(0);
return (
<div style={styles.container}>
<h1>Counter Application</h1>
<h2>Counter Value: {count}</h2>
{/* Step Input */}
<div>
<label>Step Value: </label>
<input
type="number"
value={step}
onChange={(e) => setStep(Number(e.target.value))}
style={styles.input}
/>
</div>
{/* Buttons */}
<div>
<button onClick={increase} style={styles.button}>Increase</button>

<button onClick={decrease} style={styles.button}>Decrease</button>
<button onClick={reset} style={styles.resetButton}>Reset</button>
</div>
</div>
);
};
// Inline Styles
const styles = {
container: {
textAlign: 'center',
fontFamily: 'Arial, sans-serif',
marginTop: '50px',
},
button: {
margin: '10px',
padding: '10px 20px',
fontSize: '16px',
cursor: 'pointer',
},
resetButton: {
margin: '10px',
padding: '10px 20px',
fontSize: '16px',
cursor: 'pointer',
backgroundColor: 'red',
color: 'white',
},
input: {
marginLeft: '10px',
padding: '5px',
fontSize: '16px',
},
};
export default App;