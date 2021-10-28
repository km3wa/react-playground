function Name() {
    return( 
        <div>
            <span className="firstname">{firstName}</span>
            <span className="lastname"> {lastName}</span>
        </div>
    );
}

const firstName = "kévin"
const lastName = "millot"

ReactDOM.render(<Name/>,
    document.getElementById('root')
);