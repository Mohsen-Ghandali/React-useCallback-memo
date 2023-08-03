import { memo } from "react";

const Counter = ({text,counter}) => {
    console.log(`render ${text}`);
    return ( 
     <h3>{counter}</h3>
     );
}
 
export default memo(Counter);