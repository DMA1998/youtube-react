import React, {useEffect} from "react";

export const Flexbox: React.FC = () => {

    useEffect(() => {
        document.title = "Flexbox Practice"
        document.body.style.setProperty("padding-bottom","1000px");
    }, []);


    const flexContainerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "30px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "grey",
        height: "70px",
        flexDirection: "row" as const
    }

    const pinkDivStyle = {
        backgroundColor: "lightpink",
        width: "100px"
    }

    const blueDivStyle1 = {
        backgroundColor: "lightblue",
        width: "100px"
    }

    const blueDivStyle2 = {
        backgroundColor: "lightblue",
        width: "100px"
    }

    return (
        <div style={flexContainerStyle}>
            <div style={blueDivStyle1}>100px</div>
            <div style={pinkDivStyle}>100px</div>
            <div style={blueDivStyle2}>100px</div>
        </div>
    );
};

export default Flexbox;