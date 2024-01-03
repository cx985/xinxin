import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-7d5b7036.js";const t="/assets/image-9f23e8c4.png",l={},i=e(`<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> Mysql</h1><p>mysql知识总结汇总</p><h2 id="常见脚本创建" tabindex="-1"><a class="header-anchor" href="#常见脚本创建" aria-hidden="true">#</a> 常见脚本创建</h2><h3 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表" aria-hidden="true">#</a> 创建表</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> <span class="token keyword">if</span> <span class="token operator">not</span> <span class="token keyword">exists</span> <span class="token identifier"><span class="token punctuation">\`</span>test_table<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
  id <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">auto_increment</span> <span class="token keyword">comment</span> <span class="token string">&#39;主键id&#39;</span><span class="token punctuation">,</span>
  record_id <span class="token keyword">int</span>  <span class="token keyword">comment</span> <span class="token string">&#39;记录id&#39;</span><span class="token punctuation">,</span>
  create_time <span class="token keyword">datetime</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">default</span> <span class="token keyword">current_timestamp</span> <span class="token keyword">comment</span> <span class="token string">&#39;创建时间&#39;</span><span class="token punctuation">,</span>
  update_time <span class="token keyword">datetime</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;更新时间&#39;</span><span class="token punctuation">,</span>
  test_name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_general_ci <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;测试内容&#39;</span><span class="token punctuation">,</span> 
  jyaq <span class="token keyword">text</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_general_ci <span class="token keyword">COMMENT</span> <span class="token string">&#39;简要案情&#39;</span><span class="token punctuation">,</span>

  <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">using</span> <span class="token keyword">btree</span><span class="token punctuation">,</span>
  <span class="token keyword">key</span> idx_test_index <span class="token punctuation">(</span>test_name<span class="token punctuation">)</span> <span class="token keyword">using</span> <span class="token keyword">btree</span>

<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> <span class="token operator">=</span> utf8mb4 <span class="token keyword">COLLATE</span> <span class="token operator">=</span> utf8mb4_general_ci <span class="token keyword">COMMENT</span> <span class="token operator">=</span> <span class="token string">&#39;测试表表名称&#39;</span> ROW_FORMAT <span class="token operator">=</span> Dynamic<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新表" tabindex="-1"><a class="header-anchor" href="#更新表" aria-hidden="true">#</a> 更新表</h3><h3 id="修改表字段-可以重复执行-线上环境推荐" tabindex="-1"><a class="header-anchor" href="#修改表字段-可以重复执行-线上环境推荐" aria-hidden="true">#</a> 修改表字段(可以重复执行，线上环境推荐)</h3><ul><li>新增字段</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>drop procedure if exists add_field_test_table;
delimiter $$
create procedure add_field_test_table()
  begin
      if not exists (select 1 from information_schema.columns where table_schema=&#39;test&#39; and table_name = &#39;test_table&#39; and column_name = &#39;test_name2&#39;)
        then
        ALTER TABLE \`test_table\` add COLUMN \`test_name2\` varchar(255) DEFAULT NULL COMMENT &#39;测试内容2添加&#39;;
        end if ;
  end $$
delimiter ;
call add_field_test_table;
drop procedure if exists add_field_test_table;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改字段</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>drop procedure if exists modify_field_test_table;
delimiter $$
create procedure modify_field_test_table()
  begin
      if exists (select 1 from information_schema.columns where table_schema=&#39;test&#39; and table_name = &#39;test_table&#39; and column_name = &#39;test_name2&#39;)
        then
        ALTER TABLE \`test_table\` modify COLUMN \`test_name2\` varchar(50) DEFAULT NULL COMMENT &#39;测试内容2修改&#39;;
        end if ;
  end $$
delimiter ;
call modify_field_test_table;
drop procedure if exists modify_field_test_table;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="oracle" tabindex="-1"><a class="header-anchor" href="#oracle" aria-hidden="true">#</a> ORACLE</h1><h2 id="创建表-1" tabindex="-1"><a class="header-anchor" href="#创建表-1" aria-hidden="true">#</a> 创建表</h2><ul><li>标准写法</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> test_table<span class="token punctuation">(</span>
  id varchar2<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
  name varchar2<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  birthdate <span class="token keyword">date</span><span class="token punctuation">,</span>
  is_active <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">TABLE</span> test_table <span class="token operator">IS</span> <span class="token string">&#39;测试表名&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">COLUMN</span> test_table<span class="token punctuation">.</span>name <span class="token operator">IS</span> <span class="token string">&#39;测试姓名&#39;</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>生产环境执行-推荐写法(需要在命令窗口执行)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  PROMPT test_table 创建表
  DECLARE
      FLAG_NUM NUMBER;
  BEGIN
      SELECT COUNT(*) INTO FLAG_NUM
      FROM USER_TABLES ATS
      WHERE ATS.TABLE_NAME = UPPER(&#39;test_table&#39;);
      IF FLAG_NUM = 0 THEN
          EXECUTE IMMEDIATE &#39;CREATE TABLE test_table(
                      id varchar2(255) primary key,
                      name varchar2(50),
                      birthdate date,
                      is_active char(1)
            )&#39;;
          -- ADD COMMENTS TO THE COLUMNS
          EXECUTE IMMEDIATE &#39;COMMENT ON TABLE test_table IS &#39;&#39;测试表名&#39;&#39;&#39;;
          EXECUTE IMMEDIATE &#39;COMMENT ON COLUMN test_table.name IS &#39;&#39;测试姓名&#39;&#39;&#39;;
      END IF;
  END;
  /
  COMMIT;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+`" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure></li></ul><h2 id="更新表-1" tabindex="-1"><a class="header-anchor" href="#更新表-1" aria-hidden="true">#</a> 更新表</h2><ul><li><p>修改表字段varchar为clob</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alter table test_table rename column name to name_clob;
alter table test_table add name clob;
update test_table set name=trim(name_clob);
alter table test_table drop column name_clob;
comment  on  column  test_table.name   is  &#39;测试修改&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>表后面新增字段</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> test_table
<span class="token keyword">add</span> <span class="token punctuation">(</span>sms_type number<span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    bkry_id varchar2<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span>  <span class="token keyword">default</span> <span class="token boolean">null</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">comment</span>  <span class="token keyword">on</span>  <span class="token keyword">column</span>  test_table<span class="token punctuation">.</span>sms_type   <span class="token operator">is</span>  <span class="token string">&#39;短信类型&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">comment</span>  <span class="token keyword">on</span>  <span class="token keyword">column</span>  test_table<span class="token punctuation">.</span>bkry_id    <span class="token operator">is</span>  <span class="token string">&#39;布控人员id&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改表字段长度</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>
<span class="token keyword">alter</span> <span class="token keyword">table</span> test_table <span class="token keyword">modify</span> <span class="token punctuation">(</span>bkry_id varchar2<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,18),d=[i];function p(c,o){return s(),a("div",null,d)}const k=n(l,[["render",p],["__file","mysql.html.vue"]]);export{k as default};
