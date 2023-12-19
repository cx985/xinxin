---
icon: tag
order: 4
category:
  - 使用指南
tag:
  - java
---
# JUC
## 1 进程和线程的区别
进程可以看作一个正在运行的程序  一个进程包含多个线程

## 2 并发与并行的区别
并发：两个及两个以上的作业在同一时间段内执行，即同一时间段执行多个任务，这些任务可能会交替执行
并行：两个及两个以上的作业在同一时刻执行，即同一时刻同时执行多个任务
最关键的点：是否是同时执行

## 3 java线程的生命周期和状态
new：初始状态，线程被创建出来但没有被调用start()
runnable: 运行状态，线程被调用了start()等待运行的状态
blocked: 阻塞状态，需要等待锁释放
waiting: 等待状态，表示该线程需要等待其他线程做出一些特定动作，如通知或中断
time_waiting: 超时等待状态，可以在指定的时间后自行返回而不是像waiting那样一直等待
terminated: 终止状态，表示该线程已经运行完毕

## 4 死锁
线程A持有资源2，线程B持有资源1，他们同时都想申请对方的资源，所以这两个线程就会互相等待而进入死锁状态

死锁的四个必要条件
1、互斥条件：该资源任意一个时刻只由一个线程占用
2、请求与保持条件：一个线程因请求资源而阻塞时，对已获得的资源保持不放
3、不剥夺条件：线程已获得的资源在未使用完之前不能被其他线程强行剥夺，只有自己使用完毕后才释放资源
4、循环等待条件: 若干线程之间形成一种头尾相接的循环等待资源关系

## 5 sleep() 和wait()对比
共同点：两者都可以暂停线程的执行
区别：
1、sleep() 方法没有释放锁，而wait() 方法释放了锁
2、wait() 通常被用于线程间交互，sleep()通常被用于暂停执行
3、wait()方法被调用后，线程不会自动苏醒，需要调用notify() 或者 notifyAll()方法，sleep()方法执行完成后，线程会自动苏醒，
4、sleep() 是Thread类的静态本地方法，wait() 则是Object类的本地方法

## 6 为什么wait()方法不定义在Thread中?
wait() 是让获得对象锁的线程实现等待，会自动释放当前线程占有的对象锁，每个对象都拥有对象锁，既然要释放当前线程占有的对象锁并让其进入waiting状态，自然是要
操作对应的对象而非当前的线程

## 7 为什么sleep() 方法定义在Thread中？
答：因为sleep()是让当前线程暂停执行，不涉及到对象类，也不需要获得对象锁

## 8 可以直接调用Thread类中的run方法吗？
答：调用 start() 方法方可启动线程并使线程进入就绪状态，直接执行 run() 方法的话不会以多线程的方式执行。


## 9  JMM内存模型
可见性：某个线程要先将变量从主内存拷贝到自己的工作内存空间，然后对变量进行操作，操作完成后
再将变量写回主内存

原子性：不可分割，完整性，即某个线程正在做某个业务时，中间不可以被加塞或者被分割。需要整体完整，
        要么同时成功，要么同时失败
有序性：在 JMM 中，对共享变量的写入和读取应该按照程序的顺序进行，防止出现意外的执行顺序

## 10 volatile
volatile 是java虚拟机提供的轻量级同步机制
它基本上遵守了jmm规范,保证可以性和禁止指令重排，但是不保证原子性

如何解决原子性
使用AtomicInteger   i++  ===》 atomicInteger.getAndIncrement();

AtomicInteger 为何能实现原子性
使用了CAS(比较并交换) 底层unsafe类 +自旋锁保证 原子性

CAS 确定会有ABA问题
ABA问题： 线程A修改一个值后再改回原来的值，此次线程B读到值还是原来的值，而线程B是不知道线程A已经修改过的
ABA问题解决： 加版本号

