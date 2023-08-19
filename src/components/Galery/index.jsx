import { Link } from "react-router-dom";
import style from "../index.module.css";

export default function Galery() {
  return (
    <>
      <div className={style.galery}>
        <Link to="/modalidades/1" className={style.image1}>
          {" "}
          <img
            src="/image1.png"
            alt=""
            data-aos-duration="1000"
            data-aos="fade-down-right"
          />
        </Link>
        <Link to="/modalidades/2" className={style.image2}>
          {" "}
          <img
            src="/image2.png"
            alt=""
            data-aos-duration="1000"
            data-aos="fade-down-left"
          />
        </Link>
        <Link to="/modalidades/3" className={style.image3}>
          {" "}
          <img
            src="/image3.png"
            alt=""
            data-aos-duration="1000"
            data-aos="fade-right"
          />
        </Link>
        <Link to="/modalidades/4" className={style.image4}>
          {" "}
          <img
            src="/image4.png"
            alt=""
            data-aos-duration="1000"
            data-aos="fade-left"
          />
        </Link>
        <Link to="/modalidades/5" className={style.image5}>
          {" "}
          <img
            src="/image5.png"
            alt=""
            data-aos-duration="1000"
            data-aos="fade-right"
          />
        </Link>
        <Link to="/modalidades/6" className={style.image6}>
          {" "}
          <img
            src="/image6.png"
            alt=""
            data-aos-duration="1000"
            data-aos="fade-left"
          />
        </Link>
        <Link to="/modalidades/7" className={style.image7}>
          {" "}
          <img
            src="/image7.png"
            alt=""
            data-aos-duration="1000"
            data-aos="fade-up"
          />
        </Link>
      </div>
    </>
  );
}
