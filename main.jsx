/*class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Bonjour, monde !</h1>
                <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}*/

const Clock = () =>{
    const [date, setDate] = React.useState(new Date());
    const [exemple, setExemple] = React.useState({
        test: "coucou",
    });
    const [color, setColor] = React.useState("black");

    // componentWillMount() { //beforeMount
    //   console.log("I'm gonna render");
    // }

    React.useEffect(() => {
        console.log("I'm gonna render");
    }); // déclenché à CHAQUE render => componentWillMount

    React.useEffect(() => {
        console.log("first render");
    }, []); // déclenché uniquement au PREMIER render => componentDidMount


    React.useEffect(() => {
        console.log(date.toLocaleTimeString())

    }, [date]) // déclenché UNIQUEMENT lorsque date sera modifiée => componentDidUpdate

    React.useEffect(() => {
        console.log("new color is :", color);

    }, [color])

    React.useEffect(() => {

        return () => {
            // Déclenché lorsque le composant va être "détruit" => componentWillUnmount
            console.log('I`m gonna die');
        }
    })

    const changeDate = () => {
        setDate(new Date());
        setExemple((prevState) => ({
            ...prevState,
            pouet: "bonjour",
        }));
    };

    const changeColor = () => {
        let colorHex = "#"
        for (let i = 1; i<=3; i++){
            let colorValue = (Math.floor(Math.random() * 256)).toString(16)
            if (colorValue.length < 2) colorValue = "0"+colorValue;
            colorHex += colorValue;
        }
        setColor(colorHex);
    };

    const resetColor = () => {
        setColor("black")
    }

    return (
        <div>
            <h1>Bonjour, monde !</h1>
            <span style={{color: color}}>Il est {date.toLocaleTimeString()}.</span>
            <button onClick={changeColor}>click to change color</button>
            <button onClick={resetColor}>click to reset color</button>
        </div>
    );
}


ReactDOM.render(
    <Clock />,
    document.getElementById('app')
);