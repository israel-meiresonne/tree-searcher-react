import Node from "./node";

export default function Tree({ root }) {
  return (
    <div className="wrapper-tree">
      <Node key={Math.random()} node={root} />
    </div>
  );
}
