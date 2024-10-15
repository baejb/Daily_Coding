function solution(nodeinfo) {
    var answer = [[], []];
    let nodes = nodeinfo.map((node, index) => [...node, index + 1]);
    nodes.sort((a, b) => b[1] - a[1] || a[0] - b[0]);

    let root = { x: nodes[0][0], num: nodes[0][2], left: null, right: null };

    function insertNode(parent, child) {
        if (child[0] < parent.x) {
            if (!parent.left) parent.left = { x: child[0], num: child[2], left: null, right: null };
            else insertNode(parent.left, child);
        } else {
            if (!parent.right) parent.right = { x: child[0], num: child[2], left: null, right: null };
            else insertNode(parent.right, child);
        }
    }

    for (let i = 1; i < nodes.length; i++) {
        insertNode(root, nodes[i]);
    }

    function preOrder(node) {
        if (!node) return;
        answer[0].push(node.num);
        preOrder(node.left);
        preOrder(node.right);
    }

    function postOrder(node) {
        if (!node) return;
        postOrder(node.left);
        postOrder(node.right);
        answer[1].push(node.num);
    }

    preOrder(root);
    postOrder(root);

    return answer;
}
