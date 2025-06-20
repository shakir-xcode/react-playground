import React, { useState } from "react";
import useTraverse from "./hooks/useTraverse";
import explorer from "./data";

const Folder = ({ subTree }) => {
  const [tree, setTree] = useState(explorer);
  const [hidden, setHidden] = useState(false);
  const [inpHidden, setInpHidden] = useState({
    isFolder: false,
    visible: false,
  });
  const [insertNode, deleteNode] = useTraverse();

  const handleAddFolder = (e) => {
    e.stopPropagation();
    setInpHidden((pre) => ({ isFolder: true, visible: !pre.visible }));
  };

  const handleAddFile = (e) => {
    e.stopPropagation();
    setInpHidden((pre) => ({ isFolder: false, visible: !pre.visible }));
  };

  const handleDelete = (e, folderId) => {
    e.stopPropagation();
    // console.log("Here...", deleteNode);
    setTree(deleteNode(explorer, folderId));
  };

  const handleSubmission = (e, id, isFolder) => {
    if (e.keyCode === 13 && e.target.value) {
      setInpHidden((pre) => ({ ...pre, visible: false }));
      insertNode(subTree, id, e.target.value, isFolder);
      e.target.value = "";
    }
  };

  return subTree.isFolder ? (
    <div
      onClick={() => {
        setInpHidden({
          isFolder: false,
          visible: false,
        });
      }}
    >
      {subTree.isFolder && (
        <div>
          <div className="flex gap-4 items-center">
            <div
              onClick={() => setHidden((pre) => !pre)}
              className="cursor-pointer select-none"
            >
              📁{subTree?.name}
            </div>
            <div className="flex gap-1">
              <span
                onClick={(e) => handleAddFolder(e)}
                className="bg-slate-200 text-xs cursor-default"
              >
                Folder +
              </span>
              <span
                onClick={(e) => handleAddFile(e)}
                className="bg-slate-200 text-xs cursor-default"
              >
                File +
              </span>
              <span
                onClick={(e) => handleDelete(e, subTree.id)}
                className="bg-slate-200 text-xs cursor-default"
              >
                Delete
              </span>
            </div>
          </div>
          <div
            className={`${inpHidden.visible ? "block" : "hidden"} flex gap-2`}
          >
            <div>{inpHidden.isFolder ? "📁" : "🗄"}</div>
            <input
              type="text"
              className="bg-slate-100"
              onClick={(e) => e.stopPropagation()}
              autoFocus
              onKeyDown={(e) =>
                handleSubmission(
                  e,
                  subTree.id,
                  inpHidden.isFolder ? true : false
                )
              }
            />
          </div>
          {hidden && (
            <div className="ml-3 my-1 flex flex-col gap-1">
              {subTree.items.map((exp) => (
                <Folder key={exp.id} subTree={exp} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  ) : (
    <div>🗄{subTree?.name}</div>
  );
};

export default Folder;
