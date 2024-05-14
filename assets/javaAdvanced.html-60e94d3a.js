import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-57970fd2.js";const t="/assets/java-error-3fe8a12b.png",i={},l=e('<h1 id="java进阶" tabindex="-1"><a class="header-anchor" href="#java进阶" aria-hidden="true">#</a> JAVA进阶</h1><div class="hint-container tip"><p class="hint-container-title">java进阶总结</p><p>这里对java中基础的进阶总结</p></div><h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常" aria-hidden="true">#</a> 异常：</h2><p>Throwable 父类 Exception Error<br><img src="'+t+`" alt="java异常图" loading="lazy"></p><p>Exception: 程序本身可以处理的异常，可以分为Checked Exception(受检查异常，必须处理) 和Unchecked Exception(不受检查异常，可以不处理)<br> Error: 程序无法处理的错误，如java虚拟机运行错误</p><p>不受检查异常： 如空指针异常，数组越界</p><h3 id="_1-finally-里面的代码一定会执行吗" tabindex="-1"><a class="header-anchor" href="#_1-finally-里面的代码一定会执行吗" aria-hidden="true">#</a> 1. finally 里面的代码一定会执行吗</h3><p>答：不一定，在catch里面执行System.exit(1)</p><h3 id="_2-try-with-resource" tabindex="-1"><a class="header-anchor" href="#_2-try-with-resource" aria-hidden="true">#</a> 2. try-with-resource</h3><p>使用Java7之后的try-with-resources 语句改造上面的代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try(Scanner scanner = new Scanner(new File(&quot;test.txt&quot;))) {
  while(scanner.hasNext()){
    System.out.println(scanner.nextLine());
  }

}catch(FileNotFoundException fnfe){
  fnfe.printStackTrace();
}

