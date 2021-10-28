import React from 'react';

const Clock = () => {
    const [date, setDate] = React.useState(new Date());
    const [color, setColor] = React.useState("black");
    const [isRunning, setIsRunning] = React.useState(true);

    const intervalRef : { current: number | undefined } = React.useRef();

    // componentWillMount() { //beforeMount
    //   console.log("I'm gonna render");
    // }

    /*React.useEffect(() => {
        //console.log("I'm gonna render");
    }); // déclenché à CHAQUE render => componentWillMount*/

    React.useEffect(() => {setDate(new Date())}, []) // componentDidMount

    React.useEffect(() => { // dateDidUpdate
        intervalRef.current = window.setInterval(() => {
            setDate(new Date());
            /*setExemple((prevState) => ({
                ...prevState,
                pouet: "bonjour",
            }
        ));*/
        }, 1000)
    }, [date]);


    React.useEffect(() => { // colorDidUpdate
        console.log("new color is :", color);
    }, [color])

    React.useEffect(() => { //isRunningDidUpdate
        console.log(isRunning);
        isRunning ? setDate(new Date()) : window.clearInterval(intervalRef.current);
        console.log(intervalRef);
    }, [isRunning])

    React.useEffect(() => { // componentWillMount
        return () => {
            window.clearInterval(intervalRef.current);
        } // componentWillUnmount
    })

    const changeColor = () => {
        let colorHex = "#"
        for (let i = 1; i <= 3; i++) {
            let colorValue = (Math.floor(Math.random() * 256)).toString(16) // un nombre entre #0 et #ff
            if (colorValue.length < 2) colorValue = "0" + colorValue;
            colorHex += colorValue;
        }
        setColor(colorHex);
    };

    const resetColor = () => {
        setColor("black")
    }

    const changeClockStatus = () => {
        setIsRunning(isRunning ? false : true);
    }

    return (

        <div>
            <h1>Bonjour, monde !</h1>
            <h2 style={{ color: color }}>Il est {date.toLocaleTimeString()}.</h2>

            <button onClick={changeColor}>click to change color</button>
            <button onClick={resetColor}>click to reset color</button>

            <button onClick={changeClockStatus}>{isRunning ? "pause clock" : "resume clock"}</button>
        </div>
    );
}


export default Clock;

