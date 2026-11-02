# 申家硕 · 课堂实践 9：旅游新闻选项卡

- **姓名**：申家硕
- **学号**：24001011009
- **课程**：高级网页设计
- **项目仓库**：<https://github.com/sjs729/shenjiashuo-class-test-9>
- **在线预览**：<https://sjs729.github.io/shenjiashuo-class-test-9/>

## 题目说明

严格按课堂测试截图还原一个新闻选项卡模块：三个栏目切换，每个栏目展示 9 条新闻，选中项使用红色边框、新闻前有蓝色方块项目符号。页面只保留新闻模块，不添加其他页面元素。

三个栏目：

1. 最新投诉（默认显示）
2. 官方回应
3. 追踪调查

## 作业要求对照

| 要求 | 实现情况 |
| --- | --- |
| CSS 类名、id、JS 变量以姓名首字母 `sjs_` 开头 | 页面、样式、脚本中的命名均使用 `sjs_` 前缀 |
| GitHub 仓库包含姓名全拼 | 仓库名为 `shenjiashuo-class-test-9` |
| JavaScript 使用外部引用 | 页面通过 `<script src="js/news-tab.js"></script>` 引入脚本 |
| 访问网址可以看到个人信息和源码 | 个人信息保留在页面标题、HTML 注释和 README 中，源码通过 GitHub 仓库查看 |

## 实现要点

- 页面结构、样式与脚本分离，样式写在 `index.html` 内的 `style` 中，切换逻辑位于 `js/news-tab.js`。
- 切换时先清除全部选项卡的选中状态，再设置当前项的选中状态与对应面板。
- 使用 `role="tablist"`、`aria-selected`、`aria-controls` 等属性标注选项卡状态。
- 响应式布局，适配手机和桌面浏览器。

## 文件结构

```text
.
├── index.html          # 页面结构、样式与个人信息
├── js/
│   └── news-tab.js     # 选项卡切换逻辑（外部引用）
├── .gitignore
└── README.md
```

## 本地预览

在本目录执行：

```bash
python3 -m http.server 8000
```

然后访问 <http://localhost:8000/>。
