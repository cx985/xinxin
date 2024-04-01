---
icon: SpringCloud
order: 10
date: 2024-03-25
category:
  - springcloud
tag:
  - springcloud

---

# SpringCloud

## 1. springcloud 对应的组件？

- eureka
  - 注册中心
- ribbon
  - 负载均衡
- openfeign
  - 服务调用
- hystrix
  - 断路器
- zuul
  - 网关
- gateway
  - 新一代网关
- SpringCloud Config
  - 分布式配置中心
- SpringCloud Bus
  - 消息总线
- SpringCloud Stream
  - 消息驱动
- SpringCloud Sleuth
  - 分布式请求链路追踪
- SpringCloud Alibaba Nacos
  - 服务注册和配置中心
- SpringCloud Alibaba Sentinel
  - 服务的熔断和限流
- SpringCloud Alibaba Seata
  - 分布式事务



## 2. CAP&BASE理论

### 1. CAP

- Consistency
  - 一致性
  - 所有节点访问同一份最新的数据副本
- Availability
  - 可用性
  - 非故障的节点在合理的时间内返回合理的响应
- Partition Tolerance
  - 分区容错性
  - 分布式系统出现网络分区的时候，仍然能够对外提供服务
- **CAP 理论中分区容错性 P 是一定要满足的，在此基础上，只能满足可用性 A 或者一致性 C**



- 常见注册中心
  - zookeeper保证的是cp
    - 任何时刻对 ZooKeeper 的读请求都能得到一致性的结果
    - zookeeper 不保证每次请求的可用性
  - eureka保证的是ap
    -  Eureka 保证即使大部分节点挂掉也不会影响正常提供服务，只要有一个节点是可用的就行了
  - nacos 支持ap和cp

### 2. BASE理论

- Basically Available
  - 基本可用
  - 分布式系统在出现不可预知故障的时候，允许损失部分可用性。但是，这绝不等价于系统不可用
- Soft-state
  - 软状态
  - 允许系统中的数据存在中间状态（**CAP 理论中的数据不一致**），并认为该中间状态的存在不会影响系统的整体可用性，即允许系统在不同节点的数据副本之间进行数据同步的过程存在延时
- Eventually Consistent
  - 最终一致性
  - 最终一致性强调的是系统中所有的数据副本，在经过一段时间的同步后，最终能够达到一个一致的状态
- 核心思想
  - 即使无法做到强一致性，但每个应用都可以根据自身业务特点，采用适当的方式来使系统达到最终一致性



## 3. SpringCloud Gateway

### 1. spring cloud gateway 支持限流吗

- 支持，限流是一种常见的微服务网关功能，用于控制对后端服务的请求流量，以防止过载和保护后端服务

- 内置的限流过滤器是基于令牌桶算法或漏桶算法实现的

  - 令牌桶算法：允许一定的突发流量
  - 漏桶算法则可以平滑请求流量

- 实现

  - 方法一

    - 使用RequestRateLimiterGatewayFilterFactory来配置基于令牌桶算法的限流策略

      ```yaml
      spring:
        cloud:
          gateway:
            routes:
              - id: my_route
                uri: http://example.org
                predicates:
                  - Path=/foo/**
                filters:
                  - name: RequestRateLimiter
                    args:
                      key-resolver: "#{@userKeyResolver}"
                      redis-rate-limiter.replenishRate: 1
                      redis-rate-limiter.burstCapacity: 3
      
      ```

  - 方法二

    - 自定义限流过滤器，实现GatewayFilter接口

      ```java
      @Component
      public class CustomRateLimiterFilter implements GatewayFilter, Ordered {
          // 实现限流逻辑
      }
      
      ```

      

## 4. 分布式ID

### 1. 雪花算法

雪花算法（Snowflake）是一种分布式唯一ID生成算法，它的实现原理是基于Twitter的Snowflake算法。Snowflake算法的核心思想是将一个64位的整数ID分成三部分：时间戳、机器ID和序列号。具体实现如下：

1. 时间戳部分（41位）：记录生成ID的时间，精确到毫秒级，可以用69年。

2. 机器ID部分（10位）：记录机器的ID，可以分配1024台机器。

3. 序列号部分（12位）：记录同一毫秒内生成的ID序号，可以生成4096个ID。

Snowflake算法的优点包括：

1. 分布式唯一性：每个ID都是唯一的，且可以在分布式系统中生成。

2. 高性能：生成ID的速度很快，不会影响系统的性能。

3. 简单易用：Snowflake算法的实现比较简单，可以轻松集成到各种系统中。

