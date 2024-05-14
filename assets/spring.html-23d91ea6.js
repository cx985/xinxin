const n=JSON.parse('{"key":"v-7a7ad289","path":"/technology/java/spring.html","title":"Spring+SpringBoot","lang":"zh-CN","frontmatter":{"icon":"bxl-spring-boot","order":9,"date":"2024-03-15T00:00:00.000Z","category":["spring"],"tag":["java"],"description":"Spring+SpringBoot 1. Sping Ioc 1. 谈谈你对spring ioc的理解？ ioc 控制反转（Inversion of Control） IOC是一种设计思想，就是将原本在程序中手动创建对象的控制权，交给spring框架来管理 控制 指的是对象创建的权力 反转 控制权交给外部环境（Spring 框架，IOC容器） 将对象之间的相互依赖关系交给ioc容器来管理，并由ioc容器完成对象的注入 实现原理 Spring IoC（Inversion of Control，控制反转）是Spring框架的核心特性之一，它通过容器（ApplicationContext）来管理和装配Bean（Java对象）。IoC的设计理念是将对象的创建和管理责任转移给容器，而不是硬编码在应用程序代码中，这样可以降低组件之间的耦合度，提高代码的灵活性和可维护性。 Spring IoC实现原理： 容器初始化： Spring容器在启动时会读取配置信息，这些配置信息可以来自于XML配置文件、注解、Java配置类等。 容器会解析这些配置信息，构建一个完整的对象依赖关系图谱（Dependency Graph）。 Bean的定义与注册： 用户在配置中定义Bean，通过&lt;bean&gt;标签或@Component等注解声明类为Spring Bean，并可以设置其属性、初始化方法、销毁方法以及作用域等信息。 容器根据这些定义创建Bean实例。 依赖注入（DI, Dependency Injection）： Spring IoC容器通过依赖注入来管理Bean间的依赖关系。 依赖注入有两种主要形式：构造器注入（Constructor Injection）和setter注入（Setter Injection）。 构造器注入是在创建Bean时通过构造函数传递依赖对象，setter注入则是通过setter方法在Bean创建后设置依赖对象。 自动装配（Auto Wiring）： Spring还支持自动装配，容器可以根据Bean的类型、名称或其他条件自动匹配和注入依赖。 通过@Autowired注解可以实现自动装配。 生命周期管理： Spring IoC容器负责管理Bean的完整生命周期，包括实例化、初始化、依赖注入、使用以及销毁等阶段。 用户可以通过实现InitializingBean接口或定义init-method，以及实现DisposableBean接口或定义destroy-method来定制Bean的初始化和销毁逻辑。 Scope管理： Spring容器支持多种作用域，如Singleton（默认，单例）、Prototype（每次请求都会新建一个实例）、Request、Session（仅在Web应用中可用）等，确保在正确的作用域范围内创建和管理Bean。 通过以上机制，Spring IoC容器担当了一个工厂的角色，负责创建、装配和管理应用中的所有对象，实现了对象的解耦和松散耦合的架构。","head":[["meta",{"property":"og:url","content":"https://blog.cx985.top/technology/java/spring.html"}],["meta",{"property":"og:site_name","content":"辰晨沉"}],["meta",{"property":"og:title","content":"Spring+SpringBoot"}],["meta",{"property":"og:description","content":"Spring+SpringBoot 1. Sping Ioc 1. 谈谈你对spring ioc的理解？ ioc 控制反转（Inversion of Control） IOC是一种设计思想，就是将原本在程序中手动创建对象的控制权，交给spring框架来管理 控制 指的是对象创建的权力 反转 控制权交给外部环境（Spring 框架，IOC容器） 将对象之间的相互依赖关系交给ioc容器来管理，并由ioc容器完成对象的注入 实现原理 Spring IoC（Inversion of Control，控制反转）是Spring框架的核心特性之一，它通过容器（ApplicationContext）来管理和装配Bean（Java对象）。IoC的设计理念是将对象的创建和管理责任转移给容器，而不是硬编码在应用程序代码中，这样可以降低组件之间的耦合度，提高代码的灵活性和可维护性。 Spring IoC实现原理： 容器初始化： Spring容器在启动时会读取配置信息，这些配置信息可以来自于XML配置文件、注解、Java配置类等。 容器会解析这些配置信息，构建一个完整的对象依赖关系图谱（Dependency Graph）。 Bean的定义与注册： 用户在配置中定义Bean，通过&lt;bean&gt;标签或@Component等注解声明类为Spring Bean，并可以设置其属性、初始化方法、销毁方法以及作用域等信息。 容器根据这些定义创建Bean实例。 依赖注入（DI, Dependency Injection）： Spring IoC容器通过依赖注入来管理Bean间的依赖关系。 依赖注入有两种主要形式：构造器注入（Constructor Injection）和setter注入（Setter Injection）。 构造器注入是在创建Bean时通过构造函数传递依赖对象，setter注入则是通过setter方法在Bean创建后设置依赖对象。 自动装配（Auto Wiring）： Spring还支持自动装配，容器可以根据Bean的类型、名称或其他条件自动匹配和注入依赖。 通过@Autowired注解可以实现自动装配。 生命周期管理： Spring IoC容器负责管理Bean的完整生命周期，包括实例化、初始化、依赖注入、使用以及销毁等阶段。 用户可以通过实现InitializingBean接口或定义init-method，以及实现DisposableBean接口或定义destroy-method来定制Bean的初始化和销毁逻辑。 Scope管理： Spring容器支持多种作用域，如Singleton（默认，单例）、Prototype（每次请求都会新建一个实例）、Request、Session（仅在Web应用中可用）等，确保在正确的作用域范围内创建和管理Bean。 通过以上机制，Spring IoC容器担当了一个工厂的角色，负责创建、装配和管理应用中的所有对象，实现了对象的解耦和松散耦合的架构。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-14T15:10:58.000Z"}],["meta",{"property":"article:author","content":"辰晨沉"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:published_time","content":"2024-03-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-14T15:10:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring+SpringBoot\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-14T15:10:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"辰晨沉\\"}]}"]]},"headers":[{"level":2,"title":"1. Sping Ioc","slug":"_1-sping-ioc","link":"#_1-sping-ioc","children":[{"level":3,"title":"1. 谈谈你对spring ioc的理解？","slug":"_1-谈谈你对spring-ioc的理解","link":"#_1-谈谈你对spring-ioc的理解","children":[]},{"level":3,"title":"2. Spring Bean","slug":"_2-spring-bean","link":"#_2-spring-bean","children":[]},{"level":3,"title":"3. 将一个类声明Bean的注解有哪些？","slug":"_3-将一个类声明bean的注解有哪些","link":"#_3-将一个类声明bean的注解有哪些","children":[]},{"level":3,"title":"4. 注入Bean的注解有哪些？","slug":"_4-注入bean的注解有哪些","link":"#_4-注入bean的注解有哪些","children":[]},{"level":3,"title":"5. @Autowired和@Resource的区别是什么？","slug":"_5-autowired和-resource的区别是什么","link":"#_5-autowired和-resource的区别是什么","children":[]},{"level":3,"title":"5. Bean的作用域有哪些？","slug":"_5-bean的作用域有哪些","link":"#_5-bean的作用域有哪些","children":[]},{"level":3,"title":"6. Bean的生命周期了解么？","slug":"_6-bean的生命周期了解么","link":"#_6-bean的生命周期了解么","children":[]}]},{"level":2,"title":"2. Spring Aop","slug":"_2-spring-aop","link":"#_2-spring-aop","children":[{"level":3,"title":"1. 谈谈你对aop的理解？","slug":"_1-谈谈你对aop的理解","link":"#_1-谈谈你对aop的理解","children":[]}]},{"level":2,"title":"3. Spring MVC","slug":"_3-spring-mvc","link":"#_3-spring-mvc","children":[{"level":3,"title":"1. spring mvc的核心组件","slug":"_1-spring-mvc的核心组件","link":"#_1-spring-mvc的核心组件","children":[]},{"level":3,"title":"2. Spring Mvc的原理？","slug":"_2-spring-mvc的原理","link":"#_2-spring-mvc的原理","children":[]},{"level":3,"title":"3. 统一异常处理怎么做？","slug":"_3-统一异常处理怎么做","link":"#_3-统一异常处理怎么做","children":[]}]},{"level":2,"title":"4. Spring 事务","slug":"_4-spring-事务","link":"#_4-spring-事务","children":[{"level":3,"title":"1. spring事务的传播行为","slug":"_1-spring事务的传播行为","link":"#_1-spring事务的传播行为","children":[]},{"level":3,"title":"2. spring的事务隔离级别","slug":"_2-spring的事务隔离级别","link":"#_2-spring的事务隔离级别","children":[]}]},{"level":2,"title":"5. Spring 框架中用到的设计模式","slug":"_5-spring-框架中用到的设计模式","link":"#_5-spring-框架中用到的设计模式","children":[]},{"level":2,"title":"6. Spring&Springboot常用注解","slug":"_6-spring-springboot常用注解","link":"#_6-spring-springboot常用注解","children":[{"level":3,"title":"1. @SpringBootApplication","slug":"_1-springbootapplication","link":"#_1-springbootapplication","children":[]},{"level":3,"title":"2. Spring Bean相关","slug":"_2-spring-bean相关","link":"#_2-spring-bean相关","children":[]},{"level":3,"title":"3. http相关","slug":"_3-http相关","link":"#_3-http相关","children":[]},{"level":3,"title":"4. 前后端传值","slug":"_4-前后端传值","link":"#_4-前后端传值","children":[]},{"level":3,"title":"5. 读取配置文件","slug":"_5-读取配置文件","link":"#_5-读取配置文件","children":[]}]},{"level":2,"title":"7 . Springboot 自动装配原理？","slug":"_7-springboot-自动装配原理","link":"#_7-springboot-自动装配原理","children":[{"level":3,"title":"1. 什么是自动装配？","slug":"_1-什么是自动装配","link":"#_1-什么是自动装配","children":[]},{"level":3,"title":"2. Springboot 是如何实现自动装配的","slug":"_2-springboot-是如何实现自动装配的","link":"#_2-springboot-是如何实现自动装配的","children":[]}]},{"level":2,"title":"8. Spring 循环依赖？","slug":"_8-spring-循环依赖","link":"#_8-spring-循环依赖","children":[]},{"level":2,"title":"9. Spring 三级缓存","slug":"_9-spring-三级缓存","link":"#_9-spring-三级缓存","children":[]},{"level":2,"title":"10. springboot的启动流程","slug":"_10-springboot的启动流程","link":"#_10-springboot的启动流程","children":[]},{"level":2,"title":"11. spring BeanFactory和FactoryBean的区别","slug":"_11-spring-beanfactory和factorybean的区别","link":"#_11-spring-beanfactory和factorybean的区别","children":[]}],"git":{"createdTime":1697190799000,"updatedTime":1715699458000,"contributors":[{"name":"chenxin","email":"1690273757@qq.com","commits":10}]},"readingTime":{"minutes":18.11,"words":5432},"filePathRelative":"technology/java/spring.md","localizedDate":"2024年3月15日","excerpt":"<h1> Spring+SpringBoot</h1>\\n<h2> 1. Sping Ioc</h2>\\n<h3> 1. 谈谈你对spring ioc的理解？</h3>\\n<ul>\\n<li>\\n<p>ioc</p>\\n<ul>\\n<li>控制反转（Inversion of Control）</li>\\n<li>IOC是一种设计思想，就是将原本在程序中手动创建对象的控制权，交给spring框架来管理</li>\\n<li>控制\\n<ul>\\n<li>指的是对象创建的权力</li>\\n</ul>\\n</li>\\n<li>反转\\n<ul>\\n<li>控制权交给外部环境（Spring 框架，IOC容器）</li>\\n</ul>\\n</li>\\n<li>将对象之间的相互依赖关系交给ioc容器来管理，并由ioc容器完成对象的注入</li>\\n</ul>\\n</li>\\n<li>\\n<p>实现原理</p>\\n<p>Spring IoC（Inversion of Control，控制反转）是Spring框架的核心特性之一，它通过容器（ApplicationContext）来管理和装配Bean（Java对象）。IoC的设计理念是将对象的创建和管理责任转移给容器，而不是硬编码在应用程序代码中，这样可以降低组件之间的耦合度，提高代码的灵活性和可维护性。</p>\\n<p><strong>Spring IoC实现原理：</strong></p>\\n<ol>\\n<li>\\n<p><strong>容器初始化</strong>：</p>\\n<ul>\\n<li>Spring容器在启动时会读取配置信息，这些配置信息可以来自于XML配置文件、注解、Java配置类等。</li>\\n<li>容器会解析这些配置信息，构建一个完整的对象依赖关系图谱（Dependency Graph）。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>Bean的定义与注册</strong>：</p>\\n<ul>\\n<li>用户在配置中定义Bean，通过<code>&lt;bean&gt;</code>标签或<code>@Component</code>等注解声明类为Spring Bean，并可以设置其属性、初始化方法、销毁方法以及作用域等信息。</li>\\n<li>容器根据这些定义创建Bean实例。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>依赖注入（DI, Dependency Injection）</strong>：</p>\\n<ul>\\n<li>Spring IoC容器通过依赖注入来管理Bean间的依赖关系。</li>\\n<li>依赖注入有两种主要形式：构造器注入（Constructor Injection）和setter注入（Setter Injection）。</li>\\n<li>构造器注入是在创建Bean时通过构造函数传递依赖对象，setter注入则是通过setter方法在Bean创建后设置依赖对象。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>自动装配（Auto Wiring）</strong>：</p>\\n<ul>\\n<li>Spring还支持自动装配，容器可以根据Bean的类型、名称或其他条件自动匹配和注入依赖。</li>\\n<li>通过<code>@Autowired</code>注解可以实现自动装配。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>生命周期管理</strong>：</p>\\n<ul>\\n<li>Spring IoC容器负责管理Bean的完整生命周期，包括实例化、初始化、依赖注入、使用以及销毁等阶段。</li>\\n<li>用户可以通过实现<code>InitializingBean</code>接口或定义<code>init-method</code>，以及实现<code>DisposableBean</code>接口或定义<code>destroy-method</code>来定制Bean的初始化和销毁逻辑。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>Scope管理</strong>：</p>\\n<ul>\\n<li>Spring容器支持多种作用域，如Singleton（默认，单例）、Prototype（每次请求都会新建一个实例）、Request、Session（仅在Web应用中可用）等，确保在正确的作用域范围内创建和管理Bean。</li>\\n</ul>\\n</li>\\n</ol>\\n<p>通过以上机制，Spring IoC容器担当了一个工厂的角色，负责创建、装配和管理应用中的所有对象，实现了对象的解耦和松散耦合的架构。</p>\\n</li>\\n</ul>","autoDesc":true}');export{n as data};
