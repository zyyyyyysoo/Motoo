import { useNavigate } from "react-router-dom";
import classes from "./StockListPage.module.css";
import { useState, useEffect } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setShowNav } from "../../stores/navSlice";
import { fontSize } from "@mui/system";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 324,
  height: 225,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <p>{children}</p>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function StockListPage() {
  const [value, setValue] = useState(0);
  const [orderMany, setOrderMany] = useState(8);
  const [myListEdit, setMyListEdit] = useState(false);
  const [openDeleteModal, setDeleteModalOpen] = useState(false);
  const [realtimeValue, setRealtimeValue] = useState(0);
  const handleDeleteModalOpen = () => {
    setDeleteModalOpen(true);
  };

  const userToken = useSelector((state) => {
    return state.persistedReducer.setUser.user.token;
  });

  const userQuiz = useSelector((state) => {
    return state.persistedReducer.setUser.user.quizDay;
  });
  
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    let date = new Date();
    const now = `${date.getFullYear()}-${("00" + (date.getMonth() + 1))
      .toString()
      .slice(-2)}-${("00" + date.getDate()).toString().slice(-2)}`;
    if (now === userQuiz) {
      setIsSolved(true)
    }
  }, [userQuiz])

  const handleDeleteModalClose = () => setDeleteModalOpen(false);

  const goToDetail = (e) => {
    const isPk = e.target.id;
    if (Boolean(isPk)) {
      navigate(`/stock/detail/${isPk}`);
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const now = window.location.pathname;
    dispatch(setShowNav(now));
  });

  // 삭제버튼 누르면 해당함수 실행,
  // BE에 삭제요청 보내고, 해당페이지재구성하고,
  // 유저정보 관심주식리스트 업데이트 되어야함
  function deleteSubmit() {
    // eventTarget으로 어떤 아이디 클릭된건지 인식해야함
    // const data = { token: userToken, id: id };
  }
  const [myListData, setMyListData] = useState([
    {
      name: "LG에너지솔루션",
      code: 192839,
      profit: 3.2,
      price: 293778,
    },
    {
      name: "SK하이닉스",
      code: 111839,
      profit: -2.9,
      price: 128270,
    },
    {
      name: "삼성바이오로직스",
      code: 100000,
      profit: 4.3,
      price: 2278,
    },
    {
      name: "POSCO홀딩스",
      code: 117239,
      profit: -1.3,
      price: 707800,
    },
    {
      name: "하이브",
      code: 200001,
      profit: -1.3,
      price: 200000,
    },
  ]);
  const [realtimeData, SetRealtimeData] = useState([
    {
      soaring: [
        {
          name: "급상승",
          code: 192839,
          profit: 3.2,
          price: 293778,
        },
        {
          name: "SK하이닉스",
          code: 111839,
          profit: -2.9,
          price: 128270,
        },
        {
          name: "삼성바이오로직스",
          code: 100000,
          profit: 4.3,
          price: 2278,
        },
        {
          name: "POSCO홀딩스",
          code: 117239,
          profit: -1.3,
          price: 707800,
        },
        {
          name: "하이브",
          code: 200001,
          profit: -1.3,
          price: 200000,
        },
        {
          name: "LG에너지솔루션2",
          code: 192833,
          profit: 3.2,
          price: 293778,
        },
        {
          name: "SK하이닉스2",
          code: 111819,
          profit: -2.9,
          price: 128270,
        },
        {
          name: "삼성바이오로직스2",
          code: 10000,
          profit: 4.3,
          price: 2278,
        },
        {
          name: "POSCO홀딩스2",
          code: 11239,
          profit: -1.3,
          price: 707800,
        },
        {
          name: "하이브2",
          code: 200081,
          profit: -1.3,
          price: 200000,
        },
      ],
    },
    {
      drop: [
        {
          name: "급하락",
          code: 192839,
          profit: 3.2,
          price: 293778,
        },
        {
          name: "SK하이닉스",
          code: 111839,
          profit: -2.9,
          price: 128270,
        },
        {
          name: "삼성바이오로직스",
          code: 100000,
          profit: 4.3,
          price: 2278,
        },
        {
          name: "POSCO홀딩스",
          code: 117209,
          profit: -1.3,
          price: 707800,
        },
        {
          name: "하이브",
          code: 200008,
          profit: -1.3,
          price: 200000,
        },
        {
          name: "LG에너지솔루션2",
          code: 192833,
          profit: 3.2,
          price: 293778,
        },
        {
          name: "SK하이닉스2",
          code: 111819,
          profit: -2.9,
          price: 128270,
        },
        {
          name: "삼성바이오로직스2",
          code: 10000,
          profit: 4.3,
          price: 2278,
        },
        {
          name: "POSCO홀딩스2",
          code: 117239,
          profit: -1.3,
          price: 707800,
        },
        {
          name: "하이브2",
          code: 200001,
          profit: -1.3,
          price: 200000,
        },
      ],
    },
    {
      price: [
        {
          name: "가격순",
          code: 192839,
          profit: 3.2,
          price: 293778,
        },
        {
          name: "SK하이닉스",
          code: 111839,
          profit: -2.9,
          price: 128270,
        },
        {
          name: "삼성바이오로직스",
          code: 100000,
          profit: 4.3,
          price: 2278,
        },
        {
          name: "POSCO홀딩스",
          code: 11729,
          profit: -1.3,
          price: 707800,
        },
        {
          name: "하이브",
          code: 20001,
          profit: -1.3,
          price: 200000,
        },
        {
          name: "LG에너지솔루션2",
          code: 192833,
          profit: 3.2,
          price: 293778,
        },
        {
          name: "SK하이닉스2",
          code: 111819,
          profit: -2.9,
          price: 128270,
        },
        {
          name: "삼성바이오로직스2",
          code: 10000,
          profit: 4.3,
          price: 2278,
        },
        {
          name: "POSCO홀딩스2",
          code: 117239,
          profit: -1.3,
          price: 707800,
        },
        {
          name: "하이브2",
          code: 200001,
          profit: -1.3,
          price: 250000,
        },
      ],
    },
    {
      marketCap: [
        {
          name: "시가총액",
          code: 192839,
          profit: 3.2,
          price: 293778,
        },
        {
          name: "SK하이닉스",
          code: 111839,
          profit: -2.9,
          price: 128270,
        },
        {
          name: "삼성바이오로직스",
          code: 100000,
          profit: 4.3,
          price: 2278,
        },
        {
          name: "POSCO홀딩스",
          code: 11239,
          profit: -1.3,
          price: 707800,
        },
        {
          name: "하이브",
          code: 20001,
          profit: -1.3,
          price: 200000,
        },
        {
          name: "LG에너지솔루션2",
          code: 192833,
          profit: 3.2,
          price: 293778,
        },
        {
          name: "SK하이닉스2",
          code: 111819,
          profit: -2.9,
          price: 128270,
        },
        {
          name: "삼성바이오로직스2",
          code: 10000,
          profit: 4.3,
          price: 2278,
        },
        {
          name: "POSCO홀딩스2",
          code: 117239,
          profit: -1.3,
          price: 707800,
        },
        {
          name: "하이브2",
          code: 200001,
          profit: -1.3,
          price: 200005,
        },
      ],
    },
    {
      tradingVolume: [
        {
          name: "거래량",
          code: 192839,
          profit: 3.2,
          price: 293778,
        },
        {
          name: "SK하이닉스",
          code: 111839,
          profit: -2.9,
          price: 128270,
        },
        {
          name: "삼성바이오로직스",
          code: 100000,
          profit: 4.3,
          price: 2278,
        },
        {
          name: "POSCO홀딩스",
          code: 11739,
          profit: -1.3,
          price: 707800,
        },
        {
          name: "하이브",
          code: 20005,
          profit: -1.3,
          price: 200000,
        },
        {
          name: "LG에너지솔루션2",
          code: 192833,
          profit: 3.2,
          price: 293778,
        },
        {
          name: "SK하이닉스2",
          code: 111819,
          profit: -2.9,
          price: 128270,
        },
        {
          name: "삼성바이오로직스2",
          code: 10000,
          profit: 4.3,
          price: 2278,
        },
        {
          name: "POSCO홀딩스2",
          code: 117239,
          profit: -1.3,
          price: 707800,
        },
        {
          name: "하이브2",
          code: 200001,
          profit: -1.3,
          price: 200000,
        },
      ],
    },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 1) {
      setMyListEdit(false);
    } else {
      setRealtimeValue(0);
    }
  };

  const realtimeListHandleChange = (event, newValue) => {
    setRealtimeValue(newValue);
  };
  const navigate = useNavigate();
  function GoToSearch() {
    navigate(`/stock/search`);
  }
  function GoToOrderListPage() {
    navigate(`/stock/limit-order`);
  }
  function GoToQuizPage() {
    navigate(`/quiz`);
  }
  const editStart = () => {
    setMyListEdit(true);
  };
  const editFinish = () => {
    setMyListEdit(false);
  };

  function RealtimeCard(stock) {
    function profitCheck() {
      if (stock.profit < 0) {
        return "#4D97ED";
      } else {
        return "#DD4956";
      }
    }
    const profitColor = profitCheck();
    return (
      <div>
        <div className={classes.lists}>
          <div className={classes.listcard}>
            <div className={classes.rank}>{stock.ranking}</div>
            <div id={stock.code} onClick={goToDetail}>
              {stock.name}
            </div>
          </div>
          <div className={classes.nowpr}>
            <div style={{ color: profitColor, fontSize: 16 }}>
              {stock.profit}%
            </div>
            <div>{stock.price}원</div>
          </div>
        </div>
        <div className={classes.hrline}></div>
      </div>
    );
  }

  function RealtimeLists() {
    const selectedString = [
      "soaring",
      "drop",
      "price",
      "marketCap",
      "tradingVolume",
    ];
    const selectedRealtimeData =
      realtimeData[realtimeValue][selectedString[realtimeValue]];
    return (
      <div
        className={classes.listbox}
        style={{ backgroundColor: "white", paddingTop: 20 }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
            <div className={classes.tabbox}>
              <Tabs
                value={realtimeValue}
                onChange={realtimeListHandleChange}
                aria-label="basic tabs example"
                sx={{
                  "& .MuiTabs-indicator": { bgcolor: "#FEBF45", height: 3 },
                }}
              >
                <Tab
                  label={
                    <Typography
                      fontSize="4vw"
                      fontWeight="600"
                      color={realtimeValue === 0 ? "#000" : "#929E9E"}
                      fontFamily="Pretendard"
                    >
                      급상승
                    </Typography>
                  }
                  sx={{
                    "&.Mui-selected": {
                      color: "rgba(0, 0, 0, 0)",
                    },
                    // paddingX: '3%',
                    minWidth: "10%",
                  }}
                />
                <Tab
                  label={
                    <Typography
                      fontSize="4vw"
                      fontWeight="600"
                      color={realtimeValue === 1 ? "#000" : "#929E9E"}
                      fontFamily="Pretendard"
                    >
                      급하락
                    </Typography>
                  }
                  sx={{
                    "&.Mui-selected": {
                      color: "rgba(0, 0, 0, 0)",
                    },
                    // paddingX: '3%',
                    minWidth: "10%",
                  }}
                />
                <Tab
                  label={
                    <Typography
                      fontSize="4vw"
                      fontWeight="600"
                      color={realtimeValue === 2 ? "#000" : "#929E9E"}
                      fontFamily="Pretendard"
                    >
                      가격순
                    </Typography>
                  }
                  sx={{
                    "&.Mui-selected": {
                      color: "rgba(0, 0, 0, 0)",
                    },
                    // paddingX: '3%',
                    minWidth: "10%",
                  }}
                />
                <Tab
                  label={
                    <Typography
                      fontSize="4vw"
                      fontWeight="600"
                      color={realtimeValue === 3 ? "#000" : "#929E9E"}
                      fontFamily="Pretendard"
                    >
                      시가총액
                    </Typography>
                  }
                  sx={{
                    "&.Mui-selected": {
                      color: "rgba(0, 0, 0, 0)",
                    },
                    // paddingX: '3%',
                    minWidth: "10%",
                  }}
                />
                <Tab
                  label={
                    <Typography
                      fontSize="4vw"
                      fontWeight="600"
                      color={realtimeValue === 4 ? "#000" : "#929E9E"}
                      fontFamily="Pretendard"
                    >
                      거래량
                    </Typography>
                  }
                  sx={{
                    "&.Mui-selected": {
                      color: "rgba(0, 0, 0, 0)",
                    },
                    // paddingX: '3%',
                    minWidth: "10%",
                  }}
                />
              </Tabs>
            </div>
          </Box>
        </Box>
        {selectedRealtimeData.map((stock, index) => (
          <RealtimeCard
            key={stock.code}
            name={stock.name}
            code={stock.code}
            ranking={index + 1}
            profit={stock.profit}
            price={stock.price}
          />
        ))}
      </div>
    );
  }

  function MyWishCard(stock) {
    if (!myListEdit) {
      // 수정중 아닐때
      function profitCheck() {
        if (stock.profit < 0) {
          return "#4D97ED";
        } else {
          return "#DD4956";
        }
      }
      const profitColor = profitCheck();
      return (
        <div>
          <div className={classes.lists}>
            <div id={stock.code} onClick={goToDetail}>
              {stock.name}
            </div>
            <div className={classes.nowpr}>
              <div style={{ color: profitColor, fontSize: 16 }}>
                {stock.profit}%
              </div>
              <div>{stock.price}원</div>
            </div>
          </div>
          <div className={classes.hrline}></div>
        </div>
      );
    } else {
      //수정중일때
      return (
        <div>
          <div className={classes.eleslists}>
            <div>{stock.name}</div>
            <img
              onClick={handleDeleteModalOpen}
              src={`${process.env.PUBLIC_URL}/stock-list/wishListDelete.svg`}
              alt=""
            />
          </div>
          <div className={classes.hrline}></div>
        </div>
      );
    }
  }

  function LimitOrder() {
    return (
      <div onClick={GoToOrderListPage} className={classes.limitOrderCard}>
        <img
          src={`${process.env.PUBLIC_URL}/stock-list/waitingListIcon.svg`}
          alt=""
        />
        <div>대기중인 주식 목록</div>
        <div>{orderMany}건</div>
        <img src={`${process.env.PUBLIC_URL}/stock-list/goTo.svg`} alt="" />
      </div>
    );
  }
  function QuizAndLimitOrder() {
    return (
      <div>
        <div onClick={GoToOrderListPage} className={classes.limitOrderCard}>
          <div className={classes.nametag}>
            <img
              className={classes.imgs}
              src={`${process.env.PUBLIC_URL}/stock-list/waitingListIcon.svg`}
              alt=""
            />
            <div>대기중인 주식 목록</div>
          </div>
          <div className={classes.nametag}>
            <div>{orderMany}건</div>
            <img
              className={classes.arrow}
              src={`${process.env.PUBLIC_URL}/stock-list/goTo.svg`}
              alt=""
            />
          </div>
        </div>
        <div onClick={GoToQuizPage} className={classes.limitOrderCard}>
          <div className={classes.nametag}>
            <img
              className={classes.imgs}
              src={`${process.env.PUBLIC_URL}/wallet/coin.svg`}
              alt=""
            />
            <div>오늘의퀴즈</div>
          </div>
          <div className={classes.nametag}>
            <div>200,000원</div>
            <img
              className={classes.arrow}
              src={`${process.env.PUBLIC_URL}/stock-list/goTo.svg`}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }

  function MyStockList() {
    return (
      <div className={classes.listbox}>
        <div className={classes.editbox}>
          <div className={classes.favorite}>
            <div>관심주식</div>
            <img
              className={classes.star}
              src={`${process.env.PUBLIC_URL}/stock-list/myStar.svg`}
              alt=""
            />
          </div>
          {myListEdit ? (
            <div onClick={editFinish}>완료</div>
          ) : (
            <div onClick={editStart}>편집</div>
          )}
        </div>
        {myListData.map((stock) => (
          <MyWishCard
            key={stock.code}
            name={stock.name}
            code={stock.code}
            profit={stock.profit}
            price={stock.price}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <div style={{ backgroundColor: "#EAF0EF" }}>
        <div className={classes.header}>
          <img
            className={classes.logo}
            src={`${process.env.PUBLIC_URL}/stock-list/motoologo.png`}
            alt=""
          />
          <img
            onClick={GoToSearch}
            src={`${process.env.PUBLIC_URL}/stock-list/stockListSearchIcon.svg`}
            alt=""
          />
        </div>
        <div className={classes.bodybox}>
          {isSolved ? <LimitOrder /> : <QuizAndLimitOrder />}
        </div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
            <Tabs
              className={classes.tabs}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{ "& .MuiTabs-indicator": { bgcolor: "#EAF0EF" } }}
            >
              <Tab
                label={
                  <Typography
                    fontSize="3vh"
                    fontWeight="600"
                    color={value === 0 ? "#43B8B1" : "#929E9E"}
                    fontFamily="Pretendard"
                  >
                    내 리스트
                  </Typography>
                }
                {...a11yProps(0)}
                sx={{
                  "&.Mui-selected": {
                    color: "rgba(0, 0, 0, 0)",
                  },
                }}
              />
              <Tab
                label={
                  <Typography
                    fontSize="3vh"
                    fontWeight="600"
                    color={value === 1 ? "#43B8B1" : "#929E9E"}
                    fontFamily="Pretendard"
                  >
                    실시간 차트
                  </Typography>
                }
                sx={{
                  "&.Mui-selected": {
                    color: "rgba(0, 0, 0, 0)",
                  },
                }}
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <MyStockList />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <RealtimeLists />
          </TabPanel>
        </Box>
      </div>
      <Modal open={openDeleteModal} onClose={handleDeleteModalClose}>
        <Box sx={style}>
          <p>정말 삭제하시겠습니까?</p>
          <p>관심주식에서 제거하기</p>
          <button onClick={deleteSubmit}>삭제하기</button>
        </Box>
      </Modal>
    </>
  );
}

export default StockListPage;
