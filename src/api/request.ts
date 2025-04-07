'use server';

import { cache } from 'react';
import { BookInfo } from '@/types';

export const getSentence = cache(async (): Promise<BookInfo> => {
  return {
    sentence: "It isn't what you have or who you are or where you are or what you are doing that makes you happy or unhappy.",
    title: "인간관계론",
    author: "데일 카네기",
    location: "1층, 신간자료실",
    code: "158.1 C289hK",
  }

  try {
    const spreadsheetId = process.env.SHEET_ID;
    const range = 'C:G';
    
    // Google OAuth2 토큰 가져오기
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
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

    // 데이터 가공
    return rows.slice(1).map((row: string[]) => ({
      columnC: row[0] || '',
      columnD: row[1] || '',
      columnE: row[2] || '',
      columnF: row[3] || '',
      columnG: row[4] || '',
    }));

  } catch (error) {
    console.error('Google Sheets API 요청 실패:', error);
    throw error;
  }
}); 