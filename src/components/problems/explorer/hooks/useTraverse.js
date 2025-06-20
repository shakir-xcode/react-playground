const useTraverse = () => {
    const insertNode = (tree, folderId, itemName, isFolder) => {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({ id: Date.now(), name: itemName, isFolder, items: [] });
            return;
        }

        tree.items.forEach(item => insertNode(item, folderId, itemName, isFolder));
    }

    function deleteNode(tree, folderId) {
        if (tree.id === folderId && tree.isFolder) {
            delete tree.items;
            return;
        }

        tree.items.forEach(item => deleteNode(item, folderId));
    }

    return [insertNode, deleteNode]
}

export default useTraverse;