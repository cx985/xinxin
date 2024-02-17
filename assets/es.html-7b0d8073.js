import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-dec41dfb.js";const i={},t=e(`<h1 id="es" tabindex="-1"><a class="header-anchor" href="#es" aria-hidden="true">#</a> ES</h1><h2 id="es常见操作" tabindex="-1"><a class="header-anchor" href="#es常见操作" aria-hidden="true">#</a> ES常见操作</h2><h3 id="_1-建表" tabindex="-1"><a class="header-anchor" href="#_1-建表" aria-hidden="true">#</a> 1. 建表</h3><div class="language-es line-numbers-mode" data-ext="es"><pre class="language-es"><code>PUT statistic_result_detailinfo
{ 
 &quot;mappings&quot;: {
  &quot;statistic_result_detailinfo&quot;: {
   &quot;dynamic&quot;: &quot;false&quot;,
   &quot;properties&quot;: {
    &quot;ID&quot;: {
     &quot;type&quot;: &quot;keyword&quot;
    },
    &quot;GATHER_PERSON&quot;: {
     &quot;type&quot;: &quot;keyword&quot;
    },
    &quot;ITEM_CODE&quot;: {
     &quot;type&quot;: &quot;keyword&quot;
    },
    &quot;ITEM_NAME&quot;: {
     &quot;type&quot;: &quot;keyword&quot;
    },
    &quot;PITEM_NAME&quot;: {
     &quot;type&quot;: &quot;keyword&quot;
    },
    &quot;TOTAL&quot;: {
     &quot;type&quot;: &quot;long&quot;
    },
    &quot;DELTOTAL&quot;: {
     &quot;type&quot;: &quot;long&quot;
    },
    &quot;IMPTIME&quot;: {
     &quot;type&quot;: &quot;date&quot;,
     &quot;format&quot;: &quot;yyyy-MM-dd HH:mm:ss&quot;
    },
    &quot;DATAID&quot;: {
     &quot;type&quot;: &quot;keyword&quot;
    },
    &quot;ACCOUNT_RECORD_ID&quot;: {
     &quot;type&quot;: &quot;keyword&quot;
    },
    &quot;STATISTIC_INFO&quot;: {
     &quot;type&quot;: &quot;keyword&quot;
    }
   }
  }
 },
 &quot;settings&quot;: {
  &quot;number_of_shards&quot;: &quot;1&quot;,
  &quot;number_of_replicas&quot;: &quot;1&quot;
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生产环境常用</p><ul><li><p>1.建立create-template.sh文件</p></li><li><p>2.内容如下</p><div class="language-she line-numbers-mode" data-ext="she"><pre class="language-she"><code>#!/bin/bash
 
cd ./
 
#这样就会把所有的文件名保存到 ls.log 文件中
ls *.json &gt; ls.log

for i in $(cat ls.log)
do
  echo $i
  #有用户名密码的执行方式
  #curl -k --user gaonaite:Ceye.123 -H &quot;Content-Type: application/json&quot; -X PUT -d @$i &quot;https://154.154.0.88:24100/_template/\${i/.json/}&quot;
  #无密码执行方式
  curl -H &quot;Content-Type: application/json&quot; -X PUT -d @$i &quot;http://192.168.3.203:9200/_template/\${i/.json/}&quot;
done

rm -f ls.log

echo &#39;done!!!&#39;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_2-复杂查询" tabindex="-1"><a class="header-anchor" href="#_2-复杂查询" aria-hidden="true">#</a> 2. 复杂查询</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>get statistic_unit_total<span class="token operator">/</span>_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
          <span class="token string">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;CREATEDATE&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token string">&quot;gte&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-03 00:00:00&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;lte&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2024-01-03 23:59:59&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;APPTYPE&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token string">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jstx&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;TYPE&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token string">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;group&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;script&quot;</span><span class="token operator">:</span> <span class="token string">&quot; doc[&#39;UNIT&#39;].value + &#39;|&#39; + doc[&#39;APPTYPE&#39;].value + &#39;-&#39; + doc[&#39;APPID&#39;].value&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">20000</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;count&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;sum&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TOTAL&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-查询字段不为空的数据-类型不能是text" tabindex="-1"><a class="header-anchor" href="#_3-查询字段不为空的数据-类型不能是text" aria-hidden="true">#</a> 3. 查询字段不为空的数据（类型不能是text）</h3><div class="language-es line-numbers-mode" data-ext="es"><pre class="language-es"><code>get statistic_unit_total/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must_not&quot;: {
        &quot;term&quot;: {
          &quot;COL&quot;: &quot;&quot;
        }
      }
    }
  },
  &quot;size&quot;: 1000
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[t];function u(l,d){return s(),a("div",null,o)}const r=n(i,[["render",u],["__file","es.html.vue"]]);export{r as default};