Snowflake算法的缺点包括：

1. 时钟回拨问题：如果系统时钟发生回拨，可能会导致生成的ID不唯一。

2. 依赖机器ID：需要为每台机器分配一个唯一的ID，如果机器数量过多会增加管理成本。

3. 有限的时间范围：由于时间戳部分只有41位，所以Snowflake算法能够使用的时间范围是有限的。

总的来说，雪花算法是一种简单高效的分布式ID生成算法，适用于大多数分布式系统。但在实际应用中需要注意时钟回拨问题和机器ID的管理。

### 2. 美团叶子算法

- leaf- 解决了雪花算法时钟回拨问题

## 5. 分布式锁

- redisson



## 6. 分布式事务

### 1. 2PC 3PC TCC了解么

- 2pc

  - 两阶段提交，将事务的提交过程分为资源准备和资源提交提交两个阶段，并且由事务协调者来协调所有事物参与者；如果准备阶段所有事物参与者都预留资源成功，则进行第二阶段的资源提交，否则事物协调者回滚资源

  - 第一阶段：准备阶段
  - 第二阶段：提交阶段
    - 事物的提交
    - 事物的回滚
  - 缺点
    - 性能问题
    - 可靠性问题
    - 数据一致性问题
    - 二阶段无法解决的问题
      - 协调者在发出 commit 消息之后宕机，而唯一接收到这条消息的参与者同时也宕机了，那么即使协调者通过选举协议产生了新的协调者，这条事务的状态也是不确定的，没人知道事务是否被已经提交

- 3pc

  - 三阶段提交协议

  - 对2pc的改进，在第一阶段和第二阶段中插入了一个准备阶段
  - 在协调者和参与者中引入超时机制
  - 3pc会分为3个阶段
    - 准备阶段
    - 预提交阶段
      - 执行事务
      - 或者中断事务
    - 提交阶段
      - 提交事务
      - 或者中断事务
  - 优缺点
    - 优点
      - 降低了阻塞范围，并且在等待超时后，协调者或参与者会中断事务，避免了协调者单点问题，
    - 缺点
      - 数据不一致问题依然存在

- TCC

  - 全称：Try Confirm Cancel；是应用层的两阶段提交
  - 核心思想
    - 针对每个操作，都要实现对应的确认和补偿操作，也就是业务逻辑的每个分支都需要实现try、confirm、cancel三个操作

  - tcc的执行流程可以分为两个阶段
    - 第一阶段
      - try: 业务系统做检测并预留资源，比如常见的下单，在try阶段是将下单的库存给锁住
    - 第二阶段
      - 根据第一阶段的结果决定是执行confirm还是cancel
      - cnonfirm : 执行真正的业务
      - cancle: 是对try阶段预留资源的释放（出问题，释放锁）

## 7. 负载均衡

### 1. 负载均衡算法

- 随机法
- 轮询
- 加权轮询
- 加权随机
- 最小并发连接
- 哈希算法

## 8. 服务限流

### 1. 固定窗口计数器算法

- 固定窗口其实就是时间窗口，固定窗口计数器算法规定了单位时间处理的请求数量
- 不推荐使用，体验差

### 2. 滑动窗口计数器算法

- 是固定窗口计数器的升级版
- 它把时间以一定比例分配
- 当滑动窗口的格子划分的越多，滑动窗口的滚动就越平滑，限流的统计就会越精准

### 3.漏桶算法

- 我们可以把发请求的动作比作成注水到桶中，我们处理请求的过程可以比喻为漏桶漏水。我们往桶中以任意速率流入水，以一定速率流出水。当水超过桶流量则丢弃，因为桶容量是不变的，保证了整体的速率
- 不推荐使用

### 4. 令牌桶算法

1. 基本原理：
   - 令牌桶算法维护一个固定容量的桶，桶中以固定速率生成令牌，每个令牌代表一个请求的处理权限。
   - 当请求到达时，需要从桶中获取一个令牌，如果桶中有足够的令牌，则允许处理该请求；如果桶中没有足够的令牌，则拒绝该请求或者将请求放入队列中等待令牌。
   - 桶中的令牌数量有上限，如果桶满了，新生成的令牌将被丢弃。
2. 实现限流的设计过程：
   - 初始化令牌桶，设置桶的容量和令牌生成速率。
   - 定时以固定速率向桶中添加令牌，直到桶满为止。
   - 当请求到达时，尝试从桶中获取一个令牌，如果成功则处理该请求，否则拒绝请求或者将请求放入队列中等待。
