import { useState } from "react";

export default function Node({ node }) {
  const [showChildren, setShowChildren] = useState(true);
  let children = node.children.map((child) => <Node node={child} />);
  const { nodeAttrs, childrenStyle } = manageNodeAttributes(
    !!children.length,
    showChildren,
    () => setShowChildren(!showChildren)
  );
  return (
    <div className="wrapper-node">
      <span {...nodeAttrs}>{node.name}</span>
      {node.children.length > 0 && (
        <div style={childrenStyle} className="children">
          {children}
        </div>
      )}
    </div>
  );
}

function manageNodeAttributes(hasChildren, showChildren, onClickCallback) {
  const nodeClasses = {
    default: ["node"],
    arrow: ["arrow", "arrow-right"],
  };
  const childrenStyle = { display: "none" };
  if (showChildren) {
    childrenStyle.display = "block";
    nodeClasses.arrow[1] = "arrow-down";
  }
  !hasChildren ? (nodeClasses.arrow = []) : null;
  const nodeAttrs = {
    className: [...nodeClasses.default, ...nodeClasses.arrow].join(" "),
  };
  hasChildren ? (nodeAttrs["onClick"] = onClickCallback) : null;
  return { nodeAttrs, childrenStyle };
}
