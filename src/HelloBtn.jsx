function HelloBtn() {
    const hiAll = (e) => {
        e.preventDefault()
        alert("hello everyone")
    }
    const hiYou = (e,name) => {
        e.preventDefault()
        
        alert("Hello "+ name)
        }
    return (
        <span>
            <button onClick={(e)=>{hiAll(e)}}>Hi All</button>
            <button onClick={(e)=>{hiYou(e,'Nguyễn Hưng Thịnh')}}>Hi you</button>
        </span>
    );
}

export default HelloBtn;