3. 不足之处：
   - 令牌桶算法对于突发流量的处理能力相对较弱，因为桶中的令牌数量有限，无法应对短时间内大量的请求。
   - 令牌桶算法需要定时地生成令牌，这可能会引入额外的系统开销。
4. 更好的方案：
   - 漏桶算法：漏桶算法也是一种常用的限流算法，它通过固定速率的漏桶来控制请求的处理速度。与令牌桶算法相比，漏桶算法更适合对请求的突发流量进行限制。
   - 基于漏桶算法的限流器可以更好地应对突发流量，并且可以通过动态调整漏桶的速率来适应不同的流量情况。



## 9 . openFeigin

### 1. 使用

- 主启动类增加 @EnableFeiginClients
- 业务逻辑接口 @FeignClient

```java
@Component
@FeignClient(value = "CLOUD-PAYMENT-SERVICE")
public interface PaymentFeignService
{
    @GetMapping(value = "/payment/get/{id}")
    CommonResult<Payment> getPaymentById(@PathVariable("id") Long id);
}

```

### 2. 超时时间

- openFeigin默认的超时时间是1秒钟。这意味着如果调用的服务在1秒内没有响应，openFeign将会抛出超时异常，需要修改配置

 ```yaml
 feign:
   client:
     config:
       default:
        ## 连接超时时间，设置了5秒
         connectTimeout: 5000
         ## 读取的超时时间，设置了10秒
         readTimeout: 10000
 
 ```



## 10 Hystrix

### 1. 服务降级

- 定义
  - 服务器忙，请稍后再试，不让客户端等待并立刻返回一个友好提示，fallback
- 哪些情况会发生降级
  - 程序运行异常
  - 超时
  - 服务熔断触发服务降级
  - 线程池/信号量打满也会导致服务降级

### 2. 服务熔断

- 定义

  - 类似保险丝达到最大服务访问后，直接拒绝访问，拉闸限电，然后调用服务降级的方法并返回友好提示

  - 服务的降级-->进而熔断-->恢复调用链路

### 3. 服务限流

- 定义
  - 秒杀高并发等操作，严禁一窝蜂的过来拥挤，大家排队，一秒钟N个，有序进行



### 4. 注解

#### 1. @HystrixCommand

- 服务降级
- 需要有一个兜底的方法

```java
@HystrixCommand(fallbackMethod = "paymentInfo_TimeOutHandler",commandProperties = {
            @HystrixProperty(name="execution.isolation.thread.timeoutInMilliseconds",value="3000")
    })
public String paymentInfo_TimeOut(Integer id){}

```



#### 2. @DefaultProperties(defaultFallback = "")

- @HystrixCommand 需要在每个方法配置一个，太繁琐

```java
@DefaultProperties(defaultFallback = "payment_Global_FallbackMethod")
public class PaymentHystirxController{}

```



## 11. sentinel

### 1. @SentinelResource

- 可以对资源进行限流、熔断、降级等操作

  ```java
  @SentinelResource(value = "resourceName", blockHandler = "handleBlock")
  public String getResource() {
      // 方法逻辑
  }
  
  ```

  在上面的例子中，`@SentinelResource` 注解标识了 `getResource` 方法为 Sentinel 的资源，其中 `value` 属性指定了资源的名称。另外，通过 `blockHandler` 属性指定了当资源被流控时的处理方法，即 `handleBlock` 方法。这样就可以实现对资源的限流操作。

  除了 `blockHandler` 属性外，`@SentinelResource` 注解还支持其他属性，比如 `fallback`、`defaultFallback` 等，用于指定资源被降级或熔断时的处理方法



## 12 . Seata

### 1. 使用

- @GlobalTransactional



### 2. 三大组件

- TC
  - 全局事务协调器，负责全局事务的协调和管理
  - Transaction Coordinator
- TM
  - 事务管理器，负责全局事务的发起、提交和回滚
  - Transaction Manager
- RM
  - 资源管理器，负责管理分支事务的生命周期
  - Resource Manager

- 流程
  - TM 开启分布式事务（TM 向 TC 注册全局事务记录）；
  - 按业务场景，编排数据库、服务等事务内资源（RM 向 TC 汇报资源准备状态 ）；
  - TM 结束分布式事务，事务一阶段结束（TM 通知 TC 提交/回滚分布式事务）；
  - TC 汇总事务信息，决定分布式事务是提交还是回滚；
  - TC 通知所有 RM 提交/回滚 资源，事务二阶段结束。

