import React from "react";
import "./index.less";
import classNames from "classnames";
import preIcon from "./assets/pre.svg";
import nextIcon from "./assets/next.svg";

const Item = ({
  val,
  Icon,
  isChecked,
  itemClass,
  itemActiveClass,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "wenmu-notification-pagination-item",
        {
          "wenmu-notification-pagination-item-active": isChecked,
        },
        itemClass,
        isChecked ? itemActiveClass : ""
      )}
    >
      {val === "pre" ? Icon : val === "next" ? Icon : val}
    </div>
  );
};

const Ellips = ({ className }) => {
  return (
    <span
      className={classNames("wenmu-notification-pagination-item", className)}
    >
      ···
    </span>
  );
};

const Pagination = ({
  pageSize = 10,
  current = 1,
  showPageCount = 5,
  total = 0,
  pre = <img src={preIcon} className="notification-pagination-icon" alt="" />,
  next = <img src={nextIcon} className="notification-pagination-icon" alt="" />,
  itemClass,
  itemActiveClass,
  onChange,
}) => {
  const pages = Math.ceil(total / pageSize);
  const list = new Array(pages).fill(" ").map((item, index) => index + 1);

  const onClickItem = (val) => {
    if (val === "pre") {
      if (current === 1) {
        return;
      }
      onChange(current - 1);
    } else if (val === "next") {
      if (current === pages) {
        return;
      }
      onChange(current + 1);
    } else {
      onChange(val);
    }
  };
  return total > 0 ? (
    <div className="wenmu-notification-pagination-row">
      <Item
        itemClass={itemClass}
        itemActiveClass={itemActiveClass}
        val="pre"
        Icon={pre}
        onClick={onClickItem.bind(this, "pre")}
      />
      {pages <= showPageCount ? (
        list.map((item) => (
          <Item
            itemClass={itemClass}
            itemActiveClass={itemActiveClass}
            key={item}
            val={item}
            isChecked={current === item}
            onClick={onClickItem.bind(this, item)}
          />
        ))
      ) : (
        <>
          <Item
            itemClass={itemClass}
            itemActiveClass={itemActiveClass}
            val={1}
            isChecked={current === 1}
            onClick={onClickItem.bind(this, 1)}
          />
          {current <= 3 ? (
            <>
              <Item
                itemClass={itemClass}
                itemActiveClass={itemActiveClass}
                val={2}
                isChecked={current === 2}
                onClick={onClickItem.bind(this, 2)}
              />
              <Item
                itemClass={itemClass}
                itemActiveClass={itemActiveClass}
                val={3}
                isChecked={current === 3}
                onClick={onClickItem.bind(this, 3)}
              />
              <Item
                itemClass={itemClass}
                itemActiveClass={itemActiveClass}
                val={4}
                isChecked={current === 4}
                onClick={onClickItem.bind(this, 4)}
              />
              <Item
                itemClass={itemClass}
                itemActiveClass={itemActiveClass}
                val={5}
                isChecked={current === 5}
                onClick={onClickItem.bind(this, 5)}
              />
              {pages > 6 ? <Ellips className={itemClass} /> : null}
            </>
          ) : null}

          {current > 3 && current + 2 < pages ? (
            <>
              {current - 2 > 2 ? <Ellips className={itemClass} /> : null}
              <Item
                itemClass={itemClass}
                itemActiveClass={itemActiveClass}
                val={current - 2}
                onClick={onClickItem.bind(this, current - 2)}
              />
              <Item
                itemClass={itemClass}
                itemActiveClass={itemActiveClass}
                val={current - 1}
                onClick={onClickItem.bind(this, current - 1)}
              />
              <Item
                itemClass={itemClass}
                itemActiveClass={itemActiveClass}
                val={current}
                isChecked
                onClick={onClickItem.bind(this, current)}
              />
              <Item
                itemClass={itemClass}
                itemActiveClass={itemActiveClass}
                val={current + 1}
                onClick={onClickItem.bind(this, current + 1)}
              />
              <Item
                itemClass={itemClass}
                itemActiveClass={itemActiveClass}
                val={current + 2}
                onClick={onClickItem.bind(this, current + 2)}
              />
              {current + 3 < pages ? <Ellips className={itemClass} /> : null}
            </>
          ) : null}

          {current + 2 >= pages ? (
            <>
              {pages - 4 > 2 ? <Ellips className={itemClass} /> : null}
              <Item
                itemClass={itemClass}
                itemActiveClass={itemActiveClass}
                val={pages - 4}
                isChecked={current === pages - 4}
                onClick={onClickItem.bind(this, pages - 4)}
              />
              <Item
                itemClass={itemClass}
                itemActiveClass={itemActiveClass}
                val={pages - 3}
                isChecked={current === pages - 3}
                onClick={onClickItem.bind(this, pages - 3)}
              />
              <Item
                itemClass={itemClass}
                itemActiveClass={itemActiveClass}
                val={pages - 2}
                isChecked={current === pages - 2}
                onClick={onClickItem.bind(this, pages - 2)}
              />
              <Item
                itemClass={itemClass}
                itemActiveClass={itemActiveClass}
                val={pages - 1}
                isChecked={current === pages - 1}
                onClick={onClickItem.bind(this, pages - 1)}
              />
            </>
          ) : null}
          <Item
            itemClass={itemClass}
            itemActiveClass={itemActiveClass}
            val={pages}
            isChecked={current === pages}
            onClick={onClickItem.bind(this, pages)}
          />
        </>
      )}
      <Item
        itemClass={itemClass}
        itemActiveClass={itemActiveClass}
        val="next"
        Icon={next}
        onClick={onClickItem.bind(this, "next")}
      />
    </div>
  ) : null;
};

export default Pagination;
