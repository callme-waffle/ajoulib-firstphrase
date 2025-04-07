'use server';

import { cache } from 'react';

export const getSentence = cache(async (): Promise<any[]> => {
  try {
    const spreadsheetId = import.meta.env.VITE_SHEET_ID;
    const range = 'C:G';
    
    // Google OAuth2 토큰 가져오기
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
        refresh_token: import.meta.env.VITE_GOOGLE_REFRESH_TOKEN,
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
    return rows.slice(1).map((row: any) => ({
      columnC: row[0] || '',
      columnD: row[1] || '',
      columnE: row[2] || '',
      columnF: row[3] || '',
      columnG: row[4] || '',
    }));

  } catch (error) {
    console.error('Google Sheets API 요청 실패:', error);
    throw error;
    // throw new Error('시트 데이터를 가져오는데 실패했습니다.');
  }
});