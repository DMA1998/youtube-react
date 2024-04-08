import '../style/youtube/Position-test.css'
import {useEffect} from "react";

export const Position: React.FC = () => {

    useEffect(() => {
        document.title = "Position Practice";
    }, [])

    return (
        <div className="block">
            <div className="header">header</div>
            <div className="div1">div 1</div>
            <div className="div2">div 2</div>
        </div>
    )
}

export default Position;