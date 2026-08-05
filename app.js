const heading = React.createElement("div", {id: "parent"},[
    React.createElement("div", {id: "child"},
    [ React.createElement("h1",{id: "heading"}, "namskara"),
         React.createElement("h2",{id: "heading"}, "shivik"),
    ]),
     React.createElement("div", {id: "child"},
    [ React.createElement("h1",{id: "heading"}, "namskara"),
         React.createElement("h2",{id: "heading"}, "shivik"),
    ])
]
);


 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);