import { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";

import { BookInfo } from "@/types";

export const useBookInfo = (): [
  {
    loading: boolean
    error: string | null,
    book_info: BookInfo | null,
    prev_remain: number, next_remain: number
  }, 
  {moveForward: () => any, moveBackward: () => any}
] => {
  const [lbs, setLeftBookStack] = useState<BookInfo[]>([]);
  const [rbs, setRightBookStack] = useState<BookInfo[]>([]);
  const book_info = useMemo(() => 
    (lbs.length > 0) ? lbs[lbs.length-1] : null
  , [lbs]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getNewSentence = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/sentence');
      const {result, data, error} = response?.data;
      if (!result) throw new Error(error);
      
      // setRightBookStack(p => [data, ...p]); // 첫 번째 문장만 표시
      setLeftBookStack(p => ([...p, data]));
      setLoading(false);
    } catch (err) {
      setError('문장을 불러오는데 실패했습니다.');
      setLoading(false);
      console.error('Error fetching sentence:', err);
    }
  }, []);

  const moveForward = useCallback(() => {
    if (rbs.length == 0) {
      return getNewSentence();
    }

    setLeftBookStack(p => ([...p, rbs[0]]));
    setRightBookStack((p => p.filter((v, i) => (i != 0))));
  }, [rbs]);

  const moveBackward = useCallback(() => {
    if (!book_info) return;

    setRightBookStack(p => ([book_info, ...p]));
    setLeftBookStack((p => p.filter((v, i) => (i != (p.length-1)))));
  }, [book_info]);

  useEffect(() => {
    moveForward();
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

  return [
    {
      loading, error, book_info,
      prev_remain: lbs.length, next_remain: rbs.length
    }, 
    {moveForward, moveBackward}
  ];
}