import Node from "./node";

/**
 * Use a random number as a key to force React to re-render after each search
 * and so expand the collapsed parents.
 */
export default function Tree({ root }) {
  return (
    <div className="wrapper-tree">
      <Node key={Math.random()} node={root} />
    </div>
  );
}
