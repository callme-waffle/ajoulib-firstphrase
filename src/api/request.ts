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
        // sentence: firstSentence,
        sentence: "알렉세이 표도로비치 카라마조프는 우리 군(郡)의 지주 표도르 파블로비치 카라마조프의 셋째 아들이었는데, 그의 아버지는 정확히 삼십 년 전 비극적이고 어두운 최후를 맞이했기 때문에(지금도 우리 도시에서는 회상하곤 할 만큼) 한때 대단한 유명세를 탔던바, 그의 최후에 대해서는 때가 되면 얘기를 하겠다.",
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