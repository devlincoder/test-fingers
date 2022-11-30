import {
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.scss";

const Sidebar = () => {
  const list = [
    { path: "/", name: "Trang chủ", icon: faHouse },
  ];
  return (
    <div className={clsx(style.wrapper)}>
      {list.map((x, index) => {
        return (
          <Link
            data={x.name}
            to={x.path}
            key={index}
            className={
              window.location.pathname === x.path
                ? clsx(style.link, style.active)
                : clsx(style.link)
            }
          >
            <FontAwesomeIcon icon={x.icon} className={clsx(style.icon)} />
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
