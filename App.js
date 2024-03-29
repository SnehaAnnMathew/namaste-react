/*const heading =React.createElement("h1",{id:"heading"},"Hello World using React");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); */



/*
<div id="parent">
  <div id="child">
    <h1> I am a h1 tag </h1>
    <H2> I am h2 tag</h2>
 </div>
</div>
*/

const heading=React.createElement("div",{id:"parent"},
              React.createElement("div",{id:"child"},
              [React.createElement("h1",{className:"custom-text-color"},"I am h1 tag"),React.createElement("h1",{},"I am h2 tag")]));

 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);             