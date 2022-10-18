import { useEffect, useRef, useState } from "react";
import styles from "../styles/test.module.css";

//도움된 블로그 https://ji-musclecode.tistory.com/m/69

const MOCK_DATA = {
  data: [
    ["XAUn", "1,644.3298", "Gold", "USD"],
    ["BTCn", "104.3", "Bitcoin", "USD"],
    ["ETHn", "2.35", "Ethereum", "USD"],
    ["BNBn", "4.7895", "BNB", "USD"],
    ["XRPn", "1.3298", "Ripple", "USD"],
    ["ADAn", "1,785.4", "Cardano", "USD"],
    ["SOLn", "500.98", "Solana", "USD"],
    ["DOGEn", "0.96", "Dogecoin", "USD"],
    ["DOTn", "1.79", "Polkadot", "USD"],
    ["AVAXn", "0.84", "Avalanche", "USD"],
    ["TRXn", "0.39", "TRON", "USD"],
    ["WTIn", "97.42", "Oil", "USD"],
    ["XAGn", "160.428", "Silver", "USD"],
    ["MATICn", "0.67", "Polygon", "USD"],
    ["LTCn", "0.59", "Litecoin", "USD"],
    ["NEARn", "1.58", "NEAR Protocol", "USD"],
    ["FTTn", "0.73", "FTX Token", "USD"],
    ["UNIn", "0.98", "Uniswap", "USD"],
    ["LINKn", "3.35", "Chainlink", "USD"],
    ["XLMn", "1.23", "Stellar", "USD"],
    ["ATOMn", "1.52", "Cosmos", "USD"],
    ["ALGOn", "1.39", "Algorand", "USD"],
  ],
};

const VirtualScroll = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [totalData, setTotalData] = useState([]); // 전체 데이터
  const [dataRenderArr, setDataRenderArr] = useState([]); // 실제로 렌더링 할 데이터

  const [totalHeight, setTotalHeight] = useState(0); // 전체 데이터의 높이
  const [scrollTop, setScrollTop] = useState(0); // 현재 스크롤의 top 위치

  const curHeight = ref.current ? ref.current.clientHeight : 0; // 현재 Viewport 의 높이 (Viewport의 높이를 %로 주었기 때문에 따로 계산)
  const itemHeight = 100; // 렌더링되는 영역의 높이 (Item 태그의 경우 height 80px, margin 10px 로 총 80+10+10 = 100px 임)
  const nodePadding = Math.floor(curHeight / itemHeight) + 1; // 현재 화면에 보이는 아이템의 수

  const strIdx = Math.max(0, Math.floor(scrollTop / itemHeight) - nodePadding);
  const endIdx = strIdx + 2 * nodePadding + 1;

  const offsetY = strIdx * itemHeight; // 갱신할 Y축 위치

  useEffect(() => {
    setTotalData(MOCK_DATA.data);
    setTotalHeight(MOCK_DATA.data.length * itemHeight);
    ref.current?.addEventListener("scroll", handleScrollHeight);
  }, []);

  useEffect(() => {
    setDataRenderArr(totalData.slice(strIdx, endIdx));
    console.log(strIdx, endIdx); // 콘솔로 인덱스 값을 체크하기위해
  }, [totalData, strIdx]);

  const handleScrollHeight = () => {
    if (ref.current) {
      setScrollTop(ref.current.scrollTop); // 현재 스크롤 위치를 갱신
    }
  };

  return (
    <>
      <div className={styles.testDiv} ref={ref}>
        {MOCK_DATA.data.map((coin) => (
          <div key={coin[0]} className={styles.coinList}>
            <div className={styles.coinInfo}>
              <div className={styles.coin}></div>
              <div>
                <h2 className={styles.coinTitle}>{coin[0]}</h2>
                <p className={styles.coinName}>{coin[2]}</p>
              </div>
            </div>
            <div className={styles.point}>{coin[1]}%</div>
            <div className={styles.text}>{coin[3]}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VirtualScroll;
