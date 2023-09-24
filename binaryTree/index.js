class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// const depthFirstValues = (root) => {
//   // iteration approch

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
  // recursion approch
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

depthFirstValues(a);
