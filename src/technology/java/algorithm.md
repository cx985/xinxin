---
icon: interview
order: 7
category:
  - 算法
tag:
  - 数据结构
---

# 数据结构和算法

## 第一章：算法简介

### 1.1 算法的基本概念

#### 1.1.1 什么是算法

​	算法：故名思意，就是指计算方法，指解决一个问题具体的步骤和方法

#### 1.1.2 为什么学习算法

​	提高自己的核心竞争力，提高自己解决问题的能力

### 1.2 算法的特征

- 有穷性：算法必须在能在执行有限个步骤之后终止
- 确切性：算法的每一步骤必须有确切的定义
- 输入项：一个算法有0个或者多个输入
- 输出项：一个算法有一个或多个输出，以反映对输入数据加工后的结果
- 可行性：每个计算步骤都可以在有限时间内完成

### 1.3 算法复杂度

#### 1.3.1 时间复杂度

​	算法的时间复杂度，是指执行算法所需要的计算工作量。

一般来说，计算机算法是问题规模n 的函数f(n)，算法的时间复杂度也因此记做：T(n)=Ο(f(n))。

问题的规模n 越大，算法执行的时间的增长率与f(n) 的增长率正相关，称作渐进时间复杂度（Asymptotic Time Complexity）。

#### 1.3.2 空间复杂度

 算法的空间复杂度，是指算法需要消耗的内存空间。其计算和表示方法与时间复杂度类似，一般都用复杂度的渐近性来表示



#### 1.3.3 时间复杂度的计算

  



## 第二章：数组问题讲解

 数组：会利用索引来记录每个元素在数组中的位置，索引是从0算起的

### 2.1 两数之和

#### 2.1.1 题目

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素

**示例**

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9

所以返回 [0, 1]



#### 2.1.2 方法一：暴力法

```java
public static int[] twoSum(int[] arr,int target){
        for(int i=0;i<arr.length;i++){
            for(int j=i+1;j<arr.length;j++){
                if(arr[i]+arr[j] == target){
                    return new int[]{i,j};
                }
            }
        }
        return new int[]{};
    }


解释：从结果来说，j也可以从0开始，只不过多遍历了几次，两数之和，两个数，正常的最里面的for循环从第一个数的后面开始
```



#### 2.1.3 方法二：哈希表

```java
public static int[] twoSum(int[] arr,int target){
    //创建一个hashmap存储数组元素和对应的索引
    Map<Integer,Integer> map = new HashMap<>();
    
    //遍历数组元素
    for(int i=0; i<arr.length;i++){
        int complement = target - arr[i];
        //检测是否存在与当前元素配对的差值
        if(map.containsKey(complement)){
            //返回两个数的索引
            return new int[]{map.get(complement),i};
        }
        
        //将当前元素和索引存入hashmap中
        map.put(nums[i],i);
    }
    
    //如果没有找到符合条件的两个数，返回空数组
    return new int[0];
}
```



### 2.2 三数之和

#### 2.2.1 题目说明

给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

**示例**:

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：

[

 [-1, 0, 1],

 [-1, -1, 2]

]



#### 2.2.2 解题（推荐双指针法）

1. 将数组排序：首先，对给定的数组进行排序，以便更方便地使用双指针方法。排序的时间复杂度为O(n log n)，其中n是数组的长度。
2. 遍历数组：遍历排序后的数组，在每个位置上选择一个数字作为第一个数（最左边的指针）。
3. 使用双指针查找另外两个数：在选择的第一个数后面的子数组部分中，使用双指针方法来查找另外两个数，使得它们的和等于0减去第一个数。一个指针从第一个数的右边开始移动，即左指针，另一个指针从数组尾部向左移动，即右指针。
4. 调整指针位置：根据双指针所指的三个数之和与目标和比较的结果，调整指针的位置。如果三数之和小于目标和，将左指针向右移动一位；如果三数之和大于目标和，将右指针向左移动一位；如果三数之和等于目标和，将这三个数添加到结果集中。
5. 继续遍历：重复步骤3和步骤4，直到遍历完整个数组。
6. 返回结果：返回找到的所有满足条件的三个数的组合

```java
public static List<List<Integer>> threeSum(int[] nums) {
		// 对输入数组进行排序
		Arrays.sort(nums);

		// 创建一个 ArrayList 用于存储满足条件的三元组
		List<List<Integer>> result = new ArrayList<>();

		// 遍历数组，略过最后两个元素，因为我们需要至少三个元素来形成一个三元组
		for (int i = 0; i < nums.length - 2; i++) {
			// 排序后的数组，如果当前元素大于0，不可能再找到和为0的三元组，因为left=i+1
			if (nums[i] > 0) {
				break;
			}

			// 跳过重复元素，以避免重复的三元组
			if (i > 0 && nums[i] == nums[i - 1]) {
				continue;
			}

			// 初始化双指针，一个指针从当前元素的下一个开始，另一个指针从数组的最后一个元素开始
			int left = i + 1;
			int right = nums.length - 1;

			// 当左指针小于右指针时，继续寻找满足条件的三元组
			while (left < right) {
				int sum = nums[i] + nums[left] + nums[right];

				// 根据三数之和与0的关系，移动左指针或右指针
				if (sum == 0) {
					// 找到一个满足条件的三元组，添加到结果列表中
					result.add(Arrays.asList(nums[i], nums[left], nums[right]));

					// 跳过重复元素，以避免重复的三元组
					while (left < right && nums[left] == nums[left + 1]) {
						left++;
					}
					while (left < right && nums[right] == nums[right - 1]) {
						right--;
					}

					// 找到一个满足条件的三元组后，同时移动左右指针继续寻找下一个三元组
					left++;
					right--;
				} else if (sum < 0) {
					// 如果和小于0，需要增加和的值，因此将左指针向右移动
					left++;
				} else {
					// 如果和大于0，需要减小和的值，因此将右指针向左移动
					right--;
				}
			}
		}

		// 返回包含满足条件的三元组的结果列表
		return result;
	}
```



