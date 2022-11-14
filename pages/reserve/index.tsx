import React, { useEffect, useState } from "react";
import ImageMap from "image-map";
import Image from "next/image";
import classes from "./index.module.css";
import StreetAdress from "../../lib/streetCoordinate/coordinate";
import Header from "../../layout/header/header";

const DUMMY = `    <area target="" alt="" title="" href="" coords="247,157,323,225,321,154,252,223" shape="poly" />
<area target="" alt="" title="" href="" coords="58,197,116,142,188,214,125,272" shape="poly" />
<area target="" alt="" title="" href="" coords="205,275,254,273,254,323,202,323" shape="poly" />
<area target="" alt="" title="" href="" coords="204,370,273,371,273,440,202,441" shape="poly" />
<area target="" alt="" title="" href="" coords="49,489,137,438,176,509,87,560" shape="poly" />
<area target="" alt="" title="" href="" coords="317,425,367,377,416,424,367,474" shape="poly" />
<area target="" alt="" title="" href="" coords="323,271,322,340,392,341,393,270" shape="poly" />
<area target="" alt="" title="" href="" coords="394,199,395,245,445,248,446,199" shape="poly" />
<area target="" alt="" title="" href="" coords="517,182,516,230,567,230,568,181" shape="poly" />
<area target="" alt="" title="" href="" coords="571,126,570,175,621,177,622,126" shape="poly" />
<area target="" alt="" title="" href="" coords="433,282,486,282,485,331,434,333" shape="poly" />
<area target="" alt="" title="" href="" coords="534,274,532,323,584,324,584,273" shape="poly" />
<area target="" alt="" title="" href="" coords="572,335,572,386,624,384,624,334" shape="poly" />
<area target="" alt="" title="" href="" coords="593,291,642,242,692,288,643,340" shape="poly" />
<area target="" alt="" title="" href="" coords="720,202,794,131,853,189,780,262" shape="poly" />
<area target="" alt="" title="" href="" coords="736,329,786,333,788,380,735,379" shape="poly" />
<area target="" alt="" title="" href="" coords="679,365,679,412,731,412,728,364" shape="poly" />
<area target="" alt="" title="" href="" coords="589,416,589,468,640,468,640,416" shape="poly" />
<area target="" alt="" title="" href="" coords="528,458,513,505,561,522,577,473" shape="poly" />
<area target="" alt="" title="" href="" coords="591,482,566,527,611,552,636,507" shape="poly" />
<area target="" alt="" title="" href="" coords="648,519,615,556,653,591,689,551" shape="poly" />
<area target="" alt="" title="" href="" coords="698,538,749,538,749,588,698,588" shape="poly" />
<area target="" alt="" title="" href="" coords="680,473,679,523,731,523,732,472" shape="poly" />
<area target="" alt="" title="" href="" coords="767,393,820,394,821,445,768,447" shape="poly" />
<area target="" alt="" title="" href="" coords="794,463,793,513,847,515,846,461" shape="poly" />
<area target="" alt="" title="" href="" coords="807,538,806,586,857,588,857,537" shape="poly" />
<area target="" alt="" title="" href="" coords="849,395,848,445,902,446,899,396" shape="poly" />
<area target="" alt="" title="" href="" coords="873,465,871,516,925,516,925,463" shape="poly" />
<area target="" alt="" title="" href="" coords="863,542,863,615,934,613,935,543" shape="poly" />
<area target="" alt="" title="" href="" coords="721,651,785,614,819,676,758,713" shape="poly" />`;

export default function reservePage() {
  const [name, setName] = useState<string>("mist");
  const [extend, setExtend] = useState<string>("");
  useEffect(() => {
    ImageMap("img[usemap]");
  }, []);

  function onChangeHandler(e: React.ChangeEvent<HTMLElement>) {
    setName(e.target.value);
  }

  // 확장 비확장
  function onChangeExtendHandler(e: React.ChangeEvent<HTMLElement>) {
    setExtend(e.target.value);
  }

  return (
    <div className="container mx-auto">
      <h2>reserve page</h2>
      <div>
        <select name="" id="" onChange={onChangeHandler}>
          <option value="mist" selected>
            안갯빛
          </option>
          <option value="lavender">라벤더</option>
          <option value="gablet">하늘잔</option>
          <option value="shirogane">시로가네</option>
          <option value="empyreum">엔피레움</option>
        </select>

        <select name="" id="" onChange={onChangeExtendHandler}>
          <option value="">비 확장구</option>
          <option value="_sub">확장구</option>
        </select>
      </div>

      {name && (
        <Image
          src={`/images/streetMap/${name}${extend}.jpg`}
          usemap="#image-map"
          width={1000}
          height={850}
        />
      )}

      <map name="image-map" className={classes.imagemap}>
        <StreetAdress imagemap={DUMMY} />
      </map>
    </div>
  );
}
