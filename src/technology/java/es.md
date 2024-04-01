---
icon: elasticsearch1
order: 8
date: 2024-01-08
category:
  - Es使用指南
tag:
  - java es
---

# ES

## 一、ES常见操作

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



## 二、 ES面试题

### 1. 详细描述一下Elasticsearch索引文档的过程

Elasticsearch索引文档的过程涉及多个步骤，确保数据能够高效地存储并实现高可用性及可检索性。以下是Elasticsearch索引文档的一个简化版详细流程：

1. **索引请求**：
   - 客户端（如应用程序）通过HTTP RESTful API向Elasticsearch发送一个`Index Request`，包含要索引的文档内容以及索引名、可选的类型（在Elasticsearch 7.x以后版本中类型已弃用，默认为`_doc`）、和可选的文档ID。

2. **路由与分片选择**：
   - Elasticsearch根据文档ID、索引配置的分片数量和算法，计算出文档应该被路由至哪个特定的主分片。每个索引会被分成多个分片，其中有一个主分片和若干副本分片。

3. **内存缓冲（Memory Buffer）**：
   - 当分片所在节点接收到索引请求后，首先会将文档存储在内存缓冲区（Memory Buffer）中。这意味着新索引的文档并没有立即写入磁盘，而是暂时保留在内存中。

4. **Refresh Interval**：
   - Elasticsearch会定期（默认每秒一次）执行`refresh`操作，这会将内存缓冲区中的所有更改内容写入到文件系统缓存（Filesystem Cache），形成一个新的段（segment）。在这个阶段，文档变得可见，可以被搜索到。

5. **Translog**：
   - 在文档进入内存缓冲的同时，Elasticsearch还会将文档变更记录到事务日志（Transaction Log，即Translog）。Translog用于确保在发生故障时，内存中的未持久化数据不会丢失。

6. **Flush**：
   - 当达到一定条件时（例如，定时触发，默认30分钟，或者translog大小超过阈值，默认为512MB），Elasticsearch会触发`flush`操作。此时，内存缓冲区中的数据将被清空，内容被正式写入新的段，并且执行`fsync`操作，确保数据安全地刷新到磁盘上。同时，旧的translog会被截断，并创建一个新的translog来记录后续的更新。

7. **段合并（Segment Merge）**：
   - 随着时间和刷新次数的增加，会产生很多小的段。为了优化性能和磁盘空间利用率，Elasticsearch后台会定期进行段合并操作，将多个较小的段合并成一个更大的段。

8. **复制分片**：
   - 主分片完成索引和持久化后，相关的更改会被复制到相应的副本分片上，确保数据冗余和高可用性。

9. **一致性保证**：
   - 在整个过程中，Elasticsearch会维护索引和搜索的一致性，确保文档在成为可搜索状态之前，相关更改已经在集群中被妥善传播和同步。

总结来说，Elasticsearch在索引文档时采用了一种混合策略，结合内存缓冲、translog日志、周期性刷新、段管理和副本复制等多种手段，既保证了高性能写入，又确保了数据的安全性和查询效率。

### 2. 详细描述一下Elasticsearch搜索的过程

Elasticsearch搜索过程是一个分布式、多阶段的过程，旨在从分布式索引集群中快速有效地找到匹配用户查询的文档。以下是搜索过程的详细步骤：

1. **搜索请求提交**：
   - 客户端通过Elasticsearch的HTTP REST API发送搜索请求到集群中的任意节点。请求通常包括搜索的索引名称、查询条件、排序规则、分页参数等。

2. **协调节点**：
   - 接收到请求的节点作为协调节点，负责整个搜索请求的执行。它首先解析和验证请求，然后根据索引的分片分配规则确定需要搜索哪些主分片和副本分片。

3. **分发阶段**：
   - 协调节点将搜索请求广播到涉及到的所有相关分片（主分片或副本分片）。每个分片在本地执行相同的搜索请求，即使得搜索请求在分布式环境下能够并行处理。

4. **Query Phase（查询阶段）**：
   - 在每个分片上，查询请求经过分析、转换和优化，然后执行在Lucene索引之上。每个分片会在本地构建一个优先队列（堆结构），包含按评分排序的最相关的top N个结果（这里的N通常是`from + size`，也就是搜索结果的起始位置和返回的数量）。

