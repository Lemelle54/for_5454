import { useEffect } from "react";


function StreetAdress(props: string) {
    const { imagemap } = props
      // 문자열을 배열로 일단 만든다
      const result = imagemap.split(" />");

  //문자열로 만든 배열을 좌표 배열로 다듬기
  const coordinate = result.map(item => 
    item.slice(49, -14)
  );

  // 좌표 배열로 다듬은 배열을 다시 map으로 쓸 수 있게 다듬기
  

  return (
<>
{
  coordinate.map((item: string, i: number) => (
    <area key={i} target="" alt="" title="" href="" coords={item} shape="poly" />
))
}
</>
  )
}

export default StreetAdress