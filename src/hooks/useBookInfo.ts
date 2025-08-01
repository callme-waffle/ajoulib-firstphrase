import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { BookInfo } from "@/types";

export const useBookInfo = (): [boolean, string | null, BookInfo | null] => {
  const [book_info, setBookInfo] = useState<BookInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSentence = useCallback(async () => {
    try {
      const response = await axios.get('/api/sentence');
      const {result, data, error} = response?.data;
      if (!result) throw new Error(error);
      
      setBookInfo(data); // 첫 번째 문장만 표시
      setLoading(false);
    } catch (err) {
      setError('문장을 불러오는데 실패했습니다.');
      setLoading(false);
      console.error('Error fetching sentence:', err);
    }
  }, []);

  useEffect(() => {
    fetchSentence();
    // setBookInfo({
    //   "sentence": "베스트셀러 범죄소설가가 되었을 때 소소한 위험 요소가 있다면 어딜 가나 이런 질문을 받는다는 것이다.베스트셀러 범죄소설가가 되었을 때 소소한 위험 요소가 있다면 어딜 가나 이런 질문을 받는다는 것이다.",
    //   "title": "겨우살이 살인사건겨우살이 살인사건겨우살이 살인사건겨우살이 살인사건겨우살이 살인사건겨우살이 살인사건",
    //   "author": "James, P. D",
    //   "location": "1층.큐레이션",
    //   "code": "823.914 J28mK이",
    //   "publisher": "출반사ㅏ아아ㅏㅏㅏㅇ"
    // })
    // setLoading(false);
  }, []);

  return [loading, error, book_info];
}