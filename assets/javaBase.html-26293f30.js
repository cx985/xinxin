import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e}from"./app-57970fd2.js";const i={},t=e(`<h1 id="java基础" tabindex="-1"><a class="header-anchor" href="#java基础" aria-hidden="true">#</a> JAVA基础</h1><div class="hint-container tip"><p class="hint-container-title">java基础总结</p><p>这里对java中常见的知识点做一个总结</p></div><h2 id="_1、jdk、jvm、jre、jit" tabindex="-1"><a class="header-anchor" href="#_1、jdk、jvm、jre、jit" aria-hidden="true">#</a> 1、jdk、jvm、jre、jit</h2><p>jdk: 是一个提供开发和执行，Java程序环境的工具包<br> jvm: java虚拟机<br> jre: java运行环境<br> jit: 即时编译器，它负责将 Java 字节码转换为本地机器代码</p><h2 id="_2、i-i" tabindex="-1"><a class="header-anchor" href="#_2、i-i" aria-hidden="true">#</a> 2、i++,++i</h2><p>b= ++a 时，a先自增+1,再赋值给b， 输出a+1的值<br> b= a++时, 先赋值给b,然后a再+1 ，输出a的值<br> 口诀： 符号在前就先加，符合在后就后加</p><h2 id="_3、位移运算符" tabindex="-1"><a class="header-anchor" href="#_3、位移运算符" aria-hidden="true">#</a> 3、位移运算符</h2><p>左移：&lt;&lt;, 左移多少位相当于多少位乘以2， 2&lt;&lt;3 = 2*(2<em>2</em>2)=16<br> 右移：&gt;&gt;, 右移多少位相当于多少位/2, 8&gt;&gt;3 = 8/(2<em>2</em>2) = 1</p><h2 id="_4、continue、break区别" tabindex="-1"><a class="header-anchor" href="#_4、continue、break区别" aria-hidden="true">#</a> 4、continue、break区别</h2><p>continue: 指跳出当前的这一次循环，继续下一次循环<br> break: 指跳出整个循环体，继续执行循环下面的语句</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

结果为：<span class="token number">0</span>，<span class="token number">2</span>，<span class="token number">3</span>，<span class="token number">4</span>
    
    
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

结果为：<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、java-8种数据类型" tabindex="-1"><a class="header-anchor" href="#_5、java-8种数据类型" aria-hidden="true">#</a> 5、java 8种数据类型</h2><p>整数型：byte、short、int、long<br> 浮点型：float、double<br> 字符型：char<br> 布尔型：boolean</p><h2 id="_6、基本类型和包装类型的区别" tabindex="-1"><a class="header-anchor" href="#_6、基本类型和包装类型的区别" aria-hidden="true">#</a> 6、基本类型和包装类型的区别？</h2><p>(1)包装类型是对基本类型的封装，包装类型提供了一些方法和属性，可以对基本类型进行更多的操作<br> (2) 基本类型的值可以直接赋值给对应的包装类型，反之亦然，java编译器会自动装箱和拆箱<br> (3) 包装类型可以使用null表示空值，而基本类型不能表示空值<br> (4) 包装类型可以作为泛型的参数，而基本类型不能作为泛型的参数<br> (5) 包装类型的对象比基本类型占用更多的内存空间</p><p>Byte,Short,Integer,Long 这4种包装类默认创建了数值[-128,127] 的相应类型的缓存数据<br> 题目</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Integer i1 = 40;
Integer i2 = new Integer(40);
System.out.println(i1==i2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：false, i1使用了缓存中的对象，i2会直接创建新的对象。</p><p>自动装箱: 基本类型用它们对应的引用类型包装起来 (Integer i =10;) 实际调用valueOf方法<br> 自动拆箱：将包装类型转换为基本数据类型 (int n = i;), 实际调用intValue 方法</p><h2 id="_7-成员变量和局部变量" tabindex="-1"><a class="header-anchor" href="#_7-成员变量和局部变量" aria-hidden="true">#</a> 7. 成员变量和局部变量</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//成员变量(属于类)
private String name;

//局部变量(属于方法)
public void method(){
    //int num1 =10;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8、方法重载和重写" tabindex="-1"><a class="header-anchor" href="#_8、方法重载和重写" aria-hidden="true">#</a> 8、方法重载和重写</h2><p>重载：发生在同一个类中，参数列表必须修改<br> 重写：发生在子父类中，参数列表一定不能修改</p><h2 id="_9、如果一个类没有声明构造方法-该程序能正确执行吗" tabindex="-1"><a class="header-anchor" href="#_9、如果一个类没有声明构造方法-该程序能正确执行吗" aria-hidden="true">#</a> 9、如果一个类没有声明构造方法，该程序能正确执行吗</h2><p>答：如果一个类没有声明构造方法，也可以执行！因为一个类即使没有声明构造方法也会有默认的不带参数的构造方法</p><h2 id="_10、构造方法有哪些特点-是否可以被重写" tabindex="-1"><a class="header-anchor" href="#_10、构造方法有哪些特点-是否可以被重写" aria-hidden="true">#</a> 10、构造方法有哪些特点？是否可以被重写？</h2><p>答：构造方法1、名称与类名相同 2、没有返回值 3、生成类的对象时自动执行，无需调用<br> 不能被重写，但是可以重载，一个类是可以有多个构造函数的</p><p>备注：没有返回值是指没有return</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11、面向对象三大特征" tabindex="-1"><a class="header-anchor" href="#_11、面向对象三大特征" aria-hidden="true">#</a> 11、面向对象三大特征</h2><p>封装：封装是指把一个对象的状态信息（也就是属性）隐藏在对象内部，不允许外部对象直接访问对象的内部信息。但是可以提供一些可以被外界访问的方法来操作属性<br> 继承：继承是使用已存在的类的定义作为基础建立新类的技术，新类的定义可以增加新的数据或新的功能，也可以用父类的功能，但不能选择性地继承父类。通过使用继承，可以快速地创建新的类，可以提高代码的重用，程序的可维护性，节省大量创建新类的时间 ，提高我们的开发效率</p><p>注意点：子类拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类中的私有属性和方法子类是无法访问，只是拥有</p><p>多态：多态，顾名思义，表示一个对象具有多种的状态，具体表现为父类的引用指向子类的实例。</p><h2 id="_12、接口和抽象类的区别" tabindex="-1"><a class="header-anchor" href="#_12、接口和抽象类的区别" aria-hidden="true">#</a> 12、接口和抽象类的区别</h2><p>共同点：<br> 1、都不能被实例化<br> 2、都包含抽象方法<br> 区别：一个类只能继承一个类，但是可以实现多个接口</p><h2 id="_13、-和equals的区别" tabindex="-1"><a class="header-anchor" href="#_13、-和equals的区别" aria-hidden="true">#</a> 13、==和equals的区别</h2><p><mark>对于基本类型来说，比较的是值；对于引用数据类型来说，比较的是对象的内存地址<br> equals: 类没有重写equals()方法时，等价于</mark>比较这两个对象；类重写了equals()方法时，一般<br> 来比较两个对象的属性是否相等</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String a = new String(&quot;ab&quot;); // a 为一个引用
String b = new String(&quot;ab&quot;); // b为另一个引用,对象的内容一样
String aa = &quot;ab&quot;; // 放在常量池中
String bb = &quot;ab&quot;; // 从常量池中查找
System.out.println(aa == bb);// true
System.out.println(a == b);// false
System.out.println(a.equals(b));// true
System.out.println(42 == 42.0);// true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14、为什么重写equals-时必须重写hashcode-方法" tabindex="-1"><a class="header-anchor" href="#_14、为什么重写equals-时必须重写hashcode-方法" aria-hidden="true">#</a> 14、为什么重写equals()时必须重写hashCode()方法？</h2><p>答：因为两个相等的对象的 hashCode 值必须是相等。如果重写 equals() 时没有重写 hashCode() 方法的话就可能会导致 equals 方法判断是相等的两个对象，hashCode 值却不相等</p><h2 id="_15、string-stringbuffer-stringbuilder的区别" tabindex="-1"><a class="header-anchor" href="#_15、string-stringbuffer-stringbuilder的区别" aria-hidden="true">#</a> 15、String StringBuffer StringBuilder的区别</h2><p>String不可变，线程安全<br> StringBuffer 线程安全<br> StringBuilder 线程不安全</p><h2 id="_16、字符串常量池" tabindex="-1"><a class="header-anchor" href="#_16、字符串常量池" aria-hidden="true">#</a> 16、字符串常量池</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 在堆中创建字符串对象”ab“
// 将字符串对象”ab“的引用保存在字符串常量池中
String aa = &quot;ab&quot;;
// 直接返回字符串常量池中字符串对象”ab“的引用
String bb = &quot;ab&quot;;
System.out.println(aa==bb);// true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17、string-s1-new-string-abc-创建了几个字符串对象" tabindex="-1"><a class="header-anchor" href="#_17、string-s1-new-string-abc-创建了几个字符串对象" aria-hidden="true">#</a> 17、String s1 = new String(&quot;abc&quot;) 创建了几个字符串对象？</h2><p>答：会创建1或者2个字符串对象。如果字符串常量池不存在，那么会先在字符串常量池创建，然后在堆空间创建</p><ul><li><p>扩展：String s = new String(&quot;xyz&quot;) + new String(&quot;xyz&quot;) 创建了几个对象</p><p>答：4个。</p><ol><li>首先，两个 <code>new String(&quot;xyz&quot;)</code> 分别在堆内存中创建了两个新的 String 对象，每个都包含内容 &quot;xyz&quot;。</li><li>接着，字符串连接操作（+）触发了编译器对字符串字面量的合并，生成一个新的字符串 &quot;xyzxyz&quot;。由于 &quot;+&quot; 操作符两边都是 String 对象，因此在执行此操作时，JVM 会在字符串常量池中创建第三个对象，内容为 &quot;xyzxyz&quot;。</li><li>最后，由于字符串连接的结果需要赋值给变量 s，Java 会创建第四个对象，也就是 s 所引用的新 String 对象。这个对象的值来源于步骤 3 中字符串常量池中的 &quot;xyzxyz&quot;，但是它是一个独立于常量池的新对象，在堆内存中分配空间</li></ol></li></ul><h2 id="_18-string-intern-方法" tabindex="-1"><a class="header-anchor" href="#_18-string-intern-方法" aria-hidden="true">#</a> 18. String.intern() 方法？</h2><p>作用：将指定的字符串对象的引用保存在字符串常量池中。<br> 如果字符串常量池中保存了对应的字符串对象的引用，就直接返回该引用<br> 如果字符串常量池中没有保存对应的字符串引用，那就在常量池创建一个指向该字符串对象的引用并返回</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String s1 = &quot;Programming&quot;;
String s2 = new String(&quot;Programming&quot;);
String s3 = &quot;Program&quot;;
String s4 = &quot;ming&quot;;
String s5 = &quot;Program&quot; + &quot;ming&quot;;
String s6 = s3 + s4;
System.out.println(s1 == s2); //false
System.out.println(s1 == s5); // true
System.out.println(s1 == s6); // false
System.out.println(s1 == s6.intern()); //true
System.out.println(s2 == s2.intern()); //false


解释如下：

s1 == s2：比较的是栈上引用地址，虽然它们的内容都是 &quot;Programming&quot;，但由于 s1 是直接创建的字符串字面量，而 s2 是通过 new String(&quot;Programming&quot;) 显式创建的对象，所以它们位于不同的内存区域，因此结果为 false。

s1 == s5：s5 是由两个字符串字面量 &quot;Program&quot; 和 &quot;ming&quot; 直接相加得到的，编译器会在编译期间将其优化合并为一个字符串字面量 &quot;Programming&quot;，因此它与 s1 引用的是同一个字符串常量池中的对象，结果为 true。

s1 == s6：s6 是通过 s3 + s4 运算符连接得到的，这是一个运行时操作，会创建一个新的 String 对象，而不是复用字符串常量池中的 &quot;Programming&quot;，所以 s1 和 s6 指向不同对象，结果为 false。

s1 == s6.intern()：s6.intern() 方法会尝试在字符串常量池中查找与 s6 内容相同的字符串，如果存在则返回该常量池中的引用，否则将 s6 加入常量池并返回其引用。因为 &quot;Programming&quot; 已经存在于常量池中（由前面的 s5 创建），所以这里返回的是常量池中的 &quot;Programming&quot; 的引用，因此 s1 和 s6.intern() 指向同一对象，结果为 true。

s2 == s2.intern()：s2 是通过 new String(&quot;Programming&quot;) 创建的，即使调用 intern() 方法将其加入常量池，原始的 s2 仍然指向堆上的对象，而 s2.intern() 指向常量池中的对象，因此结果为 false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,50),r=[t];function l(d,u){return a(),s("div",null,r)}const p=n(i,[["render",l],["__file","javaBase.html.vue"]]);export{p as default};
