import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import ReactApexChart from "react-apexcharts";
import ko from "apexcharts/dist/locales/ko.json";
import classes from "./StockDetailPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowNav } from "../../stores/navSlice";
import { stockDetailGet } from "../../stores/stockSlice";
import { likeStockPost } from "../../stores/userSlice";

function StockDetailPage() {
  const params = useParams();
  const id = params.id;
  const [showCandleGraph, setShowCandleGraph] = useState(false);
  const navigate = useNavigate();
  // useEffect로 데이터 받아오고 구매주식목록에 있으면 true, 없으면 false 그대로
  const [showSellButton, setShowSellButton] = useState(true);
  // useEffect로 데이터 받아오고 관심목록에 있으면 true, 없으면 false 그대로
  const [isWatchlist, setisWatchlist] = useState(true);
  const stockData = useSelector((state) => {
    return state.setStock.detail;
  });
  const shortStockData = useSelector((state) => {
    return state.setStock.shortStockData;
  });
  const userToken = useSelector((state) => {
    return state.persistedReducer.setUser.user.token;
  });
  const haveList = useSelector((state) => {
    return state.persistedReducer.setUser.user.haveList;
  });
  const likeList = useSelector((state) => {
    return state.persistedReducer.setUser.user.likeList;
  });
  function backTo() {
    navigate(-1);
  }
  const dispatch = useDispatch();

  function goToIndustry() {
    navigate(`/stock/industry/${stockData.category_id}`);
  }

  useEffect(() => {
    const now = window.location.pathname;
    dispatch(setShowNav(now));
    dispatch(stockDetailGet(id));
  }, []);

  useEffect(() => {
    if (!haveList.includes(id)) {
      setShowSellButton(false);
    } else {
      setShowSellButton(true);
    }
    if (!likeList.includes(id)) {
      setisWatchlist(false);
    } else {
      setisWatchlist(true);
    }
  }, [haveList, likeList]);

  useEffect(() => {
    const wss = new WebSocket("wss://k7b204.p.ssafy.io:443/api1/socket/ws");
    wss.onopen = () => {
      wss.send("전지수 보이삼보이삼?");
    };
    wss.onmessage = (event) => {
      console.log(`받았다 니 데이터 : ${event.data}`);
    };
  });

  function changeToCandle() {
    setShowCandleGraph(true);
  }
  function changeToLine() {
    setShowCandleGraph(false);
  }

  const [candleGraphData, setCandleGraphData] = useState({
    series: [
      {
        data: [
          {
            x: new Date(1538805600000),
            y: [6618.69, 6618.74, 6610, 6610.4],
          },
          {
            x: new Date(1538807400000),
            y: [6611, 6622.78, 6610.4, 6614.9],
          },
          {
            x: new Date(1538809200000),
            y: [6614.9, 6626.2, 6613.33, 6623.45],
          },
          {
            x: new Date(1538811000000),
            y: [6623.48, 6627, 6618.38, 6620.35],
          },
          {
            x: new Date(1538812800000),
            y: [6619.43, 6620.35, 6610.05, 6615.53],
          },
          {
            x: new Date(1538814600000),
            y: [6615.53, 6617.93, 6610, 6615.19],
          },
          {
            x: new Date(1538816400000),
            y: [6615.19, 6621.6, 6608.2, 6620],
          },
          {
            x: new Date(1538818200000),
            y: [6619.54, 6625.17, 6614.15, 6620],
          },
          {
            x: new Date(1538820000000),
            y: [6620.33, 6634.15, 6617.24, 6624.61],
          },
          {
            x: new Date(1538821800000),
            y: [6625.95, 6626, 6611.66, 6617.58],
          },
          {
            x: new Date(1538823600000),
            y: [6619, 6625.97, 6595.27, 6598.86],
          },
          {
            x: new Date(1538825400000),
            y: [6598.86, 6598.88, 6570, 6587.16],
          },
          {
            x: new Date(1538827200000),
            y: [6588.86, 6600, 6580, 6593.4],
          },
          {
            x: new Date(1538829000000),
            y: [6593.99, 6598.89, 6585, 6587.81],
          },
          {
            x: new Date(1538830800000),
            y: [6587.81, 6592.73, 6567.14, 6578],
          },
          {
            x: new Date(1538832600000),
            y: [6578.35, 6581.72, 6567.39, 6579],
          },
          {
            x: new Date(1538834400000),
            y: [6579.38, 6580.92, 6566.77, 6575.96],
          },
          {
            x: new Date(1538836200000),
            y: [6575.96, 6589, 6571.77, 6588.92],
          },
          {
            x: new Date(1538838000000),
            y: [6588.92, 6594, 6577.55, 6589.22],
          },
          {
            x: new Date(1538839800000),
            y: [6589.3, 6598.89, 6589.1, 6596.08],
          },
          {
            x: new Date(1538841600000),
            y: [6597.5, 6600, 6588.39, 6596.25],
          },
          {
            x: new Date(1538843400000),
            y: [6598.03, 6600, 6588.73, 6595.97],
          },
          {
            x: new Date(1538845200000),
            y: [6595.97, 6602.01, 6588.17, 6602],
          },
          {
            x: new Date(1538847000000),
            y: [6602, 6607, 6596.51, 6599.95],
          },
          {
            x: new Date(1538848800000),
            y: [6600.63, 6601.21, 6590.39, 6591.02],
          },
          {
            x: new Date(1538850600000),
            y: [6591.02, 6603.08, 6591, 6591],
          },
          {
            x: new Date(1538852400000),
            y: [6591, 6601.32, 6585, 6592],
          },
          {
            x: new Date(1538854200000),
            y: [6593.13, 6596.01, 6590, 6593.34],
          },
          {
            x: new Date(1538856000000),
            y: [6593.34, 6604.76, 6582.63, 6593.86],
          },
          {
            x: new Date(1538857800000),
            y: ["X", "X", "X", "X"],
          },
          {
            x: new Date(1538859600000),
            y: ["X", "X", "X", "X"],
          },
          {
            x: new Date(1538861400000),
            y: [],
          },
          {
            x: new Date(1538863200000),
            y: [],
          },
          {
            x: new Date(1538865000000),
            y: [],
          },
          {
            x: new Date(1538866800000),
            y: [],
          },
        ],
      },
    ],
    options: {
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#DD4956",
            downward: "#4D97ED",
          },
        },
      },
      chart: {
        animations: {
          enabled: false,
        },
        type: "candlestick",
        height: 350,
        locales: [ko],
        defaultLocale: "ko",
        toolbar: {
          show: true,
          tools: {
            download: false,
            selection: false,
            zoom: false,
            zoomin: true,
            zoomout: true,
            pan: false,
            reset: false,
            // 툴바 아이콘 커스텀 하는 곳...
            // customIcons: [
            //   {
            //     icon: '<img src={`${process.env.PUBLIC_URL}/dateRefresh.svg`} alt="">',
            //     index: 6,
            //     class: 'custom-icon',
            //     click: function (chart, options, e) {
            //       console.log("clicked custom-icon")
            //     }
            //   }
            // ]
          },
        },
        selection: {
          enabled: false,
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        show: false,
        tooltip: {
          enabled: false,
        },
      },
      tooltip: {
        custom: function ({ seriesIndex, dataPointIndex, w }) {
          const o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
          const h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
          const l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
          const c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
          return (
            '<div class="apexcharts-tooltip-candlestick">' +
            '<div>&nbsp시작가: <span class="value">' +
            o +
            "&nbsp</span></div>" +
            '<div>&nbsp최고가: <span class="value">' +
            h +
            "&nbsp</span></div>" +
            '<div>&nbsp최저가: <span class="value">' +
            l +
            "&nbsp</span></div>" +
            '<div>&nbsp마감가: <span class="value">' +
            c +
            "&nbsp</span></div>" +
            "</div>"
          );
        },
        // 일인지 월인지 등등에 따라 format 바꿔주기
        // 일 일때는: 'HH:mm' 주일 때는: 'dddd' 월일때에는: 'MMM dd', 년일때에는: 'MMM dd'
        x: {
          format: "HH:mm",
        },
      },
    },
  });

  const [lineGraphData, setLineGraphData] = useState({
    series: [
      {
        name: "Points",
        type: "scatter",
        data: [
          { x: new Date(2019, 4, 1), y: 93, z: "최저가" },
          { x: new Date(2019, 10, 1), y: 142, z: "최고가" },
        ],
      },
      {
        name: "Line",
        data: [
          { x: new Date("01-01-2019"), y: 200 },
          { x: "02-05-2019", y: 250 },
          { x: new Date(2019, 2, 1), y: 150 },
          { x: new Date(2019, 3, 1), y: 100 },
          { x: new Date(2019, 4, 1), y: 300 },
          { x: new Date(2019, 5, 1), y: 220 },
          { x: new Date(2019, 6, 1), y: 200 },
          { x: new Date(2019, 7, 1), y: 250 },
          { x: new Date(2019, 8, 1), y: 300 },
          { x: new Date(2019, 9, 1), y: null },
          { x: new Date(2019, 10, 1), y: null },
          { x: new Date(2019, 11, 1), y: null },
        ],
      },
    ],
    options: {
      colors: ["#DC6031", "#449431"],
      chart: {
        animations: {
          enabled: false,
        },
        height: 350,
        type: "line",
        locales: [ko],
        defaultLocale: "ko",
        toolbar: {
          show: true,
          tools: {
            download: false,
            selection: false,
            zoom: false,
            zoomin: true,
            zoomout: true,
            pan: false,
            reset: false,
            // 툴바 아이콘 커스텀 하는 곳...
            // customIcons: [
            //   {
            //     icon: '<img src={`${process.env.PUBLIC_URL}/dateRefresh.svg`} alt="">',
            //     index: 6,
            //     class: 'custom-icon',
            //     click: function (chart, options, e) {
            //       console.log("clicked custom-icon")
            //     }
            //   }
            // ]
          },
        },
        selection: {
          enabled: false,
        },
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [3, 3, 3],
        curve: "straight",
        colors: ["#DC6031", "#449431"],
      },
      legend: {
        show: false,
      },
      markers: {
        size: [5, 0],
        hover: {
          sizeOffset: 2,
        },
        colors: ["#DC6031", "#449431"],
      },
      xaxis: {
        type: "datetime",
        tooltip: {
          enabled: false,
        },
      },
      yaxis: [
        {
          show: false,
          seriesName: "Income",
          axisTicks: {
            show: true,
          },
          // axisBorder: {
          //   show: true,
          //   color: '#008FFB'
          // },
          labels: {
            style: {
              colors: "#DC6031",
            },
          },
          title: {
            text: "Income",
            style: {
              color: "#DC6031",
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        {
          show: false,
          seriesName: "Orders",
          opposite: true,
          axisTicks: {
            show: true,
          },
          // axisBorder: {
          //   show: true,
          //   color: '#00E396'
          // },
          labels: {
            style: {
              colors: "#449431",
            },
          },
          title: {
            text: "Orders",
            style: {
              color: "#449431",
            },
          },
        },
      ],
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val + " (mins)";
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val + " 흐흐";
              },
            },
          },
        ],
      },
    },
  });

  function StockDetailGraph() {
    if (showCandleGraph) {
      return (
        <ReactApexChart
          options={candleGraphData.options}
          series={candleGraphData.series}
          type="candlestick"
          height={350}
          width={310}
        />
      );
    }
    return (
      <ReactApexChart
        options={lineGraphData.options}
        series={lineGraphData.series}
        type="line"
        height={350}
        width={310}
      />
    );
  }

  const handleTimeChange = (event) => {
    console.log(event.target.value);
    // data 변경해주기
  };
  function WeatherCard(sen) {
    let border = "1px solid #C4CECE";
    // 나쁨일때
    if (sen.thisIndex === 0) {
      if (sen.thisIndex === sen.maxIndex) {
        border = "2px solid #DD4956";
      }
      return (
        <div style={{ border: border }}>
          <img src={`${process.env.PUBLIC_URL}/stock-detail/rain.svg`} alt="" />
        </div>
      );
    } else if (sen.thisIndex === 1) {
      // 보통일때
      if (sen.thisIndex === sen.maxIndex) {
        border = "2px solid #FEBF45";
      }
      return (
        <div style={{ border: border }}>
          <img
            src={`${process.env.PUBLIC_URL}/stock-detail/cloudy.svg`}
            alt=""
          />
        </div>
      );
    } else {
      if (sen.thisIndex === sen.maxIndex) {
        border = "2px solid #B1CC33";
      }
      return (
        <div style={{ border: border }}>
          <img src={`${process.env.PUBLIC_URL}/stock-detail/sun.svg`} alt="" />
        </div>
      );
    }
  }
  function WeatherCards() {
    const sentiments = stockData.sentiment;
    const max_num = Math.max(...sentiments);
    let max_index = 0;
    sentiments.forEach((element, index) => {
      if (element === max_num) {
        max_index = index;
      }
    });
    return (
      <div>
        {sentiments.map((sentiment, index) => (
          <WeatherCard
            key={index}
            sen={sentiment}
            maxIndex={max_index}
            thisIndex={index}
          />
        ))}
      </div>
    );
  }
  // 가격업데이트 될 때, 해당 데이터도 업데이트
  function BuySellButton() {
    if (showSellButton) {
      return (
        <>
          <Link to={`/stock/sell/${id}`}>
            <button>팔래요</button>
          </Link>
          <Link to={`/stock/buy/${id}`}>
            <button>살래요</button>
          </Link>
        </>
      );
    }
    return (
      <Link to="/stock/buy" state={{ data: shortStockData }}>
        <button>살래요</button>
      </Link>
    );
  }
  function WishListIcon() {
    let data = {};
    if (userToken) {
      data = { token: userToken, id: stockData.id };
    }
    const heartClick = () => {
      dispatch(likeStockPost(data));
    };
    if (isWatchlist) {
      return (
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={heartClick}
        >
          <path
            d="M20.6386 1.36753C18.1922 -0.717255 14.5539 -0.342262 12.3084 1.97466L11.4289 2.88089L10.5495 1.97466C8.30843 -0.342262 4.66564 -0.717255 2.21926 1.36753C-0.584263 3.76034 -0.731582 8.05491 1.7773 10.6486L10.4155 19.5681C10.9736 20.144 11.8798 20.144 12.4378 19.5681L21.0761 10.6486C23.5894 8.05491 23.4421 3.76034 20.6386 1.36753Z"
            fill="#FE8289"
          />
        </svg>
      );
    }
    return (
      <svg
        width="23"
        height="20"
        viewBox="0 0 23 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={heartClick}
      >
        <path
          d="M20.6386 1.36753C18.1922 -0.717255 14.5539 -0.342262 12.3084 1.97466L11.4289 2.88089L10.5495 1.97466C8.30843 -0.342262 4.66564 -0.717255 2.21926 1.36753C-0.584263 3.76034 -0.731582 8.05491 1.7773 10.6486L10.4155 19.5681C10.9736 20.144 11.8798 20.144 12.4378 19.5681L21.0761 10.6486C23.5894 8.05491 23.4421 3.76034 20.6386 1.36753Z"
          fill="#929E9E"
        />
      </svg>
    );
  }
  function AnalyzedData() {
    if (stockData.keyword === null) {
      return;
    }
    return (
      <div>
        <div>
          <div>오늘 {stockData.name} 날씨는?</div>
          <img
            src={`${process.env.PUBLIC_URL}/stock-detail/newspaper.svg`}
            alt=""
          />
        </div>
        <div>{stockData.sentiment && <WeatherCards />}</div>
        <div>
          <div>{stockData.name} 이렇게 표현되고 있어요</div>
          <img
            src={`${process.env.PUBLIC_URL}/stock-detail/keyword.svg`}
            alt=""
          />
          <div>
            {stockData.keyword &&
              stockData.keyword.map((word) => <div>{word}</div>)}
          </div>
        </div>
      </div>
    );
  }
  function CompareText() {
    if (stockData.fluctuation_rate > 0) {
      return (
        <div>
          어제보다 {stockData.fluctuation_price}원 올랐어요 (+
          {stockData.fluctuation_rate}%)
        </div>
      );
    } else {
      return (
        <div>
          어제보다 {stockData.fluctuation_price}원 떨어졌어요 (
          {stockData.fluctuation_rate}%)
        </div>
      );
    }
  }
  return (
    <div>
      <img
        onClick={backTo}
        src={`${process.env.PUBLIC_URL}/stock-detail/back.svg`}
        alt=""
      />
      <WishListIcon />
      <hr />
      <div>{id} / KOSPI</div>
      <h1>{stockData.name}</h1>
      <h1>{shortStockData.price}원</h1>
      {stockData && <CompareText />}
      <StockDetailGraph />
      <label>
        <input
          name="graphTime"
          type="radio"
          value="하루"
          onChange={handleTimeChange}
          checked
        />
        하루
      </label>
      <label>
        <input
          name="graphTime"
          type="radio"
          value="일주일"
          onChange={handleTimeChange}
        />
        일주일
      </label>
      <label>
        <input
          name="graphTime"
          type="radio"
          value="한달"
          onChange={handleTimeChange}
        />
        한달
      </label>
      <label>
        <input
          name="graphTime"
          type="radio"
          value="일년"
          onChange={handleTimeChange}
        />
        일년
      </label>
      {showCandleGraph ? (
        <div className={classes.chartChangeBtn} onClick={changeToLine}>
          <img src={`${process.env.PUBLIC_URL}/stock-detail/line.svg`} alt="" />
        </div>
      ) : (
        <div className={classes.chartChangeBtn} onClick={changeToCandle}>
          <img
            src={`${process.env.PUBLIC_URL}/stock-detail/candle.svg`}
            alt=""
          />
        </div>
      )}
      <div style={{ border: "2px solid blue" }}>
        <img src={`${process.env.PUBLIC_URL}/stock-detail/cal.svg`} alt="" />
        <div>이 주식은 오늘 ?</div>
        <img src={`${process.env.PUBLIC_URL}/Q.svg`} alt="" />
      </div>
      <div>
        {stockData && (
          <div style={{ border: "2px solid red" }}>
            <div>
              아무리 올라도 <span>{stockData.maximum}원</span>
            </div>
            <div>
              아무리 떨어져도 <span>{stockData.maximum}원</span>
            </div>
          </div>
        )}
      </div>
      <div onClick={goToIndustry}>
        <div>{stockData.category_name} 업종 키워드 보러가기</div>
        <img src={`${process.env.PUBLIC_URL}/stock-list/goTo.svg`} alt="" />
      </div>
      <AnalyzedData />
      <BuySellButton />
    </div>
  );
}

export default StockDetailPage;
