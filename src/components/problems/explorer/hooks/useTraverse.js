const useTraverse = () => {
    const insertNode = (tree, folderId, itemName, isFolder) => {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({ id: Date.now(), name: itemName, isFolder, items: [] });
            return;
        }

        tree.items.forEach(item => insertNode(item, folderId, itemName, isFolder));
    }

    return [insertNode]
}

export default useTraverse;