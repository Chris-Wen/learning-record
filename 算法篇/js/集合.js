//算法之数据结构： 集合 (原生js)
/**
 * ES6已经提供了新的数据结构 Set、 Map. 就是集合的概念
 */

// 数据结构：集合原生实现
// class Set {
//     constructor() {
//         super()
//     }
// }
function Sets() {
    this.dataStore = new Array()
    this.add = add
    this.remove = remove
    this.size = size
    // this.union = union
    // this.intersect = intersect
    // this.difference = difference
    this.show = show
}

function add(data) {
    if (this.dataStore.indexOf(data)===-1) {
        this.dataStore.push(data)
        return true
    } else {
        return false
    }
}

function remove(data) {
    var pos = this.dataStore.indexOf(data)
    if (pos > -1) {
        this.dataStore.splice(pos, 1)
        return true
    } else {
        return false
    }
}

function size() {
    return this.dataStore.length
}

function show() {
    return this.dataStore
}


// var names = new Sets();
// names.add("David");
// names.add("Jennifer");
// names.add("Cynthia");
// names.add("Mike");
// names.add("Raymond");

// console.log(names)


class SelfSet {
    constructor(data) {
        this.dataStore = []
        this.size = 0
        this._init(data)
    }

    _init(data) {
        if (data instanceof Array) {
            for (let i = 0; i < data.length; i++) {
                this.add(data[i])
            }
        }
    }

    add(val) {
      if (!this.dataStore.includes(val)) {
          this.dataStore.push(val)
      }
      this.countSize()
      return this
    }

    delete(val) {
        let pos = this.dataStore.indexOf(val)
        if (pos>-1) {
            this.dataStore.splice(pos, 1)
            this.countSize()
            return true
        } 
        return false
    }

    has(val) {
        return this.dataStore.includes(val)
    }

    countSize() {
        this.size = this.dataStore.length
    }
}

let set = new SelfSet([1,2,3,4])
set.add(1).add(2).add(null).add(undefined).add(NaN)

console.log(set, set.size, set.delete(1))
console.log(set.has(0), set.has('1'), set.has())