```
AtomicReference 原子引用
AtomicStampedReference 版本号原子引用
 
//100代表初始值 1代表版本号
AtomicStampedReference<Integer> ato = new AtomicStampedReference<>(100,1);
```

## 11 java锁
悲观锁：认为共享资源每次被访问的时候就会出现问题，所以每次在获取资源操作的时候都会上锁，如synchronized 和 ReentrantLock
乐观锁：认为共享资源每次被访问的时候不会出现问题，无需加锁也无需等待， cas算法+版本号实现， AtomicInteger，LongAddr ，有ABA问题
公平锁：锁被释放后，先申请的线程先得到锁
非公平锁：锁被释放后，后申请的线程可能会先获取到锁
可重入锁：也叫递归锁，指的是线程可以再次获取自己内部锁
共享锁：一把锁可以被多个线程同时获得 （读锁）
独占锁：一把锁只能被一个线程获得（写锁）

## 12 synchronized 
- 作用：主要解决的是多个线程之间访问资源的同步性，可以保证被它修饰的方法或者代码块在任意时刻只能有一个线程执行
- 使用：
  修饰实例方法（锁当前对象实例）
    给当前对象实例加锁，进入同步代码前要获得当前对象实例的锁
  
    ```
    synchronized void method(){
           //业务代码
    }
    ```
  修饰静态方法（锁当前类）
  ```
    synchronized static void method(){
       //业务代码
    }
  ```
  修饰代码块 （锁指定对象/类）
  ```
    synchronized(object) 表示进入同步代码库前要获得给定对象的锁
    synchronized(类.class) 表示进入同步代码前要获得给定Class的锁
  ```

构造方法可以用synchronized修饰么
答：不能，因为构造方法本身就属于线程安全，不存在同步的构造方法一说

synchronized底层原理？
修饰代码块情况
  ```
   public class SynchronizedDemo{
           public void method(){
               synchronized(this){
                  System.out.println("synchronized 代码块");
               }
           }
    }
  ```
 底层使用的是monitorenter 和 monitorexit 指令，一个monitorenter指令包含两个monitorexit指令，这是为了保证锁在同步代码块代码正常执行以及出现异常
的这两种情况下都能被正确释放，如果自己加了异常，则只会出现一个monitorenter 和一个monitorexit指令

 修饰方法的情况
 ```
   public class SynchronizedDemo2{
       public synchronized void method(){
           System.out.println("synchronized 方法")
       }
    } 
 ```

底层使用的是ACC_SYNCHRONIZED 访问标识，标记是一个同步方法

1.6之后synchronized底层做了哪些优化？
答：1.6以后对锁的实现引入了大量的优化，如偏向锁、轻量级锁、自旋锁、锁消除、锁粗化.
     锁的四种状态，依次是无锁、偏向锁、轻量级锁、重量级锁，他们会随着竞争激烈而逐渐升级，锁可以升级但不可降级


## 13 synchronized 和 ReentrantLock 的区别
1.原始构成
synchronized 是关键字属于jvm层面
   monitorenter(底层是通过monitor对象来完成，)
   monitorexit
Lock是具体类(java.util.concurrent.locks.lock)是api层面的锁   

2.使用方法
synchronized 不需要用户去手动释放锁，当synchronized代码执行完后系统会自动
让线程释放对锁的占用
ReentrantLock 则需要用户去手动释放锁若没有主动释放锁，就有可能导致出现死锁现象
需要配合lock()和unlock()方法配合try/finally语句块来完成

3.等待是否可中断
synchronized 不可中断，除非抛出异常或者正常运行完成
ReentrantLock 可中断，1.设置超时方法 tryLock(long timeOut,TimeUnit unit)
2.lockInterruptibly()放代码块中，调用interupt()方法可中断

4.加锁是否公平
synchronized 非公平锁
ReentrantLock 两者都可以，默认非公平锁，构造方法可以传入boolean值，
true为公平锁，false为非公平锁

