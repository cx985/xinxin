---
icon: jihe
order: 3
date: 2023-09-20
category:
  - 使用指南
tag:
  - java
---

# JAVA集合

::: tip java集合总结
这里对java中集合总结
::: 

## List

### 1. 分类
Collection集合包含Set、List、Queue
Map集合包含HashMap Hashtable SortedMap

### 2. List、set、Queue、Map的区别？
List: 有序可重复
Set: 无序不可重复
Queue：有序、可重复的
Map：key-value, key是无序、不可重复，value是无序、可重复的

### 3. 集合底层框架结构
#### List 
ArrayList: Object[] 数组
Vector: Object[] 数组
LinkedList: 双向链表

#### Set
HashSet(无序，唯一): HashMap
LinkedHashSet：LinkedHashMap来实现的
TreeSet(有序，唯一): 红黑树

#### Map
HashMap: 1.8之前是数组+链表组成，1.8以后当链表长度大于8，并且数组长度大于64会转换为红黑树
Hashtable: 数组+链表组成
TreeMap: 红黑树


### 4. ArrayList和LinkedList的区别
是否线程安全： 都是线程不安全的
底层数据结构： ArrayList底层使用的是object数组；LinkedList底层使用的是双向链表
插入和删除是否受元素位置影响：
         ArrayList采用数组存储，执行add(E e)是直接追加到末尾，时间复杂度是O(1), 指定位置插入add(int                index, E element) 时间复杂度为0(n)
         LinkedList 采用链表存储，在头尾插入或删除不受元素位置的影响，时间复杂度为O(1), 如果在指定位置i
         插入和删除，时间复杂度为O(n)
 是否支持快速随机访问：LinkedList不支持随机元素访问，而ArrayList可以通过元素快速获取元素对象     get(int index) 方法

### 5. ArrayList的扩容机制
题目： ArrayList list = new ArrayList(20);中list扩容了几次？ 答案0次
解答： ArrayList构造方法有三个
ArrayList() 构建一个空的数组。1.7默认初始容量为10，1.8只是构造一个空的数组
ArrayList(int initialCapacity) 构造一个具有指定初始容量的空数组

扩容核心代码：int newCapacity = oldCapacity + (oldCapacity >> 1);


扩容机制：每次添加元素的时候都会判断是否能够容下，如果不够就会发生扩容，扩容的大小为原大小的**1.5**倍数。
```
ArrayList<Integer> arrayList = new ArrayList<Integer>(20);
for(int i=1;i<=50;i++){
    arrayList.add(i);
}
```
前20次添加不会发生扩容，当21元素添加时数组容量从20扩容到30，当添加31元素时数组容量从30扩容到45，
当添加46元素时，数组容量从45扩容到67

## Set

### 1. Comparable 和 Comparator的区别
Comparable 接口和 Comparator 接口都是 Java 中用于排序的接口，它们在实现类对象之间比较大小、排序 

Comparable: java.lang包下面，有个compareTo方法 （自然排序固定），如：Collections.sort()
Comparator: java.util包下面，有个compare(T o1, T o2) 方法，可定制排序

总：需要为一个类定义一个默认的比较规则，可以使用Comparable接口。如果我们需要定义多个不同的比较规则或者对已经存在的类进行排序并且无法修改源代码，可以使用Comparator接口


### 2. HashSet、LinkedHashSet、TreeSet 三者的异同
相同：三者都是Set接口的实现类，都能保证元素唯一，并且都不是线程安全
不同：HashSet的底层数据结构是哈希表(基于HashMap实现)，用于不需要保证元素插入和取出顺序场景
         linkedHashSet的底层是链表和哈希表，用于保证元素的插入和取出满足fifo的场景
         TreeSet 底层是红黑树，用于支持对元素自定义排序规则场景


## Map

### 1. HashMap 和 HashTable的区别
线程安全：HashMap线程不安全，hashtable线程安全(方法用synchronized修饰了)， 线程安全推荐用ConcurrentHashMap，因为线程安全问题，所以HashMap要比HashTable效率高

null值： HashMap可以存储null的key和value, hashtable不允许有null健和null值

扩容：HashMap默认初始化大小为16，之后每次扩容，容量变为原来的2倍，hashtable默认初始化大小为11，之后每次扩容，容量变为原来的2n+1。

底层数据结构：1.8以后hashmap采用链表+数组+红黑树(链表长度大于8，数组长度大于64)

### 2、HashSet和HashMap区别
HashSet 底层就是基于 HashMap 实现的,个别方法是自己特有的

### 3、HashMap和TreeMap 区别
底层数据结构：hashmap使用哈希表，treemap使用红黑树
元素顺序：hashmap不保证元素顺序，treemap会根据健的自然顺序或自定义比较器来对元素进行排序，并保持有序状态
性能：hashmap性能比treemap高
自定义排序：treemap允许根据键的自然顺序或自定义比较器来进行排序

### 4、HashMap底层实现
1.8以前： 数组+链表     
1.8以后： 数组+链表+红黑树(链表长度大于8，并且数组长度小于64的时候，会进行数组扩容，而不是转换为红黑树)


### 5、HashMap的长度为什么是2的幂次方
答: 是为了减少hash碰撞，把数据分配均匀,其中数组下标计算方式为(n-1) & hash
&：按位与，都为1的时候才为1，举例假设n=8 ,hash 为17
即：7&17
00111
10001
00001
计算结果为1
之所以长度取2的幂次方，是为了保证n-1转换为2进展后对应的都是1， 如：8-1转换2进制=111 16-1转换2进制=1111 32-1转换二进制=11111


### 6、HashMap遍历方式
```
Map<Integer,String> map = new HashMap();
(1) map.ketSet
for(Integer key:map.keySet()){
    System.out.println(key);
   System.out.println(map.get(key));
}

备注：使用map.ketSet遍历，for循环第一个参数为map集合的第一个类型

 
(2) map.entrySet
for(Map.Entry<Integer,String> entry: map.entrySet()){
   System.out.println(entry.getKey());
   System.out.println(entry.getValue());
}

备注：使用map.entrySet遍历，for循环第一个参数为Map.Entry<> 泛型里面填上map对应的类型
 
(3).lambda表达式
map.forEach((key,value) ->{
    System.out.println(key);
    System.out.println(value);
})
```

### 7、ConcurrentHashMap 和 Hashtable的区别
底层数据结构：1.7 concurrentHashMap 底层采用分段的数组+链表实现，1.8采用数组+链表+红黑树
线程安全：1.7中 concurrentHashMap 对整个桶数组进行了分割分段(分段锁)，1.8以后改为Node 数组
               +链表+红黑树的数据结构来实现，并发控制使用synchronized 和cas 来操作

 

 

 ## 待更新

- [ ] HashMap源码深入分析



 

 

 











 

 

 

 

 

 





