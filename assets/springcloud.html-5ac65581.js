const l=JSON.parse('{"key":"v-83360fd8","path":"/technology/java/springcloud.html","title":"SpringCloud","lang":"zh-CN","frontmatter":{"icon":"SpringCloud","order":10,"date":"2024-03-25T00:00:00.000Z","category":["springcloud"],"tag":["springcloud"],"description":"SpringCloud 1. springcloud 对应的组件？ 服务注册发现 nacos （cloud alibaba） consul （cloud最新） eureka (淘汰) 负载均衡 LoadBalancer (cloud最新) ribbon (淘汰) 服务调用 openFeign 断路器 CircuitBreaker （cloud最新） hystrix (淘汰) 网关 gateway 分布式链路追踪 Sleuth(Micrometer) + ZipKin SpringCloud Alibaba Nacos 服务注册和配置中心 SpringCloud Alibaba Sentinel 服务的熔断和限流 SpringCloud Alibaba Seata 分布式事务","head":[["meta",{"property":"og:url","content":"https://blog.cx985.top/technology/java/springcloud.html"}],["meta",{"property":"og:site_name","content":"辰晨沉"}],["meta",{"property":"og:title","content":"SpringCloud"}],["meta",{"property":"og:description","content":"SpringCloud 1. springcloud 对应的组件？ 服务注册发现 nacos （cloud alibaba） consul （cloud最新） eureka (淘汰) 负载均衡 LoadBalancer (cloud最新) ribbon (淘汰) 服务调用 openFeign 断路器 CircuitBreaker （cloud最新） hystrix (淘汰) 网关 gateway 分布式链路追踪 Sleuth(Micrometer) + ZipKin SpringCloud Alibaba Nacos 服务注册和配置中心 SpringCloud Alibaba Sentinel 服务的熔断和限流 SpringCloud Alibaba Seata 分布式事务"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-14T13:53:44.000Z"}],["meta",{"property":"article:author","content":"辰晨沉"}],["meta",{"property":"article:tag","content":"springcloud"}],["meta",{"property":"article:published_time","content":"2024-03-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-14T13:53:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringCloud\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-25T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-14T13:53:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"辰晨沉\\"}]}"]]},"headers":[{"level":2,"title":"1. springcloud 对应的组件？","slug":"_1-springcloud-对应的组件","link":"#_1-springcloud-对应的组件","children":[]},{"level":2,"title":"2. CAP&BASE理论","slug":"_2-cap-base理论","link":"#_2-cap-base理论","children":[{"level":3,"title":"1. CAP","slug":"_1-cap","link":"#_1-cap","children":[]},{"level":3,"title":"2. BASE理论","slug":"_2-base理论","link":"#_2-base理论","children":[]}]},{"level":2,"title":"3. SpringCloud Gateway","slug":"_3-springcloud-gateway","link":"#_3-springcloud-gateway","children":[{"level":3,"title":"1. spring cloud gateway 支持限流吗","slug":"_1-spring-cloud-gateway-支持限流吗","link":"#_1-spring-cloud-gateway-支持限流吗","children":[]}]},{"level":2,"title":"4. 分布式ID","slug":"_4-分布式id","link":"#_4-分布式id","children":[{"level":3,"title":"1. 雪花算法","slug":"_1-雪花算法","link":"#_1-雪花算法","children":[]},{"level":3,"title":"2. 美团叶子算法","slug":"_2-美团叶子算法","link":"#_2-美团叶子算法","children":[]}]},{"level":2,"title":"5. 分布式锁","slug":"_5-分布式锁","link":"#_5-分布式锁","children":[]},{"level":2,"title":"6. 分布式事务","slug":"_6-分布式事务","link":"#_6-分布式事务","children":[{"level":3,"title":"1. 2PC 3PC TCC了解么","slug":"_1-2pc-3pc-tcc了解么","link":"#_1-2pc-3pc-tcc了解么","children":[]}]},{"level":2,"title":"7. 负载均衡","slug":"_7-负载均衡","link":"#_7-负载均衡","children":[{"level":3,"title":"1. 负载均衡算法","slug":"_1-负载均衡算法","link":"#_1-负载均衡算法","children":[]}]},{"level":2,"title":"8. 服务限流","slug":"_8-服务限流","link":"#_8-服务限流","children":[{"level":3,"title":"1. 固定窗口计数器算法","slug":"_1-固定窗口计数器算法","link":"#_1-固定窗口计数器算法","children":[]},{"level":3,"title":"2. 滑动窗口计数器算法","slug":"_2-滑动窗口计数器算法","link":"#_2-滑动窗口计数器算法","children":[]},{"level":3,"title":"3.漏桶算法","slug":"_3-漏桶算法","link":"#_3-漏桶算法","children":[]},{"level":3,"title":"4. 令牌桶算法","slug":"_4-令牌桶算法","link":"#_4-令牌桶算法","children":[]}]},{"level":2,"title":"9 . openFeigin","slug":"_9-openfeigin","link":"#_9-openfeigin","children":[{"level":3,"title":"1. 使用","slug":"_1-使用","link":"#_1-使用","children":[]},{"level":3,"title":"2. 超时时间","slug":"_2-超时时间","link":"#_2-超时时间","children":[]},{"level":3,"title":"3. feign调用的底层原理","slug":"_3-feign调用的底层原理","link":"#_3-feign调用的底层原理","children":[]},{"level":3,"title":"4. feign 优化","slug":"_4-feign-优化","link":"#_4-feign-优化","children":[]}]},{"level":2,"title":"10 Hystrix","slug":"_10-hystrix","link":"#_10-hystrix","children":[{"level":3,"title":"1. 服务降级","slug":"_1-服务降级","link":"#_1-服务降级","children":[]},{"level":3,"title":"2. 服务熔断","slug":"_2-服务熔断","link":"#_2-服务熔断","children":[]},{"level":3,"title":"3. 服务限流","slug":"_3-服务限流","link":"#_3-服务限流","children":[]},{"level":3,"title":"4. 注解","slug":"_4-注解","link":"#_4-注解","children":[]}]},{"level":2,"title":"11. sentinel","slug":"_11-sentinel","link":"#_11-sentinel","children":[{"level":3,"title":"1. @SentinelResource","slug":"_1-sentinelresource","link":"#_1-sentinelresource","children":[]},{"level":3,"title":"2. 限流规则","slug":"_2-限流规则","link":"#_2-限流规则","children":[]}]},{"level":2,"title":"12 . Seata","slug":"_12-seata","link":"#_12-seata","children":[{"level":3,"title":"1. 使用","slug":"_1-使用-1","link":"#_1-使用-1","children":[]},{"level":3,"title":"2. 三大组件","slug":"_2-三大组件","link":"#_2-三大组件","children":[]},{"level":3,"title":"3. 底层原理","slug":"_3-底层原理","link":"#_3-底层原理","children":[]}]},{"level":2,"title":"13 . nacos","slug":"_13-nacos","link":"#_13-nacos","children":[{"level":3,"title":"1. nacos的心跳机制？","slug":"_1-nacos的心跳机制","link":"#_1-nacos的心跳机制","children":[]},{"level":3,"title":"2. nacos服务注册发现的原理","slug":"_2-nacos服务注册发现的原理","link":"#_2-nacos服务注册发现的原理","children":[]},{"level":3,"title":"3. nacos动态刷新底层实现","slug":"_3-nacos动态刷新底层实现","link":"#_3-nacos动态刷新底层实现","children":[]}]},{"level":2,"title":"14. xxl-job","slug":"_14-xxl-job","link":"#_14-xxl-job","children":[{"level":3,"title":"1.xxl-job 和elastic-job的区别","slug":"_1-xxl-job-和elastic-job的区别","link":"#_1-xxl-job-和elastic-job的区别","children":[]},{"level":3,"title":"2. xxl-job是如何保证分布式下只有一个任务执行的，原理是什么？","slug":"_2-xxl-job是如何保证分布式下只有一个任务执行的-原理是什么","link":"#_2-xxl-job是如何保证分布式下只有一个任务执行的-原理是什么","children":[]}]},{"level":2,"title":"15. skywalking 底层是如何实现分布式链路追踪的","slug":"_15-skywalking-底层是如何实现分布式链路追踪的","link":"#_15-skywalking-底层是如何实现分布式链路追踪的","children":[{"level":3,"title":"1. skywalking 底层是如何实现分布式链路追踪的","slug":"_1-skywalking-底层是如何实现分布式链路追踪的","link":"#_1-skywalking-底层是如何实现分布式链路追踪的","children":[]}]}],"git":{"createdTime":1708136866000,"updatedTime":1713102824000,"contributors":[{"name":"chenxin","email":"1690273757@qq.com","commits":6}]},"readingTime":{"minutes":26.49,"words":7948},"filePathRelative":"technology/java/springcloud.md","localizedDate":"2024年3月25日","excerpt":"<h1> SpringCloud</h1>\\n<h2> 1. springcloud 对应的组件？</h2>\\n<ul>\\n<li>\\n<p>服务注册发现</p>\\n<ul>\\n<li>nacos   （cloud alibaba）</li>\\n<li>consul （cloud最新）</li>\\n<li>eureka   (淘汰)</li>\\n</ul>\\n</li>\\n<li>\\n<p>负载均衡</p>\\n<ul>\\n<li>LoadBalancer (cloud最新)</li>\\n<li>ribbon (淘汰)</li>\\n</ul>\\n</li>\\n<li>\\n<p>服务调用</p>\\n<ul>\\n<li>openFeign</li>\\n</ul>\\n</li>\\n<li>\\n<p>断路器</p>\\n<ul>\\n<li>CircuitBreaker （cloud最新）</li>\\n<li>hystrix (淘汰)</li>\\n</ul>\\n</li>\\n<li>\\n<p>网关</p>\\n<ul>\\n<li>gateway</li>\\n</ul>\\n</li>\\n<li>\\n<p>分布式链路追踪</p>\\n<ul>\\n<li>Sleuth(Micrometer) + ZipKin</li>\\n</ul>\\n</li>\\n<li>\\n<p>SpringCloud Alibaba Nacos</p>\\n<ul>\\n<li>服务注册和配置中心</li>\\n</ul>\\n</li>\\n<li>\\n<p>SpringCloud Alibaba Sentinel</p>\\n<ul>\\n<li>服务的熔断和限流</li>\\n</ul>\\n</li>\\n<li>\\n<p>SpringCloud Alibaba Seata</p>\\n<ul>\\n<li>分布式事务</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{l as data};