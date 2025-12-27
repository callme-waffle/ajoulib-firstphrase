'use server';

import { cache } from 'react';
import { BookInfo } from '@/types';

export const getSentence = cache(async (): Promise<{
  result: true;
  data: BookInfo;
} | {
  result: false;
  data?: BookInfo;
  error?: string;
}> => {

  try {
    const spreadsheetId = process.env.SHEET_ID;
    const range = 'D:L';
    
    // Google OAuth2 토큰 가져오기
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.NEXT_GOOGLE_CLIENT_ID,
        client_secret: process.env.NEXT_GOOGLE_CLIENT_SECRET,
        refresh_token: process.env.NEXT_GOOGLE_REFRESH_TOKEN,
        grant_type: 'refresh_token',
      }),
    });

    const { access_token } = await tokenResponse.json();

    // Google Sheets API 호출
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`,
      {
        headers: {
          'Authorization': `Bearer ${access_token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const rows = data.values;

    if (!rows || rows.length === 0) {
      throw new Error('데이터가 없습니다.');
    }

    let randomIndex = Math.floor(Math.random() * rows.length) % rows.length;
    if (randomIndex === 0) randomIndex = 1;

    const [ title, author, translator, publisher, publishedAt, code, isbn, firstSentence, secondSentence ] = rows[randomIndex];
    return {
      result: true,
      data: {
        sentence: firstSentence,
        title,
        author,translator,
        publisher,
        code
      }
    }

  } catch (error: any) {
    console.error('Google Sheets API 요청 실패:', error);
    return {
      result: false,
      error: error?.message
    }
  }
}); 

export const getBookURL = cache(async (code: string): Promise<
  {result: true; url: string;} | 
  {result: false; reason?: string;}
> => {
  try {
    const request = await fetch(`https://library.ajou.ac.kr/pyxis-api/1/collections/1/search?all=1|k|a|${code}`);
    const data = await request.json();

    if (data?.data?.totalCount === 0) {
      return {
        result: false,
        reason: "No book found"
      };
    }

    const book_id = data.data.list[0].id;

    return {
      result: true,
      url: `https://library.ajou.ac.kr/#/search/detail/${book_id}`
    };
  } catch(e: any) {
    return {
      result: false,
      reason: e?.message || "Unknown error"
    };
  }
});