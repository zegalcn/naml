
class Parser {

  REGEX = /\{(\w+)\}(\"\w+\"|\'\w+\')?/

  constructor(content) {
    this.content = content
  }

  parse() {
    
  }

  match(line) {
    arg = line.match(REGEX)
  }
}