5.锁绑定多个条件Condition
synchronized 没有
ReentrantLock 用来实现分组唤醒需要唤醒的线程们，可以精确唤醒，而不是像synchronized
要么随机唤醒一个线程，要么唤醒全部线程


​    

 ## 14 ThreadLocal

作用：每一个线程都有自己的专属本地变量，存放私有的数据

方法： get()  set()

```java
private static final ThreadLocal<SimpleDateFormat> formatter = ThreadLocal.withInitial(()->new SimpleDateFormat("yyyyMMdd HHmmm"));
```

原理：

Thread类源码

```java
public class Thread implements Runnable {
    //......
    //与此线程有关的ThreadLocal值。由ThreadLocal类维护
    ThreadLocal.ThreadLocalMap threadLocals = null;

    //与此线程有关的InheritableThreadLocal值。由InheritableThreadLocal类维护
    ThreadLocal.ThreadLocalMap inheritableThreadLocals = null;
    //......
}

```



**最终的变量是放在了当前线程的 `ThreadLocalMap` 中，并不是存在 `ThreadLocal` 上，`ThreadLocal` 可以理解为只是`ThreadLocalMap`的封装，传递了变量值**

 **每个`Thread`中都具备一个`ThreadLocalMap`，而`ThreadLocalMap`可以存储以`ThreadLocal`为 key ，Object 对象为 value 的键值对**

 

 内存泄露问题

`ThreadLocalMap` 中使用的 key 为 `ThreadLocal` 的弱引用，而 value 是强引用。所以，如果 `ThreadLocal` 没有被外部强引用的情况下，在垃圾回收的时候，key 会被清理掉，而 value 不会被清理掉 

使用完 `ThreadLocal`方法后最好手动调用`remove()`方法

补充：

- 强引用：死都不收

- 软引用：系统内存充足不会被回收，不足会被回收

  ```java
  public class ReferenceDemo
  {
      public static void main(String[] args)
      {
          //当我们内存不够用的时候，soft会被回收的情况，设置我们的内存大小：-Xms10m -Xmx10m
          SoftReference<MyObject> softReference = new SoftReference<>(new MyObject());
  
          System.gc();
          try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
          System.out.println("-----gc after内存够用: "+softReference.get());
  
          try
          {
              byte[] bytes = new byte[9 * 1024 * 1024];
          }catch (Exception e){
              e.printStackTrace();
          }finally {
              System.out.println("-----gc after内存不够: "+softReference.get());
          }
      }
  
      public static void strongReference()
      {
          MyObject myObject = new MyObject();
          System.out.println("-----gc before: "+myObject);
  
          myObject = null;
          System.gc();
          try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
  
          System.out.println("-----gc after: "+myObject);
      }
  }
  
  ```

  

- 弱引用：都会回收

  ```java
  public class ReferenceDemo
  {
      public static void main(String[] args)
      {
          WeakReference<MyObject> weakReference = new WeakReference<>(new MyObject());
          System.out.println("-----gc before内存够用: "+weakReference.get());
  
          System.gc();
          try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
  
          System.out.println("-----gc after内存够用: "+weakReference.get());
      }
  
      public static void softReference()
      {
          //当我们内存不够用的时候，soft会被回收的情况，设置我们的内存大小：-Xms10m -Xmx10m
          SoftReference<MyObject> softReference = new SoftReference<>(new MyObject());
  
          System.gc();
          try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
          System.out.println("-----gc after内存够用: "+softReference.get());
  
          try
          {
              byte[] bytes = new byte[9 * 1024 * 1024];
          }catch (Exception e){
              e.printStackTrace();
          }finally {
              System.out.println("-----gc after内存不够: "+softReference.get());
          }
      }
  
      public static void strongReference()
      {
          MyObject myObject = new MyObject();
          System.out.println("-----gc before: "+myObject);
  
          myObject = null;
          System.gc();
          try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
  
          System.out.println("-----gc after: "+myObject);
      }
  }
  
  ```

  

- 虚引用：在任何时候都可能被回收



 

 
