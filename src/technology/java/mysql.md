---
icon: markdown
order: 6
category:
  - 使用指南
tag:
  - mysql
---

# Mysql
mysql知识总结汇总

## 常见脚本创建

### 创建表
```sql
create table if not exists `test_table` (
  id bigint(20) unsigned not null auto_increment comment '主键id',
  record_id int  comment '记录id',
  create_time datetime not null default current_timestamp comment '创建时间',
  update_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  test_name varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci not null comment '测试内容', 
  jyaq text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci COMMENT '简要案情',

  primary key (id) using btree,
  key idx_test_index (test_name) using btree

) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '测试表表名称' ROW_FORMAT = Dynamic;

```

### 更新表

### 修改表字段(可以重复执行，线上环境推荐)

- 新增字段
```mysql
drop procedure if exists add_field_test_table;
delimiter $$
create procedure add_field_test_table()
  begin
      if not exists (select 1 from information_schema.columns where table_schema='test' and table_name = 'test_table' and column_name = 'test_name2')
        then
        ALTER TABLE `test_table` add COLUMN `test_name2` varchar(255) DEFAULT NULL COMMENT '测试内容2添加';
        end if ;
  end $$
delimiter ;
call add_field_test_table;
drop procedure if exists add_field_test_table;

```

- 修改字段
  
```mysql
drop procedure if exists modify_field_test_table;
delimiter $$
create procedure modify_field_test_table()
  begin
      if exists (select 1 from information_schema.columns where table_schema='test' and table_name = 'test_table' and column_name = 'test_name2')
        then
        ALTER TABLE `test_table` modify COLUMN `test_name2` varchar(50) DEFAULT NULL COMMENT '测试内容2修改';
        end if ;
  end $$
delimiter ;
call modify_field_test_table;
drop procedure if exists modify_field_test_table;


```

