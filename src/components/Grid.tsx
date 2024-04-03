import {useEffect} from "react";
import '../style/youtube/Grid.css'

export const Grid: React.FC = () => {

    useEffect(() => {
            document.title = 'Grid Practice';
        },
        []);

    const style1 = {
        backgroundColor: "lightblue"
    }
    const style2 = {
        backgroundColor: "lightpink"
    }

    const container1 = {
        display: "grid",
        gridTemplateColumns: "repeat(2, 100px)"
    }

    const container2 = {
        marginTop: "30px",
        display: "grid",
        gridTemplateColumns: "repeat(2, 100px) 200px"
    }

    const container3 = {
        marginTop: "30px",
        display: "grid",
        gridTemplateColumns: "100px 1fr"
    }

    const container4 = {
        marginTop: "30px",
        display: "grid",
        gridTemplateColumns: "100px 1fr 2fr"
    }

    const container5 = {
        marginTop: "30px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        height: "200px",
        columnGap: "20px",
        rowGap: "39px"
    }

    const componentStyle = {
        paddingBottom: "100px"
    }


    return (
   <div style={componentStyle}>
       <div style={container1}>
           <div style={style1}>div 1</div>
           <div style={style2}>div 2<p>text</p></div>
       </div>

       <div style={container2}>
           <div style={style1}>100px</div>
           <div style={style2}>100px<p>text</p></div>
           <div style={style1}>200px</div>
           <div style={style2}>100px</div>
       </div>

       <div style={container3}>
           <div style={style1}>100px</div>
           <div style={style2}>1fr</div>
       </div>

       <div style={container4}>
           <div style={style1}>100px</div>
           <div style={style2}>1fr</div>
           <div style={style1}>2fr</div>
       </div>

       <div style={container5}>
           <div style={style1}>100px</div>
           <div style={style2}>1fr</div>
           <div style={style1}>2fr</div>
           <div style={style2}>100px</div>
           <div style={style1}>1fr</div>
           <div style={style2}>2fr</div>
       </div>

   </div>
    );
}
