const { google } = require('googleapis')

exports.appendToSheet = async (data) => {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })
  const sheets = google.sheets({ version: 'v4', auth })
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SHEET_ID,
    range: 'Sheet1!A1',
    valueInputOption: 'RAW',
    requestBody: { values: [[
      data.modality,
      data.callTime,
      data.phoneNumber,
      data.callOutcome,
      data.roomName,
      data.bookingDate,
      data.bookingTime,
      data.numGuests,
      data.summary
    ]] }
  })
}
