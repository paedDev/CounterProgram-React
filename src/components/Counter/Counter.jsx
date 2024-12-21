
import React,{useState} from "react";
import styles from "./Counter.module.css"

function Counter () {

    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1)

    }
    const decrement = () =>{
        setCount(count - 1)
        
    }
    const reset = () =>{
        setCount(0)
    }


    return(
        <>
            <div className={styles.counterContainer}>
                <h1 className={`${styles.counterDisplay} ${count === 0 ? styles.zero :''} ${count < 0 ? styles.negative : styles.positive} `}>{count}</h1>

                <button className= {styles.counterButton}onClick={decrement}>Decrement
                </button>
                <button className= {styles.counterButton}onClick={reset}>Reset
                </button>
                <button className= {styles.counterButton}onClick={increment}>Increment
                </button>
            </div>
        </>
    ) 
}


export default Counter;