5. **初步结果聚合**：
   - 各个分片将它们的局部最优结果集（含文档ID和评分）返回给协调节点。协调节点将这些初步结果合并成全局结果集，并依据评分进行排序。

6. **Fetch Phase（获取阶段）**：
   - 根据初步结果集中的文档ID列表，协调节点再向对应的分片发起请求以获取完整的文档内容。这个阶段可能会进一步细分为Fetch Search Phase（获取实际文档内容）和可能的Expand Search Phase（如果查询中包含额外的信息需要从原始文档中提取）。

7. **结果裁剪与排序**：
   - 协调节点收到完整文档后，可能还会执行二次排序、过滤器筛选或其他后期处理操作，最终生成满足用户请求的搜索结果。

8. **聚合处理**：
   - 如果搜索请求中包含了聚合（Aggregations）部分，Elasticsearch会在分片级别计算各聚合统计量，然后在协调节点汇总这些统计数据。

9. **响应构建与返回**：
   - 协调节点将最终的搜索结果（文档列表）、排序信息以及任何聚合结果打包成JSON格式的响应，然后返回给客户端。

在整个过程中，Elasticsearch利用其分布式特性、缓存机制以及高效的索引结构，实现了近实时搜索，即便是在大规模数据集上也能提供快速响应。同时，Elasticsearch还提供了丰富的查询DSL（Domain Specific Language），允许用户构造复杂的搜索和分析场景。

### 3. Elasticsearch的倒排索引是什么？



具体来说，在Elasticsearch的倒排索引中：

1. **词项（Term）**: 是索引的基本单位，可以是一个单词、短语或数字等可搜索的内容单元。

2. **词典（Term Dictionary）**: 包含了所有出现在文档集合中的词项，并且每个词项对应一个 postings list（也称倒排列表）。

3. **倒排列表（Posting List 或 Inverted List）**: 对于每一个词项，倒排列表记录了所有包含该词项的文档ID及其相关信息，如词频（TF）、位置信息（Position）、词项在文档中的偏移量（Offset）等。这些信息对于搜索时计算相关性得分至关重要。

4. **压缩与优化**：
   - 倒排索引为了节省存储空间和提高查找效率，会对词典和倒排列表进行压缩存储。
   - 可能采用跳跃列表、位图索引等方式加速对大量文档的遍历。

通过这样的结构，当用户发起一个搜索请求时，Elasticsearch会查找倒排索引中与查询条件匹配的词项，并迅速定位到包含这些词项的文档集合，从而实现快速的全文检索。同时，由于记录了词频和其他相关度指标，Elasticsearch还能基于这些信息进行复杂的相关性排序。

### 4. Elasticsearch是如何实现master选举的？

Elasticsearch采用了一个称为Zen Discovery的组件来进行集群的自动发现和Master节点选举。在Elasticsearch集群中，Master节点负责管理集群范围内的元数据变更，如索引创建、删除、分片分配等。

以下简述Elasticsearch Zen Discovery中Master节点选举的实现方式：

1. **集群状态 publishing 和 subscribing**：
   - 每个节点都会周期性地发布自己的集群状态到集群中的其他节点，并订阅其他节点的状态。这样每个节点都能了解到当前集群的最新状态。

2. **节点资格评估**：
   - 不是所有的节点都有资格成为Master节点，只有在elasticsearch.yml配置文件中设置了`node.master: true`且满足其他特定条件（比如最小_master_nodes设置）的节点才有资格参与Master选举。

3. **Ping 通信**：
   - 节点之间通过ping消息进行心跳检测，以此来判断节点是否存活以及网络连接状况。当一个节点连续几次未能收到另一个节点的ping消息时，会认为该节点已经离线。

4. **Master节点选举**：
   - 当当前Master节点宕机或者网络分区导致失去联系时，其他候选节点开始进行Master选举。选举过程中，节点们通过一种基于投票的机制（quorum-based voting）决定新的Master节点。
   - 每个节点都会投给自己认为最合适成为Master的节点，一般会选择集群状态最新的节点。当选票数（votes）达到一定的阈值（quorum，通常是(N/2 + 1)，其中N为集群内有资格成为Master的节点总数）时，该节点就被选为新的Master节点。

5. **稳定性和安全性**：
   - 为了避免脑裂（split-brain）问题，Elasticsearch引入了一个`discovery.zen.minimum_master_nodes`参数，要求至少有多少个节点在线并且互相可达，才能进行Master选举。这确保了在部分节点因网络故障隔离出去的情况下，不会产生两个独立的Master节点。

