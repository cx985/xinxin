---
icon: interview
order: 6
category:
  - Es使用指南
tag:
  - java es
---

# ES

## ES常见操作

### 1. 建表

```es
PUT statistic_result_detailinfo
{ 
 "mappings": {
  "statistic_result_detailinfo": {
   "dynamic": "false",
   "properties": {
    "ID": {
     "type": "keyword"
    },
    "GATHER_PERSON": {
     "type": "keyword"
    },
    "ITEM_CODE": {
     "type": "keyword"
    },
    "ITEM_NAME": {
     "type": "keyword"
    },
    "PITEM_NAME": {
     "type": "keyword"
    },
    "TOTAL": {
     "type": "long"
    },
    "DELTOTAL": {
     "type": "long"
    },
    "IMPTIME": {
     "type": "date",
     "format": "yyyy-MM-dd HH:mm:ss"
    },
    "DATAID": {
     "type": "keyword"
    },
    "ACCOUNT_RECORD_ID": {
     "type": "keyword"
    },
    "STATISTIC_INFO": {
     "type": "keyword"
    }
   }
  }
 },
 "settings": {
  "number_of_shards": "1",
  "number_of_replicas": "1"
 }
}
```

生产环境常用

- 1.建立create-template.sh文件

- 2.内容如下

  ```she
  #!/bin/bash
   
  cd ./
   
  #这样就会把所有的文件名保存到 ls.log 文件中
  ls *.json > ls.log
  
  for i in $(cat ls.log)
  do
    echo $i
    #有用户名密码的执行方式
    #curl -k --user gaonaite:Ceye.123 -H "Content-Type: application/json" -X PUT -d @$i "https://154.154.0.88:24100/_template/${i/.json/}"
    #无密码执行方式
    curl -H "Content-Type: application/json" -X PUT -d @$i "http://192.168.3.203:9200/_template/${i/.json/}"
  done
  
  rm -f ls.log
  
  echo 'done!!!'
  
  
  ```
  
  

### 2. 复杂查询

```java
get statistic_unit_total/_search
{
  "size": 0,
  "query": {
    "bool": {
      "must": [
                {
          "range": {
            "CREATEDATE": {
              "gte": "2023-01-03 00:00:00",
              "lte": "2024-01-03 23:59:59"
            }
          }
        },
        {
          "term": {
            "APPTYPE": {
              "value": "Jstx"
            }
          }
        },
        {
          "term": {
            "TYPE": {
              "value": "1"
            }
          }
        }
    ]
    }
  },
  "aggs": {
    "group": {
      "terms": {
        "script": " doc['UNIT'].value + '|' + doc['APPTYPE'].value + '-' + doc['APPID'].value",
        "size": 20000
      },
      "aggs": {
        "count": {
          "sum": {
            "field": "TOTAL"
          }
        }
      }
    }
  }
}
```



### 3. 查询字段不为空的数据（类型不能是text）

```es
get statistic_unit_total/_search
{
  "query": {
    "bool": {
      "must_not": {
        "term": {
          "COL": ""
        }
      }
    }
  },
  "size": 1000
}
```

