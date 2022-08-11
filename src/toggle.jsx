


const toggle = (props) => {

    return (
        <div>
            <div className="arrows">
                <button onClick={() => {
                    props.smoothEffect();
                    setTimeout(() => {
                        props.previous();
                    }, 300)
                }}><i className="fa-solid fa-angle-left"></i></button>
                <button onClick={() => {
                    props.smoothEffect();
                    setTimeout(() => {
                        props.next();
                    }, 300)
                }}><i className="fa-solid fa-angle-right"></i></button>

            </div>
            <div className="random">
                <button onClick={()=>{
                    props.smoothEffect();
                    setTimeout(() => {
                        props.random();
                    }, 300)
                }}>Random</button>
            </div>
        </div>
    )

}
export default toggle;