const e=JSON.parse('{"key":"v-32056898","path":"/technology/java/javaCollect.html","title":"JAVA集合","lang":"zh-CN","frontmatter":{"icon":"jihe","order":3,"date":"2023-09-20T00:00:00.000Z","category":["使用指南"],"tag":["java"],"description":"JAVA集合 java集合总结 这里对java中集合总结 List 1. 分类 Collection集合包含Set、List、Queue Map集合包含HashMap Hashtable SortedMap 2. List、set、Queue、Map的区别？ List: 有序可重复 Set: 无序不可重复 Queue：有序、可重复的 Map：key-value, key是无序、不可重复，value是无序、可重复的","head":[["meta",{"property":"og:url","content":"https://blog.cx985.top/technology/java/javaCollect.html"}],["meta",{"property":"og:site_name","content":"辰晨沉"}],["meta",{"property":"og:title","content":"JAVA集合"}],["meta",{"property":"og:description","content":"JAVA集合 java集合总结 这里对java中集合总结 List 1. 分类 Collection集合包含Set、List、Queue Map集合包含HashMap Hashtable SortedMap 2. List、set、Queue、Map的区别？ List: 有序可重复 Set: 无序不可重复 Queue：有序、可重复的 Map：key-value, key是无序、不可重复，value是无序、可重复的"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-06T16:35:30.000Z"}],["meta",{"property":"article:author","content":"辰晨沉"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:published_time","content":"2023-09-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-06T16:35:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JAVA集合\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-06T16:35:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"辰晨沉\\"}]}"]]},"headers":[{"level":2,"title":"List","slug":"list","link":"#list","children":[{"level":3,"title":"1. 分类","slug":"_1-分类","link":"#_1-分类","children":[]},{"level":3,"title":"2. List、set、Queue、Map的区别？","slug":"_2-list、set、queue、map的区别","link":"#_2-list、set、queue、map的区别","children":[]},{"level":3,"title":"3. 集合底层框架结构","slug":"_3-集合底层框架结构","link":"#_3-集合底层框架结构","children":[]},{"level":3,"title":"4. ArrayList和LinkedList的区别","slug":"_4-arraylist和linkedlist的区别","link":"#_4-arraylist和linkedlist的区别","children":[]},{"level":3,"title":"5. ArrayList的扩容机制","slug":"_5-arraylist的扩容机制","link":"#_5-arraylist的扩容机制","children":[]}]},{"level":2,"title":"Set","slug":"set-1","link":"#set-1","children":[{"level":3,"title":"1. Comparable 和 Comparator的区别","slug":"_1-comparable-和-comparator的区别","link":"#_1-comparable-和-comparator的区别","children":[]},{"level":3,"title":"2. HashSet、LinkedHashSet、TreeSet 三者的异同","slug":"_2-hashset、linkedhashset、treeset-三者的异同","link":"#_2-hashset、linkedhashset、treeset-三者的异同","children":[]}]},{"level":2,"title":"Map","slug":"map-1","link":"#map-1","children":[{"level":3,"title":"1. HashMap 和 HashTable的区别","slug":"_1-hashmap-和-hashtable的区别","link":"#_1-hashmap-和-hashtable的区别","children":[]},{"level":3,"title":"2、HashSet和HashMap区别","slug":"_2、hashset和hashmap区别","link":"#_2、hashset和hashmap区别","children":[]},{"level":3,"title":"3、HashMap和TreeMap 区别","slug":"_3、hashmap和treemap-区别","link":"#_3、hashmap和treemap-区别","children":[]},{"level":3,"title":"4、HashMap底层实现","slug":"_4、hashmap底层实现","link":"#_4、hashmap底层实现","children":[]},{"level":3,"title":"5、HashMap的长度为什么是2的幂次方","slug":"_5、hashmap的长度为什么是2的幂次方","link":"#_5、hashmap的长度为什么是2的幂次方","children":[]},{"level":3,"title":"6、HashMap遍历方式","slug":"_6、hashmap遍历方式","link":"#_6、hashmap遍历方式","children":[]},{"level":3,"title":"7、ConcurrentHashMap 和 Hashtable的区别","slug":"_7、concurrenthashmap-和-hashtable的区别","link":"#_7、concurrenthashmap-和-hashtable的区别","children":[]}]},{"level":2,"title":"待更新","slug":"待更新","link":"#待更新","children":[]},{"level":2,"title":"HashMap源码分析","slug":"hashmap源码分析","link":"#hashmap源码分析","children":[{"level":3,"title":"1.数组和链表的优缺点","slug":"_1-数组和链表的优缺点","link":"#_1-数组和链表的优缺点","children":[]},{"level":3,"title":"2. 有没有一种方式整合上面两种数据结构的优势？","slug":"_2-有没有一种方式整合上面两种数据结构的优势","link":"#_2-有没有一种方式整合上面两种数据结构的优势","children":[]},{"level":3,"title":"3. hashmap 底层数据结构？","slug":"_3-hashmap-底层数据结构","link":"#_3-hashmap-底层数据结构","children":[]},{"level":3,"title":"4. put数据原理分析？","slug":"_4-put数据原理分析","link":"#_4-put数据原理分析","children":[]},{"level":3,"title":"5. 什么是哈希碰撞？","slug":"_5-什么是哈希碰撞","link":"#_5-什么是哈希碰撞","children":[]},{"level":3,"title":"6. 为啥引入红黑树","slug":"_6-为啥引入红黑树","link":"#_6-为啥引入红黑树","children":[]},{"level":3,"title":"7. hashmap 扩容原理？","slug":"_7-hashmap-扩容原理","link":"#_7-hashmap-扩容原理","children":[]},{"level":3,"title":"8. hashmap源码之-类的属性","slug":"_8-hashmap源码之-类的属性","link":"#_8-hashmap源码之-类的属性","children":[]},{"level":3,"title":"9. hashmap源码之-类的构造方法","slug":"_9-hashmap源码之-类的构造方法","link":"#_9-hashmap源码之-类的构造方法","children":[]}]}],"git":{"createdTime":1697190799000,"updatedTime":1709742930000,"contributors":[{"name":"chenxin","email":"1690273757@qq.com","commits":7}]},"readingTime":{"minutes":8.86,"words":2658},"filePathRelative":"technology/java/javaCollect.md","localizedDate":"2023年9月20日","excerpt":"<h1> JAVA集合</h1>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">java集合总结</p>\\n<p>这里对java中集合总结</p>\\n</div>\\n<h2> List</h2>\\n<h3> 1. 分类</h3>\\n<p>Collection集合包含Set、List、Queue<br>\\nMap集合包含HashMap Hashtable SortedMap</p>\\n<h3> 2. List、set、Queue、Map的区别？</h3>\\n<p>List: 有序可重复<br>\\nSet: 无序不可重复<br>\\nQueue：有序、可重复的<br>\\nMap：key-value, key是无序、不可重复，value是无序、可重复的</p>","autoDesc":true}');export{e as data};