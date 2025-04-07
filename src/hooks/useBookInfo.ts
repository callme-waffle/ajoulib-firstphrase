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
  }, []);

  return [loading, error, book_info];
}