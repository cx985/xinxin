---
icon: markdown
order: 1
category:
  - linux
tag:
  - linux
---

# linux

## linux命令

### tar

- 解压文件
  - z：表示使用gzip进行压缩或解压
  - x: 表示提前(解压)文件
  - v: 表示显示详细的操作过程，即输出解压/压缩的文件列表
  - f: 表示指定归档文件的名称
  - c: 表示创建新的.tar文件
  
  常规解压
  ```linux
      tar -zxvf test.tar.gz
  ```
  
  解压到指定目录
  ```linux
      tar -zxvf test.tar.gz -C /home/test
  ```

- 压缩文件(压缩名称在前，后面是具体要压缩文件)
```linux
    tar -zcvf test.tar.gz test.txt
 ```
 