备注：语句可以直接写在try后面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-枚举" tabindex="-1"><a class="header-anchor" href="#_3-枚举" aria-hidden="true">#</a> 3. 枚举</h2><h3 id="_3-1-枚举作为数据存储标准写法" tabindex="-1"><a class="header-anchor" href="#_3-1-枚举作为数据存储标准写法" aria-hidden="true">#</a> 3.1. 枚举作为数据存储标准写法</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">DeleteEnum</span> <span class="token punctuation">{</span>

    <span class="token function">YES</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;已删除&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">NO</span><span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;未删除&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> code<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token class-name">DeleteEnum</span><span class="token punctuation">(</span><span class="token class-name">String</span> code<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getNameByCode</span><span class="token punctuation">(</span><span class="token class-name">String</span> code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">DeleteEnum</span> type <span class="token operator">:</span> <span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>type<span class="token punctuation">.</span>code<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> type<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-泛型" tabindex="-1"><a class="header-anchor" href="#_4-泛型" aria-hidden="true">#</a> 4. 泛型</h2><h3 id="_4-1-泛型本质是为了将类型参数化" tabindex="-1"><a class="header-anchor" href="#_4-1-泛型本质是为了将类型参数化" aria-hidden="true">#</a> 4.1 泛型本质是为了将类型参数化</h3><h3 id="_4-2-作用" tabindex="-1"><a class="header-anchor" href="#_4-2-作用" aria-hidden="true">#</a> 4.2 作用：</h3><ul><li><p>泛型可以在编译时对类型进行安全检测，使得所有的强制转换都是自动隐式实现的，保证了类型的安全性；</p></li><li><p>泛型作为”代码模板“，实现了 一套代码对各种类型的套用， 提高了代码的可重用性</p></li></ul><h3 id="_4-3-使用场景" tabindex="-1"><a class="header-anchor" href="#_4-3-使用场景" aria-hidden="true">#</a> 4.3 使用场景：</h3><ul><li><p>泛型集合</p><p>Collection 的源码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> extents <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>泛型方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 泛型方法</span>
<span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">printArray</span><span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">T</span> element <span class="token operator">:</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>element <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">int</span> <span class="token function">seach1</span><span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span><span class="token class-name">E</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>

备注：在方法<span class="token keyword">void</span> 或返回值前面需要加泛型<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>泛型接口</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//在接口名称后面紧跟泛型&lt;&gt;</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">InterfaceName</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>
    <span class="token comment">//接口的方法定义</span>
<span class="token punctuation">}</span>

<span class="token comment">//可以同时定义多个泛型，多个泛型用“，”逗号分割</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">InterfaceName2</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">M</span><span class="token punctuation">,</span><span class="token class-name">N</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>
    <span class="token comment">//接口的方法定义</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>泛型类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClassName</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">T</span> first<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">T</span> second<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">ClassName</span><span class="token punctuation">(</span><span class="token class-name">T</span> first<span class="token punctuation">,</span><span class="token class-name">T</span> second<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>first <span class="token operator">=</span> first<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>second <span class="token operator">=</span> second<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">getFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> first<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">getSecond</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> second<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>泛型加反射</p></li></ul><h3 id="_4-4-泛型字母解释" tabindex="-1"><a class="header-anchor" href="#_4-4-泛型字母解释" aria-hidden="true">#</a> 4.4 <strong>泛型字母解释</strong></h3><ul><li>E: Element(表示集合元素，常在集合中使用)</li><li>T：Type(表示java类，常在类和接口中使用)</li><li>K: key(表示健)</li><li>V: value(表示值)</li><li>N: Number(表示数值类型)</li><li>?: 表示不确定的java类型</li></ul><h3 id="_4-5-泛型通配符" tabindex="-1"><a class="header-anchor" href="#_4-5-泛型通配符" aria-hidden="true">#</a> 4.5 <strong>泛型通配符</strong></h3><p>1、&lt;?&gt;: 被称作无限定的通配符<br> 2、&lt;? extends T&gt;: 被称作有上届的通配符<br> 3、&lt;? super T&gt;: 被称作有下界的通配符</p><h3 id="_4-6-需求-给定一个数组和目录值要求返回对应下标-兼容所有类型" tabindex="-1"><a class="header-anchor" href="#_4-6-需求-给定一个数组和目录值要求返回对应下标-兼容所有类型" aria-hidden="true">#</a> 4.6 需求：给定一个数组和目录值要求返回对应下标，兼容所有类型</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//int 标准版</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">seach</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span><span class="token keyword">int</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> i<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment">//泛型版</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">int</span> <span class="token function">seach1</span><span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span><span class="token class-name">E</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> i<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;7&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;9&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;ss&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;aa&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> ss <span class="token operator">=</span> <span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token function">seach1</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> <span class="token string">&quot;ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ss<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-java反射" tabindex="-1"><a class="header-anchor" href="#_5-java反射" aria-hidden="true">#</a> 5. java反射</h2><h3 id="_5-1-序列化和反序列化" tabindex="-1"><a class="header-anchor" href="#_5-1-序列化和反序列化" aria-hidden="true">#</a> 5.1 序列化和反序列化</h3><ul><li>序列化：将数据结构或对象转换成二进制字节流的过程</li><li>反序列化： 将在序列化过程中所生成的二进制字节流转换成数据结构或者对象的过程<br> 如果有些字段不想被序列化可以用transient 修饰</li></ul><h3 id="_5-2-反射优缺点" tabindex="-1"><a class="header-anchor" href="#_5-2-反射优缺点" aria-hidden="true">#</a> 5.2 反射优缺点</h3><ul><li>优点：代码更加灵活</li><li>缺点：增加了安全问题</li></ul><h3 id="_5-3获取class的四种方式" tabindex="-1"><a class="header-anchor" href="#_5-3获取class的四种方式" aria-hidden="true">#</a> 5.3获取class的四种方式</h3><ul><li><p>类.class</p></li><li><p>Class.forName()</p><p>Class class = Class.forName(&quot;com.cx.TargetObject&quot;)</p></li><li><p>通过对象实例instance.getClass() 获取</p><p>TargetObject o = new TargetObject();<br> Class b = o.getClass();</p></li><li><p>通过类加载器xxxClassLoader.loadClass()传入类路径获取</p><p>ClassLoader.getSystemClassLoader().loadClass(&quot;cn.cx.TargetObject&quot;)</p></li></ul><h2 id="_6-java-值传递" tabindex="-1"><a class="header-anchor" href="#_6-java-值传递" aria-hidden="true">#</a> 6. java 值传递</h2><p>值传递：方法接收的是实参的拷贝，会创建副本<br> 引用传递：方法接收的直接是实参所引用的对象在堆中的地址，不会创建副本，对形参的修改将影响到实参</p><p>结论：如果参数是基本类型的话，很简单，传递的就是基本类型的字面量值的拷贝，会创建副本。<br> 如果参数是引用类型，传递的就是实参所引用的对象在堆中地址值的拷贝，同样也会创建副本</p><p>示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static void main(String[] args) {
    int num1 = 10;
    int num2 = 20;
    swap(num1, num2);
    System.out.println(&quot;num1 = &quot; + num1);
    System.out.println(&quot;num2 = &quot; + num2);
}
 
