function Hello() {
    const person =
    {
        name: 'Peter',
        theme: {
            backgroundColor: 'green',
            color: 'white'
        }
    };
    return (
        <>
            <div style={person.theme}>

                <h1>Xin chào: {person.name}</h1>

            </div>

            <div> Chúc bạn thành công với React</div>
        </>
    );
}
const HelloPerson = ({ name }) => {
    return (
        <>
            <h1>Xin chào bạn: {name}</h1>
        </>)
}

export { Hello, HelloPerson };