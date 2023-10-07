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

// tree sum recursive
// const binaryTreeTotalSum = (root) => {
//   if (root === null) return 0;

//   return (
//     root.val + binaryTreeTotalSum(root.left) + binaryTreeTotalSum(root.right)
//   );
// };

// tree sum iterative
const binaryTreeTotalSum = (root) => {
  const stack = [root];
  let sum = 0;

  if (root === null) return 0;

  while (stack.length > 0) {
    let curr = stack.pop();

    sum += curr?.val;

    if (curr?.left) {
      stack.push(curr.left);
    }
    if (curr?.right) {
      stack.push(curr.right);
    }
  }
  return sum;
};

// const binaryTreeMinValue = (root) => {
//   // iterative solution
//   if (root === null) return null;

//   let minimumVal = Number.POSITIVE_INFINITY;
//   const stack = [root];

//   while (stack.length > 0) {
//     let curr = stack.pop();

//     minimumVal = minimumVal < curr.val ? minimumVal : curr.val;

//     if (curr.left) {
//       stack.push(curr.left);
//     }

//     if (curr.right) {
//       stack.push(curr.right);
//     }
//   }

//   return minimumVal;
// };

const binaryTreeMinValue = (root) => {
  // recursive solution

  if (root === null) return Infinity;

  let leftValues = binaryTreeMinValue(root.left);
  let rightValues = binaryTreeMinValue(root.right);

  return Math.min(root.val, leftValues, rightValues);
};

const aa = new Node(3);
const bb = new Node(16);
const cc = new Node(4);
const dd = new Node(4);
const ee = new Node(2);
const ff = new Node(1);

aa.left = bb;
aa.right = cc;

bb.left = dd;
bb.right = ee;

cc.right = ff;

//           3
//         /   \
//       16     4
//      /  \     \
//     4    2     1

// const binaryTreeMaxPathSum = (root) => {
//   if (root === null) return 0;

//   let leftValues = binaryTreeMaxPathSum(root.left);
//   let rightValues = binaryTreeMaxPathSum(root.right);

//   // return root.val + Math.max(leftValues) + Math.min(rightValues);
// };

// const binaryTreeMaxPathSum = (root) => {
//   // iterative
//   let maxPathSum = 0;
//   let stack = [root];

//   if (root === null) return maxPathSum;

//   while (stack.length > 0) {
//     let curr = stack.pop();

//     maxPathSum += curr?.left?.val || 0 + curr?.right?.val || 0;

//     if (curr.left) {
//       stack.push(curr.left);
//     }

//     if (curr.right) {
//       stack.push(curr.right);
//     }
//   }
//   return root.val + maxPathSum;
// };

const binaryTreeMaxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;

  const maxChildPath = Math.max(
    binaryTreeMaxPathSum(root.left),
    binaryTreeMaxPathSum(root.right)
  );
  return root.val + maxChildPath;
};

console.debug(' the minimumVal ', binaryTreeMaxPathSum(aa));
