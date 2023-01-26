const heading1 = React.createElement(
  "h1",
  { id: "title" },
  "Namaste Everyone from React!"
);
const heading2 = React.createElement("h2", { id: "sub-title" }, "Hello World!");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
