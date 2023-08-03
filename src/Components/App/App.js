import { useCallback, useState } from "react";
import Counter from "../Counter/Counter";
import Title from "../Title/Title";
import Button from "../Button/Button";

const App = () => {
    let [counterA, setCounterA] = useState(null);
    let [counterB, setCounterB] = useState(null);
    const clickHandlerA = useCallback(
        () => {
            setCounterA(counterA + 1);
        },
        [counterA]
    );

    const clickHandlerB = useCallback(
        () => {
            setCounterB(counterB + 1);
        },
        [counterB]
    );

    return (

        <div className="col-6 offset-3 text-center bg-secondary py-4 mt-5 ">
            <Title />
            <Counter text={"counterA"} counter={counterA} />
            <Button handleClick={clickHandlerA}>increment counterA</Button>

            <Counter text={"counterB"} counter={counterB} />
            <Button handleClick={clickHandlerB}>increment counterB</Button>
        </div>

    )
}

export default App;