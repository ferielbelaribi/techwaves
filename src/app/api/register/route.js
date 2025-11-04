import { NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(request) {
  console.log('🚀 API Google Sheets appelée')
  
  try {
    const data = await request.json()
    console.log('📨 Données reçues:', data)
    
    // Vérifier les champs requis
    const requiredFields = ['firstName', 'lastName', 'email', 'department', 'motivation', 'university', 'field']
    const missingFields = requiredFields.filter(field => !data[field])
    
    if (missingFields.length > 0) {
      console.log('❌ Champs manquants:', missingFields)
      return NextResponse.json(
        { error: `Missing fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // Configuration Google Sheets
    console.log('🔑 Configuration Google Auth...')
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    console.log('📊 Préparation des données pour Google Sheets...')
    
    // Préparer la ligne de données
    const row = [
      new Date().toISOString(), // Timestamp
      data.firstName,
      data.lastName,
      data.email,
      data.phone || '',
      data.university,
      data.field,
      data.department,
      data.studyLevel || '',
      data.motivation,
      data.newsletter ? 'Yes' : 'No',
      'Pending' // Status
    ]

    console.log('💾 Envoi vers Google Sheets...')
    
    // Ajouter la ligne à Google Sheets
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Techwaves Registrations!A:L', // Ajustez si votre feuille a un autre nom
      valueInputOption: 'RAW',
      requestBody: {
        values: [row],
      },
    })

    console.log('✅ Données enregistrées dans Google Sheets!')
    console.log('📍 Range mis à jour:', response.data.updates.updatedRange)

    return NextResponse.json(
      { 
        success: true,
        message: 'Application submitted successfully!',
        updatedRange: response.data.updates.updatedRange
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('💥 Erreur Google Sheets:', error)
    return NextResponse.json(
      { 
        error: 'Failed to save to Google Sheets',
        details: error.message 
      },
      { status: 500 }
    )
  }
}

// Pour tester si l'API fonctionne
export async function GET() {
  console.log('🔍 Debug Environment Variables:')
  console.log('GOOGLE_CLIENT_EMAIL:', process.env.GOOGLE_CLIENT_EMAIL ? '✅ Défini' : '❌ Non défini')
  console.log('GOOGLE_PRIVATE_KEY:', process.env.GOOGLE_PRIVATE_KEY ? '✅ Défini (longueur: ' + process.env.GOOGLE_PRIVATE_KEY.length + ')' : '❌ Non défini')
  console.log('GOOGLE_SHEET_ID:', process.env.GOOGLE_SHEET_ID ? '✅ Défini' : '❌ Non défini')
  
  return NextResponse.json({ 
    status: 'API Google Sheets is running',
    configured: !!process.env.GOOGLE_SHEET_ID,
    debug: {
      hasEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
      hasKey: !!process.env.GOOGLE_PRIVATE_KEY,
      hasSheetId: !!process.env.GOOGLE_SHEET_ID
    }
  })
}
