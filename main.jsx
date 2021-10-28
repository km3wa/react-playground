function HelloWorld() {
    return <h1>Hello world !</h1>;
}

const element = <HelloWorld />

ReactDOM.render(element,
    document.getElementById('root')
);