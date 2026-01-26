class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

//create Root and Nodes
const rootNodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");
const nodeF = new Node("F");
const nodeG = new Node("G");


//Child of node A (root)
rootNodeA.left = nodeB;
rootNodeA.right = nodeC;

//child of node B

nodeB.left = nodeD;
nodeB.right=nodeE;

//Child Of Node E
nodeE.left = nodeF;
nodeE.right=nodeG;

console.log(`Child of node E = ${nodeG.data}`)