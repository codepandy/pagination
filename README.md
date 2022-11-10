# 描述

这是一个 react 的可自定义样式的分页组件，每项的默认样式、选中样式、以及上一页下一页图标都可以自定义。

## 安装 install

```bash
npm i @wenmu/pagination
```

## 效果

![效果图](https://s2.loli.net/2022/11/10/DLSjfnYp7qgTz5W.png)

## Demo

```js
function Main() {
  const [page, setPage] = useState(1);
  const onChangePage = (val) => {
    setPage(val);
  };
  return (
    <section>
      <Pagination
        current={page}
        total={90}
        itemClass=""
        itemActiveClass={""}
        pre={
          <img src={icon} className="custom-notification-page-icon" alt="" />
        }
        onChange={onChangePage}
      />
      <h3>第{page}页</h3>
    </section>
  );
}
```

## 参数

| 参数            | 类型          | 默认值   | 说明                                                         |
| --------------- | ------------- | -------- | ------------------------------------------------------------ |
| pageSize        | number        | 10       | 每页显示数量                                                 |
| current         | number        | 1        | 当前选中的值                                                 |
| showPageCount   | number        | 5        | 设置直接列举页数数量，比如 10，当页数<=10 时，会直接罗列出来 |
| total           | number        | 0        | 数据的总条数，计算页数使用                                   |
| pre             | React.Element | 默认箭头 | 上一页组件                                                   |
| next            | React.Element | 默认箭头 | 下一页组件                                                   |
| itemClass       | string        | ''       | 每项的默认样式                                               |
| itemActiveClass | string        | ''       | 选中时的样式                                                 |
| onChange        | function      | void     | 切换页数事件                                                 |