public static void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    System.out.println(&quot;a = &quot; + a);
    System.out.println(&quot;b = &quot; + b);
}
 
输出
num1 = 10
num2 = 20
a = 20
b = 10 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-jdk代理" tabindex="-1"><a class="header-anchor" href="#_7-jdk代理" aria-hidden="true">#</a> 7. jdk代理</h2><ol><li>定义一个接口及其实现类；</li><li>自定义 InvocationHandler 并重写invoke方法，在 invoke 方法中我们会调用原生方法（被代理类的方法）并自定义一些处理逻辑；</li><li>通过 Proxy.newProxyInstance(ClassLoader loader,Class&lt;?&gt;[] interfaces,InvocationHandler) 方法创建代理对象</li></ol><p>例子</p><ol><li>定义发送短信的接口</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface SmsService {
    String send(String message);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>实现发送短信的接口</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class SmsServiceImpl implements SmsService{
    public String send(String message){
       System.out.println(&quot;send message:&quot; +message);
       return message;
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>定义一个jdk动态类</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.lang.reflect.InvocationHandler;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
 
public class DebugInvocationHandler implements InvocationHandler {
    /**
     * 代理类中的真实对象
     */
    private final Object target;
 
    public DebugInvocationHandler(Object target) {
        this.target = target;
    }
 
 
    public Object invoke(Object proxy, Method method, Object[] args) throws InvocationTargetException, IllegalAccessException {
        //调用方法之前，我们可以添加自己的操作
        System.out.println(&quot;before method &quot; + method.getName());
        Object result = method.invoke(target, args);
        //调用方法之后，我们同样可以添加自己的操作
        System.out.println(&quot;after method &quot; + method.getName());
        return result;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>获取代理对象工厂类</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class JdkProxyFactory {
    public static Object getProxy(Object target) {
        return Proxy.newProxyInstance(
                target.getClass().getClassLoader(), // 目标类的类加载
                target.getClass().getInterfaces(),  // 代理需要实现的接口，可指定多个
                new DebugInvocationHandler(target)   // 代理对象对应的自定义 InvocationHandler
        );
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>实际使用</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SmsService smsService = (SmsService) JdkProxyFactory.getProxy(new SmsServiceImpl());
smsService.send(&quot;java&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>6.控制台打印</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>before method send
send message:java
after method send
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>jdk动态代理(默认)：<strong>运行时创建接口的代理实例，通过接口实现</strong><br> cglib代理：<strong>采用底层的字节码技术，当目标对象不存在接口时，创建子类代理的实例，通过继承实现</strong></p><h2 id="_8-unsafe类" tabindex="-1"><a class="header-anchor" href="#_8-unsafe类" aria-hidden="true">#</a> 8. unsafe类</h2><p><strong>可以直接操作内存，使用要慎重</strong></p><p>unsafe类左右<br> 内存操作<br> 内存屏障<br> 对象操作<br> 数据操作<br> CAS 操作<br> 线程调度<br> Class 操作<br> 系统信息</p>`,58),p=[l];function c(o,u){return s(),a("div",null,p)}const v=n(i,[["render",c],["__file","javaAdvanced.html.vue"]]);export{v as default};
