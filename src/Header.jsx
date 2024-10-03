function Item({ props }) {
    return (
        <li><a href={props.url}>{props.content}</a></li>
    );
}
function Menu({ list }) {
    return (
        <ul>
            {list.map((item,index) => {
                return (
                        <Item key={index} props={{ url: item.url, content: item.content }} />
                    
                )
            })}
        </ul>
    );
}
function Header() {
    const listMenu = [
        { url: '/login', content: 'login' },
        { url: '/car', content: 'Car' },
        { url: '/hello', content: 'HelloBtn' },
    ]
    return (
        <Menu list={listMenu} />
    );
}

export { Item, Menu, Header };