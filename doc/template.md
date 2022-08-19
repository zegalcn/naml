

处理流程

```mermaid
graph LR
  开始((开始))
  结束((结束))

  执行01("查找{word}")
  执行11[替换SSML Block]
  执行71[查找引号对]
  执行72[替换Block]
  判断11["word是否是break<br>满足/b\d*[ms|s]?/"]
  判断21["word是否是..."]
  判断71["word是否符合char定义<br>{char,<role,>}"]

  报错11["break格式错误"]
  报错71["未找到匹配的引号对"]
  判断99{EOF?}

  开始 --> 执行01
  执行01 -- b --> 判断11
  判断11 -- y --> 执行11 ---> 判断99
  判断11 -- N --> 报错11 ---> 判断99

  执行01 -- x --> 判断21
  判断21 -- y --> 执行21 ---> 判断99
  判断21 -- N --> 报错21 ---> 判断99

  执行01 -- N --> 判断71
  判断71 -- Y --> 执行71
  执行71 -- y --> 执行72 ---> 判断99
  执行71 -- n --> 报错71 ---> 结束

  判断99 -- Y --> 结束
  判断99 -. N .-> 执行01
```

```ruby
{ character | style, styledegree, role }
```

```ruby
# strenght: none、x-weak、weak、medium、strong、x-strong
# time: 500ms、2s
{ b/break | strenght/time }
```

```ruby
# type: Leading、Tailing、Sentenceboundary
# value: 500ms、2s
{ s/silence | type, value}
```

