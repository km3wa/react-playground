function FirstName(props) {
    return <span className="first_name">{props.name}</span>;
}
function LastName(props) {
    return <span className="last_name"> {props.name}</span>;
}

function Name(props) {
    return (
        <div>
            <FirstName name={props.firstName}/>
            <LastName name={props.lastName}/>
        </div>
    );
}

ReactDOM.render(<Name firstName="kévin" lastName="millot"/>,
    document.getElementById('root')
);