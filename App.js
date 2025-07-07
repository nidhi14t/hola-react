// const heading = React.createElement("h1", { id: "heading" }, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Heading 1 p1"),
    React.createElement("h2", {}, "Heading 2 p1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Heading 1 c2"),
    React.createElement("h2", {}, "Heading 2 c2"),
  ]),
]);

root.render(parent);
