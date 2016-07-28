# newcoder-oj-web_front_end_skills_challenge

[牛客网题目](http://www.nowcoder.com/ta/front-end)

### 01 修改 this 指向

- 修改this指针可以使用bind，call，apply

### 02 获取 url 参数

- 使用reduce，将参数封装到一个对象中，使用时候直接从对象获取

- **ES6 引入Map，可以使用Map替代Object**

### 03 dom 节点查找

- 首先判断一个节点是否是另一个节点父节点，如果是返回该节点，否者沿改节点向上寻找

### 04 根据包名，在指定空间中创建对象

- 深度遍历，如果没有该属性或属性不为对象类型则新增属性

### 05 数组去重

- ES6语法，利用Set和Array去重，或使用lodash提供的api

- ES5版本，根据NaN != NaN 去除NaN重复

### 06 斐波那契数列

- 不使用递归，使用数组推算

- 这里也可以使用ES6 支持的尾递归，空间复杂度降为O(1)

    ```javascript
        function fib(n, ret1, ret2) {
            if(n == 0) {
                return ret1;
            } else {
                return fib(n - 1, ret2, ret1 + ret2);
            }
        }

        // fib(n, 1, 1)
    ```

### 07 时间格式化输出

- 先将原始Date对象转换为新的Date对象，然后根据格式化字符串替换


### 08 获取字符串的长度

- 循环遍历，判断字符编码是否大于255

### 09 邮箱字符串判断

- \w [\w\.]+ @ (\w)+ (\.\w+)+
- x  xx.xx   @  xx   .com

### 10 颜色字符串转换

- string.replace(reg, fun), fun参数为 匹配到的字符串，子匹配..., 第一个匹配的下标

### 11 将字符串转换为驼峰格式

- string.replace(reg, fun), 去掉匹配字符串的 - ，然后将匹配字符串转为大写

### 12 字符串字符统计

- 使用reduce将字符个数归并到{}上 **建议使用ES6 map,更完善的hash结构**

    ```javascript
        function count(str) {
            const inputs = str.replace(/\s/g, '').split('');
            let resultMap = new Map();
            for(input of inputs) {
                let value = resultMap.get(input);
                if (resultMap.has(input)) {
                    resultMap.set(input, ++value);
                } else {
                    resultMap.set(input, 1);
                }
            }
            //return format(resultMap)
        }
    ```
