import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Pagination from "../index";
import styles from "./index.less";
import icon from "./icon.svg";

function Icon() {
  return <img src={icon} alt="" className={styles.icon} />;
}
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
        pre={<img src={icon} className="notification-page-icon" alt="" />}
        onChange={onChangePage}
      />
      <h3>第{page}页</h3>
    </section>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Main />);
