import {useState} from "react";

// const Counter = () => {
	
//     let count = 1;

// 	return (
// 		<>
// 			<button onClick={() => count++}>
//                 count is {count}
//             </button>
// 		</>
// 	);
// };
const Counter = () => {
	
    const [count, setCount] = useState(0); 

	return (
		<>
			<button onClick={() => setCount(count +1)}>
                count is {count}
            </button>
		</>
	);
};

export default Counter;
