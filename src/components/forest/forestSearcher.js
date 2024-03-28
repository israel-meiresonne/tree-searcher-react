import { useState } from "react";
import Tree from "./tree";
import { buildTree, filterNodes } from "./forestHelper";
import { treeNodes } from "../../nodes";

const idToNodes = buildTree(treeNodes).idToNodes;
const defaultRoots = [];

export default function ForestSearcher() {
  const [rootsState, setRoots] = useState(defaultRoots);
  function handleSetRoots(search) {
    let newRoots = [];
    if (!search) {
      newRoots = defaultRoots;
    } else {
      const pathNodes = filterNodes(search, treeNodes, idToNodes);
      const filteredNodes = Object.values(pathNodes);
      const returneds = buildTree(filteredNodes);
      newRoots = returneds.roots;
    }
    setRoots(newRoots);
  }
  return (
    <div className="App">
      <div className="container-input">
        <input
          onChange={(e) => handleSetRoots(e.target.value)}
          placeholder="Search"
          type="text"
        />
      </div>
      <div className="forest">
        {rootsState.map((root) => (
          <Tree root={root} />
        ))}
      </div>
    </div>
  );
}
