// import React from "react";
// import { ColorPicker, useColor } from "react-color-palette";

// export default function ColorPalette() {
//   const [color, setColor] = useColor("hex", "#121212");

//   return (
//     <div>
//       <h1>Color Picker</h1>
//       <div
//         style={{
//           width: "456px",
//           height: "228px",
//           position: "relative",
//         }}
//       >
//         <ColorPicker
//           width={456}
//           height={228}
//           color={color}
//           onChange={setColor}
//           hideHSV
//           dark
//         />
//       </div>
//     </div>
//   );
// }

import React from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/package.json";


export default function ColorPalette() {
  const [color, setColor] = useColor("hex", "#121212");

  const colorPaletteStyle = {
    width: "456px",
    height: "60px",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
  };

  const colorButtonStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    cursor: "pointer",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <div style={colorPaletteStyle}>
        {["#FF5733", "#FFC300", "#FF5733", "#C70039", "#900C3F"].map(
          (buttonColor) => (
            <div
              key={buttonColor}
              style={{
                ...colorButtonStyle,
                backgroundColor: buttonColor,
              }}
              onClick={() => setColor({ hex: buttonColor })}
            />
          )
        )}
      </div>
      <div style={{ marginTop: "20px" }}>
        <ColorPicker
          width={456}
          height={168}
          color={color}
          onChange={setColor}
          hideHSV
          dark
        />
      </div>
    </div>
  );
}
