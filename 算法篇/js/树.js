//树是一种非线性的数据结构，以分层的方式存储数据。树被用来存储具有层级关系的数据

/**
 * 二叉树特性
 * 1、最多两个子节点
 * 2、左节点比右节点更小
 */

//查找正确插入点的算法
/* 
    (1) 设根节点为当前节点。
    (2) 如果待插入节点保存的数据小于当前节点，则设新的当前节点为原节点的左节点；反之，执行第 4 步。
    (3) 如果当前节点的左节点为 null ，就将新的节点插入这个位置，退出循环；反之，继续执行下一次循环。
    (4) 设新的当前节点为原节点的右节点。
    (5) 如果当前节点的右节点为 null ，就将新的节点插入这个位置，退出循环；反之，继续执行下一次循环。 
*/

function Node(data, left, right) {
    this.data = data
    this.left = left
    this.right = right

    Node.prototype.show = function() {
        return this.data
    }
}

function BST() {
    this.root = null
    
    //插入
    BST.prototype.insert = function(data) {
        var n = new Node(data, null, null)
        if (this.root === null) {
            this.root = n
        } else {
            var current = this.root
            var parent
            while(true) {
                parent = current
                if (data < current.data) { //左节点情况
                    current = current.left  // 当前节点更新，若子节点被占用，继续循环
                    if (current === null) { //子左节点不存在
                        parent.left = n
                        break;
                    }
                } else {   //右节点情况
                    current = current.right
                    if (current === null) {
                        parent.right = n
                        break;
                    }
                }
            }
        }
        return this
    }

    /**
     * 遍历BST的三种方式
     * 1、中序：以升序访问树中所有节点，先访问左节点，再访问根节点，最后访问右节点
     * 2、先序：先访问根节点，然后以同样方式访问左子树和右子树
     * 3、后序：先访问叶子节点，从左子树到右子树，再到根节点
     */  
    
    //中序遍历，从小到大自然排序
    BST.prototype.inOrder = function(node) {
        if (node !== null) {
            this.inMOrder(node.left)
            console.log(node.show())
            this.inMOrder(node.right)
        }
    }

    //先序遍历
    // inOrder() 和 preOrder() 方法的唯一区别，就是 if 语句中代码的顺序
    BST.prototype.preOrder = function(node) {
        if (node !== null) {
            console.log(node.show())
            this.inMOrder(node.left)
            this.inMOrder(node.right)
        }
    }

    //后序遍历
    BST.prototype.postOrder = function(node) {
        if (node !== null) {
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.show())
        }
    }

    BST.prototype.getMin = function() {
        var current = this.root
        while(current.left !== null) {
            current = current.left
        }
        return current.data;
    }

    BST.prototype.getMax = function() {
        var current = this.root
        while(current.right !== null) {
            current = current.right
        }
        return current.data;
    }

    BST.prototype.find = function(data) {
        var current = this.root
        while(current !== null) {
            if (current.data === data) {
                return current
            } else {
                current = data < current.data ? current.left : current.right
            } 
        }
        return null
    }

    //删除节点
    /*
     *  其复杂程度取决于删除哪个节点。如果删除没有子节点
     *  的节点，那么非常简单。如果节点只有一个子节点，不管是左子节点还是右子节点，就变
     *  得稍微有点复杂了。删除包含两个子节点的节点最复杂。 
     */
    BST.prototype.remove = function(data) {
        var current = this.root
        var parent = null
        while(current !== null) {
            if (current.data === data) {
                if (current) {
                    current.left && this.removeNode(current.left, parent)
                    current.right && this.removeNode(current.right, parent)
                    return true
                } else {
                    return false
                }
            } else {
                parent = current
                current = data < current.data ? current.left : current.right
            } 
        }
        
    }

    BST.prototype.removeNode = function(node) {

    }
}

// 二叉树结构及插入
var bst = new BST()
var data = [100, 200, 90, 110, 91, 201]
for (let i = 0; i < data.length; i++) {
    bst.insert(data[i])    
}
console.log(bst)
// bst.inOrder(bst.root)
// bst.preOrder(bst.root) 
// bst.postOrder(bst.root)
console.log(bst.find(110)) 
console.log(bst.find(200)) 
console.log(bst.find('0'))  