总之，Elasticsearch通过Zen Discovery的自动发现和Master节点选举机制，确保了在各种异常情况下集群依然能够正常运行，并保持数据一致性和完整性。

### 5. 在并发情况下，es如何保证读写一致呢？

Elasticsearch在并发情况下保证读写一致性的主要手段包括以下几个方面：

1. **乐观并发控制 (Optimistic Concurrency Control, OCC)**:
   - Elasticsearch使用版本号（version number）来跟踪文档的变化。每次文档更新时，版本号都会递增。在执行更新或删除操作时，客户端必须指定要修改的文档版本号。如果请求中的版本号与服务器上实际的文档版本号不匹配，则更新或删除操作会失败，从而避免了并发冲突。

2. **Read-After-Write Consistency**:
   - Elasticsearch在默认情况下提供了“read-your-writes”一致性，即一旦索引操作成功返回，后续对该文档的读取操作就能看到最近写入的变更。这是通过在同一个节点上完成索引和搜索请求（只要没有跨分片操作）来实现的。

3. **Refresh Interval**:
   - Elasticsearch有一个刷新间隔（refresh interval），默认为1秒。这意味着每隔一秒，内存中的变更会被刷入新的段并使之可搜索，因此大多数情况下，用户在一个相对较短的时间窗口内就可以搜索到刚刚索引的文档。

4. **Replication and Sharding**:
   - Elasticsearch通过主副分片机制确保数据冗余和高可用性。主分片完成写入后，更新会被复制到对应的副分片上。在搜索时，除非主副分片之间的同步出现问题，否则搜索请求会等待直到所有分片都准备好。

5. **Consistency Settings**:
   - 用户可以通过调整`indices.consistencyLevel`设置，选择"one"（默认）或"all"两种一致性级别。"one"意味着至少一个分片成功即可返回结果，而"all"则要求所有分片（包括主副分片）都成功才返回结果。然而，“all”级别可能会显著降低写操作的性能，并且不能保证强一致性（尤其在网络分区等极端情况下）。

综上所述，Elasticsearch通过版本控制、读写在同一节点上的优化、定期刷新机制、数据复制和分片技术以及一致性级别的调整，实现在并发环境下的较高程度的读写一致性。但需要注意的是，Elasticsearch的设计目标更多地偏向于最终一致性（Eventual Consistency），而非严格的强一致性。在分布式系统中，强一致性往往需要牺牲性能和可用性为代价。

### 6. es索引数据多了怎么办呢？ 如何调优，部署

随着Elasticsearch索引数据量的增长，可能会遇到性能下降、存储压力增大等问题。针对这种情况，可以从以下几个方面进行调优和部署策略调整：

1. **硬件升级与扩展**：
   - **增加内存（RAM）**：Elasticsearch在查询和索引过程中大量依赖内存，特别是对于Fielddata缓存、Filter缓存和Buffer Pool等。增加内存可以提升查询性能和索引速度。
   - **升级CPU**：更强的CPU处理能力有助于提高数据处理速度，尤其是对于复杂查询和聚合操作。
   - **扩容磁盘空间**：随着数据量增长，合理规划存储容量是必要的，可以考虑使用SSD硬盘，因为其I/O性能更高。
   - **横向扩展（Scale Out）**：通过添加更多的节点到集群中，分散负载，实现水平扩展。

2. **索引与分片优化**：
   - **合理设置分片数**：过多或过少的分片数都可能导致性能问题，需根据数据规模和查询需求平衡考虑。
   - **冷热数据分离**：将近期访问频繁的热数据和访问较少的冷数据分开存放，可以使用不同的索引或者ILM（Index Lifecycle Management）策略，将冷数据归档或压缩存储。
   - **时间序列数据优化**：对于日志、监控类的时间序列数据，可以采用滚动索引（index rolling）策略，每天或每周创建新的索引，旧索引可定期删除或归档。

3. **查询优化**：
   - **精准查询与过滤**：尽量减少不必要的全文检索，使用精确查询或过滤条件缩小搜索范围。
   - **使用过滤器bitset查询**：对于大型过滤条件，可以考虑使用bitset filter cache。
   - **字段数据缓存**：对频繁使用的聚合字段启用fielddata缓存，但要注意内存使用量。

