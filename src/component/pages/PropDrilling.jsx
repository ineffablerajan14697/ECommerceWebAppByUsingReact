
export default function Main() {
    let message = "Hello Beta mai ye Msg apne great grand child ko bhej rha hu";

    return (
        <>
            <Child1 msg={message} />
        </>
    );
}

function Child1({ msg }) {
    return (
        <>
            <Child2 msg2={msg} />
        </>
    );
}

function Child2({ msg2 }) {
    return (
        <>
            <Child3 msg3={msg2} />
        </>
    );
}

function Child3({ msg3 }) {
    return (
        <>
            <h1>Hi, I am Last Child</h1>

            <p>
                And I received a message from my Great Grand Father:
                {msg3}
            </p>
        </>
    );
}

