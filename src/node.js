

class NNode {

  constructor(parent) {
    this.parent = parent;
    this.children = [];
  }

  parse(content) {
    let root = new NNode(null);

    let buff = ""
    for(let char of content) {
      if(char == '{') {
        
      }
      buff << char;
    }
    return root;
  }
}
