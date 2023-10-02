class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// const depthFirstValues = (root) => {
//   // iterative approch

//   const values = [];
//   const stack = [root];

//   if (!root) return [];

//   while (stack?.length > 0) {
//     const current = stack.pop();
//     values.push(current.val);

//     if (current?.right) {
//       stack.push(current.right);
//     }
//     if (current?.left) {
//       stack.push(current.left);
//     }
//   }

//   return values;
// };

const depthFirstValues = (root) => {
  // recursive approch

  if (root === null) return [];

  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);

  const ans = [root.val, ...leftValues, ...rightValues];
  console.log('ans ', ans);
  return ans;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right = f;

//      a
//     / \
//    b   c
//   / \   \
// d    e    f

const breadthFirstValues = (root) => {
  const ans = [];
  const queue = [root];

  if (root === null) return [];

  while (queue?.length > 0) {
    let curr = queue?.pop();

    ans.push(curr?.val);

    if (curr?.left) {
      queue.splice(0, 0, curr.left);
    }

    if (curr?.right) {
      queue.splice(0, 0, curr.right);
    }
  }

  return ans;
};

const binarySearchTarget = (root, target) => {
  // iterative approch
  const queue = [root];

  if (root === null) return false;

  while (queue?.length > 0) {
    let curr = queue?.pop();

    if (curr?.val === target) return true;

    if (curr?.left) {
      queue.splice(0, 0, curr.left);
    }

    if (curr?.right) {
      queue.splice(0, 0, curr.right);
    }
  }

  return false;
};

const binarySearchTargetRecrsive = (root, target) => {
  // recursive approch
  if (root === null) return false;
  if (root.val === target) return true;

  return (
    binarySearchTargetRecrsive(root.left, target) ||
    binarySearchTargetRecrsive(root.right, target)
  );
};

console.log(binarySearchTargetRecrsive(a, 'e'));
