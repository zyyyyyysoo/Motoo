from datetime import date, datetime, timedelta
import time
import requests
from collections import defaultdict
from typing import Union
import tortoise
from app.models.stocks import Stock
from app.routers.const import *
from app.config import settings, redis_session

from fastapi import APIRouter, BackgroundTasks, Response
import aiohttp
import pykrx
import asyncio
import typer
from app.schemes.common import CommonResponse
from app.schemes.stocks import CandleData, EntireStockData, GetStockDetailResponse

router = APIRouter(prefix="/stocks")


@router.get("/detail/{ticker}", description="주식 상세 조회", response_model=GetStockDetailResponse)
async def get_stock_detail(ticker: str, response: Response):
    try:
        stock = await Stock.get(ticker=ticker)
    except tortoise.exceptions.DoesNotExist:
        response.status_code = 404
        return GetStockDetailResponse(message="failed")
    today = date.today().strftime("%Y-%m-%d")
    # 차트 데이터
    daily = await candle_map[stock.category_id].filter(stock=stock.pk, date=today)
    weekly = (await candle_map[stock.category_id].filter(stock=stock.pk, date__gte=date.today()-timedelta(7)))[::6]
    monthly = await day_map[stock.category_id].filter(stock=stock.pk, date__gte=date.today()-timedelta(31))
    yearly = (await day_map[stock.category_id].filter(stock=stock.pk, date__gte=date.today()-timedelta(365)))[::7]
    return GetStockDetailResponse(**dict(stock), daily=daily, weekly=weekly, monthly=monthly, yearly=yearly)
