import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = ({ start = 0, end, delay = 0, children }) => {
    const [startCounter, setStartCounter] = useState(false);

    return (
        <VisibilitySensor
            partialVisibility
            onChange={(isVisible) => {
                // we just need the counter to be triggered when the user accesses the section for the first time.
                if (isVisible && !startCounter) {
                    setStartCounter(true);
                }
            }}>
            <div className="p-3 m-0">
                {startCounter ?
                    <CountUp
                        delay={delay}
                        start={start}
                        className="h1"
                        end={end} />
                    :
                    <span className="h1">
                        {start}
                    </span>
                }
                <br />
                {children}
            </div>
        </VisibilitySensor>
    )
}

export default Counter;