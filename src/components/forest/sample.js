// Ignore this file.
// It's used to visualize trees.

export default function TreeSample() {
  return (
    <div className="wrapper-tree">
      <div className="wrapper-node">
        <div className="node">root</div>
        <div className="children">
          <div className="wrapper-node">
            <div className="node">parent1</div>
          </div>
          <div className="wrapper-node">
            <div className="node">parent2</div>
            <div className="children">
              <div className="wrapper-node">
                <div className="node">child1</div>
              </div>
              <div className="wrapper-node">
                <div className="node">child2</div>
                <div className="children">
                  <div className="wrapper-node">
                    <div className="node">grandchild1</div>
                    <div className="children">
                      <div className="wrapper-node">
                        <div className="node">greatgrandchild1</div>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper-node">
                    <div className="node">grandchild2</div>
                  </div>
                </div>
              </div>
              <div className="wrapper-node">
                <div className="node">child3</div>
              </div>
            </div>
          </div>
          <div className="wrapper-node">
            <div className="node">parent3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
