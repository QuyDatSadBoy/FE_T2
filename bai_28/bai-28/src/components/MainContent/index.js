import { BsFillBoomboxFill } from "react-icons/bs";

function MainContent() {
    let name = "Trần Quý Đạt";
    const css = {
        // color: "red",
        // background: "blue"
    };
    return (
        <div className="box">
            <div className="test" style={css}>
                Xin chào {name}
            </div>
            <div className="test" style={css}>
                Xin chào {name}
            </div>
            <BsFillBoomboxFill style={{ color: "red", fontSize: "50px" }} />
        </div>
    )
}

export default MainContent


