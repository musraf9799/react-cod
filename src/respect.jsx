
import { useState } from "react";
function Respect(){
 const[cardstyle,setcardstyle]=useState(
    {
        border: "1px solid green",
        width:" 200px",
        boxShadow: "1px 2px 3px 0px #cccc57",
        margin: '10px'
 }
    );
    const [textColor,setTextColor]=useState('green')

    const ubadateTheme = (bgColor, textcolor) => {
  setcardstyle({
    ...cardstyle,
    backgroundColor: bgColor,
    color: textcolor
  });
};
    
    return(
    <>
    {/* <div {{display: "flex"}}></div>
    <h1 style={{color:"red"}}></h1>
    <div style={cardstyle}>
        
    
    <img style={{width:'200px'}} src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" srcest="" />
    <div style={{padding: "5px"}}>
    <h4>Anail sidhu</h4>
    <p>softwere Ingueare</p>
    </div>
    </div> */}
 
<h1 style={{color:"red"}}></h1>
   <button onClick= {()=> ubadateTheme("gray","green")}>gray them </button>
  <button onClick={()=>ubadateTheme("white","black")}>defoult them </button>
    <div style={cardstyle}>
        
    <img style={{width:'200px'}} src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" srcest="" />
    <div style={{padding: "5px", color: "textColor"}}>
    <h4>Anail sidhu</h4>
    <p>softwere Ingueare</p>
    </div>

    <h1 style={{color:"red"}}></h1>
   <button onClick= {()=> ubadateTheme("gray","green")}>gray them </button>
  <button onClick={()=>ubadateTheme("white","black")}>defoult them </button>
    <div style={cardstyle}>
        
    <img style={{width:'200px'}} src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" srcest="" />
    <div style={{padding: "5px", color: "textColor"}}>
    <h4>Anail sidhu</h4>
    <p>softwere Ingueare</p>
    </div>
    </div>

    
    <h1 style={{color:"red"}}></h1>
   <button onClick= {()=> ubadateTheme("gray","green")}>gray them </button>
  <button onClick={()=>ubadateTheme("white","black")}>defoult them </button>
    <div style={cardstyle}>
        
    <img style={{width:'200px'}} src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" srcest="" />
    <div style={{padding: "5px", color: "textColor"}}>
    <h4>Anail sidhu</h4>
    <p>softwere Ingueare</p>
    </div>
    </div>
    </div> 

{/*     
<h1 style={{color:"red"}}></h1>
    <div style={cardstyle}>
        
    
    <img style={{width:'200px'}} src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" srcest="" />
    <div style={{padding: "5px"}}>
    <h4>Anail sidhu</h4>
    <p>softwere Ingueare</p>
    </div>
    </div> */}
    


    </>
    )
}
export default Respect;