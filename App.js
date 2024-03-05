const heading=React.createElement("h1",{class:"test"},"Heloo world it is react ")
        const heading1=React.createElement("div",{className:"tes2"},[
            React.createElement("h1",{className:"tes2"},"Hi i am react"),
            React.createElement("h2",{className:"tes2"},"Hi i am react")
        ])

        console.log(heading1)
        const root =  ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading1)