export function buildTree(treeNodes) {
  const roots = [];
  const idToNodes = {};
  for (node of treeNodes) {
    idToNodes[node._id] = { ...node };
    idToNodes[node._id].children = [];
  }
  for (id in idToNodes) {
    parentId = idToNodes[id].parent;
    if (!parentId) {
      roots.push(idToNodes[id]);
      continue;
    }
    parentId in idToNodes
      ? idToNodes[parentId].children.push(idToNodes[id])
      : null;
  }
  return { roots, idToNodes };
}

/**
 * To get the parent of a given node up to the root
 */
export function nodeToRoot(node, idToNodes, pathNodes = {}) {
  pathNodes[node._id] = node;
  if (node.parent) {
    let parent = idToNodes[node.parent];
    return nodeToRoot(parent, idToNodes, pathNodes);
  } else {
    return node;
  }
}

/**
 * To get all matching nodes and their parent up to the root
 */
export function filterNodes(search, treeNodes, idToNodes) {
  let pathNodes = {};
  for (const node of treeNodes) {
    let name = node.name.toLowerCase();
    let isIncluded = name.includes(search.toLowerCase());
    if (isIncluded) {
      nodeToRoot(node, idToNodes, pathNodes);
    }
  }
  return pathNodes;
}