4. **配置调优**：
   - **监控与调整缓存设置**：根据业务需求和资源状况，调整filter缓存、fielddata缓存、request cache等大小。
   - **开启慢查询日志**：通过分析慢查询日志，优化查询性能瓶颈。
   - **优化副本数量**：虽然副本可以提高可用性，但也会消耗更多资源。根据实际业务需求和可用性要求，适度调整副本数量。

5. **集群健康检查与监控**：
   - 使用Elasticsearch自带的Cluster Health API、Node Stats API等工具持续监控集群健康状况、节点资源使用情况和索引性能指标。
   - 配合使用Kibana、Prometheus+Grafana等可视化工具，实现可视化监控和报警。

6. **高级功能利用**：
   - 利用Shard Allocation Awareness功能，将数据在物理机层面做更好的分布，避免热点。
   - 开启跨节点缓存（Cross Node Shard Fetching）以减少网络开销。

7. **运维自动化**：
   - 使用Curator等工具进行索引管理和维护，如定期删除旧索引、调整分片大小等。
   - 结合Kubernetes、Docker等容器化技术，实现资源动态调度和弹性伸缩。

总的来说，针对Elasticsearch数据量增多的问题，需要综合运用硬件升级、架构优化、查询调优、配置调整、运维自动化等多种手段，确保系统的稳定、高效运行。同时，良好的数据模型设计和数据生命周期管理也是关键环节。

### 7. Es对于大数据量（上亿量级）的聚合如何实现？

对于上亿量级的大数据聚合，Elasticsearch提供了多种优化机制和方法来实现高效、准确的聚合操作：

1. **近似聚合(Aggregations with Approximation)：**
   - `Cardinality` 度量是一个非常有效的聚合方式，尤其是在大数据量下。它提供了基于HyperLogLog (HLL) 算法的字段基数估计，能够在保持相对准确的同时大幅减少内存占用。这对于需要计算大量不同值的数量而不关注具体值本身的应用场景特别有用。

2. **Bucket Aggregations：**
   - 对于分桶聚合（如`terms`聚合），可以设定`size`限制返回的桶数，以及`shard_size`控制每个分片上桶的数量，防止内存溢出。
   - 使用`composite`聚合代替`terms`聚合，它能在内存中进行流式处理，特别是在处理大量唯一键时更加高效。

3. **Pipeline Aggregations：**
   - Pipeline聚合可以在聚合结果的基础上进一步处理数据，可以用于优化内存使用和计算效率。

4. **深度分页与Scroll API：**
   - 对于大型聚合任务，使用Scroll API可以实现高效的深分页，而不是一次性加载所有数据，这有利于避免内存溢出问题。

5. **资源限制：**
   - 设置合适的内存分配，特别是对于聚合操作，可以限制聚合上下文的内存使用，防止无限制增长。
   - 使用`aggs.breaker.type`和`indices.breaker.total.use_real_memory`等设置，对聚合操作的内存使用进行硬性限制。

6. **批量处理与脚本优化：**
   - 如果聚合中使用到了脚本，应尽可能优化脚本逻辑，减少计算复杂度。
   - 对于大量数据的聚合，可以考虑采用批处理的方式，将大任务拆分为多个小任务，逐个处理后再合并结果。

7. **预聚合(Partial Aggregation)：**
   - 在节点级别先执行部分聚合，然后再在协调节点上聚合结果，减轻单个节点的压力。

8. **索引优化与分割：**
   - 数据分片策略也很重要，合理的分片策略可以帮助均匀分布负载，提升聚合效率。
   - 对于具有明显时间特征的数据，可以考虑时间序列索引模式，并利用ILM（Index Lifecycle Management）进行老化和归档，减少聚合所需扫描的数据量。

9. **硬件资源配置与集群扩展：**
   - 根据负载适当增加硬件资源，如CPU、内存和存储，并通过横向扩展集群节点数来分散负载和提高并发处理能力。

10. **缓存策略：**
    - 利用Elasticsearch内置的缓存机制，如Field Data缓存和Filter缓存，对于重复的聚合请求可以显著提高性能。

综上所述，Elasticsearch在处理上亿量级的大数据聚合时，需要结合上述策略进行优化配置和设计，以确保聚合性能、资源有效利用以及系统的稳定性。同时，始终监控集群健康状况和性能指标，以便及时发现问题并作出相应调整。

