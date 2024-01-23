---
icon: markdown
order: 6
category:
  - mysql
tag:
  - mysql
---

# 数据库
## MYSQL
mysql知识总结汇总

## 1. 常见脚本创建

### 1.1 创建表
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

### 1.2 更新表

### 1.3 修改表字段(可以重复执行，线上环境推荐)

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


## ORACLE

## 1. 常见脚本创建

### 1.1  创建表
- 标准写法
```sql
CREATE TABLE test_table(
  id varchar2(255) primary key,
  name varchar2(50),
  birthdate date,
  is_active char(1)
);

COMMENT ON TABLE test_table IS '测试表名';
COMMENT ON COLUMN test_table.name IS '测试姓名';

```

- 生产环境执行-推荐写法(需要在命令窗口执行)
  ```
    PROMPT test_table 创建表
    DECLARE
        FLAG_NUM NUMBER;
    BEGIN
        SELECT COUNT(*) INTO FLAG_NUM
        FROM USER_TABLES ATS
        WHERE ATS.TABLE_NAME = UPPER('test_table');
        IF FLAG_NUM = 0 THEN
            EXECUTE IMMEDIATE 'CREATE TABLE test_table(
                        id varchar2(255) primary key,
                        name varchar2(50),
                        birthdate date,
                        is_active char(1)
              )';
            -- ADD COMMENTS TO THE COLUMNS
            EXECUTE IMMEDIATE 'COMMENT ON TABLE test_table IS ''测试表名''';
            EXECUTE IMMEDIATE 'COMMENT ON COLUMN test_table.name IS ''测试姓名''';
        END IF;
    END;
    /
    COMMIT;


  ```

  ![Alt text](image.png)

### 1.2 更新表

- 修改表字段varchar为clob
  ```
  alter table test_table rename column name to name_clob;
  alter table test_table add name clob;
  update test_table set name=trim(name_clob);
  alter table test_table drop column name_clob;
  comment  on  column  test_table.name   is  '测试修改';
  ```
- 表后面新增字段
  ```sql
  alter table test_table
  add (sms_type number(9) default null,
      bkry_id varchar2(255)  default null
  );

  comment  on  column  test_table.sms_type   is  '短信类型';
  comment  on  column  test_table.bkry_id    is  '布控人员id'
  ```

- 修改表字段长度
  ```sql
  
  alter table test_table modify (bkry_id varchar2(50));
  
  ```