### 2.3 下一个排列

####  2.3.1 题目说明

实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须原地修改，只允许使用额外常数空间。

 

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。

1,2,3 → 1,3,2

3,2,1 → 1,2,3

1,1,5 → 1,5,1



#### 2.3.2 解题：一遍扫描

解题思路：

1. 先排除例外，如果数组是按照降序排列的，就没有升序的子序列了。 下一个排列就是将数组升序排列 比如[9,8,7]，下一个排列就是[7,8,9]
2. 如果数组有一个升序的子序列，那么就一定可以找到它的下一个排列。 也就是说从右往左，找到第一对连续的数字 nums[i] 和 nums[i+1],满足nums[i+1] > nums[i]
3. 比如 [1,5,7,4,2] 满足 nums[i+1] > nums[i] 则 i = 1, (num[2] = 7) > (num[1] = 5), 然后 从i+1到 数组结束，查找比5大，比7小的数字，
4. 找到了6 , 那么就确定了前两个数字1,6 ， 后面的按正序排序就行了
5. 如果没找到，则直接替换5和7的位置即可

```java
public void nextPermutation(int[] nums) {
        if (nums == null || nums.length <= 1) {
            return;
        }
        
        int i = nums.length - 2;
        while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--; // 从右向左找到第一个不满足递减顺序的元素
        }
        
        if (i >= 0) {
            int j = nums.length - 1;
            while (j > i && nums[j] <= nums[i]) {
                j--; // 从右向左找到第一个大于nums[i]的元素
            }
            
            swap(nums, i, j); // 交换找到的两个元素
        }
        
        reverse(nums, i + 1); // 翻转i之后的元素
    }
    
    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    
    private void reverse(int[] nums, int start) {
        int i = start, j = nums.length - 1;
        while (i < j) {
            swap(nums, i, j);
            i++;
            j--;
        }
    }
```





## 第三章：二分查找

## 第四章：字符串问题

## 第五章：滑动窗口问题

## 第六章：链表问题

## 第七章：哈希表

## 第八章：栈和队列

## 第九章：排序算法

### 9.1 选择排序法

#### 9.1.1 算法思路

算法思路

- 先把最小得拿出来
- 剩下的，再把最新的拿出来
- 剩下的再把最小的拿出来
- 每次选择还没处理的元素里最小的元素

如数组 6 4 2 3 1 5

每次找数组最小的：1 2 3 4 5 6

发现排序过程中占用了额外的空间

可否原地完成？ 原地排序呢？可以

#### 9.1.2  标准版（int类型）

```java
public static void selectSort(int[] arr){
        for(int i=0;i<arr.length;i++){
            //定义最小得值得索引
            int minIndex = i;
            for(int j=i; j<arr.length;j++){
                if(arr[j]<arr[minIndex]){
                    //如果比最小得索引小，则赋值最小索引
                    minIndex = j;
                }
            }

            //每次外层循环找到最小的，将i和最小的值交换位置
            swap(arr,i,minIndex);
        }
    }

    public static void swap(int arr[],int i,int j){
        int t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
```



#### 9.1.3 泛型版（兼容所有数据类型）

```java
public static  <E extends Comparable<E>> void selectSort1(E[] arr){
        for(int i=0;i<arr.length;i++){
            int minIndex = i;
            for(int j=i; j<arr.length;j++){
                if(arr[j].compareTo(arr[minIndex]) < 0){
                    minIndex = j;
                }
            }

            swap1(arr,i,minIndex);
        }
    }

    public static <E> void swap1(E arr[],int i,int j){
        E t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }

    public static void main(String[] args) {
        Integer arr[] = {6,4,1,3,2,5};
        Test.selectSort1(arr);
        System.out.println(Arrays.toString(arr));

    }
```

注意：

1. 接口泛型需要写在void前面，且需要继承Comparable
2. Comparable 和 Comparator的区别



### 9.2 插入排序法

#### 9.2.1 算法思路

插入排序类似生活中把牌按顺序排列

已知数据 

i= 0 

6 4 2 3 1 5

arr[0,i) 已经排好序的，arr[i,n) 未排序的

把arr[i]放到合适的位置



和选择排序的区别

- 选择排序每次遍历i，最前面的元素总是最小的
- 插入排序，对应没遍历完的数据是不会改变其位置，最前面的元素是i前面元素最小的

#### 9.2.2 方式一

```JAV
{
        for(int i=0;i<arr.length;i++){
            for(int j=i; j-1>=0;j--){
                if(arr[j].compareTo(arr[j-1]) < 0){
                    swap1(arr,j,j-1);
                }else{
                    break;
                }
            }
        }
    }

    public static <E> void swap1(E arr[],int i,int j){
        E t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }

```

#### 9.2.3 方式二

```java
public static <E extends Comparable<E>> void insertSort2(E[] arr){
        for(int i=0;i<arr.length;i++){
           E t = arr[i];
           int j;
           for(j= i; j-1 >= 0 && t.compareTo(arr[j-1]) < 0 ;j--){
               arr[j] = arr[j-1];
           }
           arr[j] = t;
        }
    }
```



## 第十章：二叉树及递归

## 第十一章：贪心算法

## 第十二章：动态规划

## 第十三章: 回溯算法

## 第十四章：深度优先搜索和广度优先搜索
