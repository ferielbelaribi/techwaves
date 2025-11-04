'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false)
  const [registrations, setRegistrations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà authentifié
    const isAuth = localStorage.getItem('techwaves_admin')
    if (isAuth === 'true') {
      setAuthenticated(true)
      fetchRegistrations()
    } else {
      askForPassword()
    }
  }, [])

  const askForPassword = () => {
    const password = prompt('🔐 Admin Password:')
    // CHANGE CE MOT DE PASSE !
    if (password === 'TW2024ENSB') {
      setAuthenticated(true)
      localStorage.setItem('techwaves_admin', 'true')
      fetchRegistrations()
    } else {
      alert('❌ Access Denied')
      window.location.href = '/'
    }
  }

  const fetchRegistrations = async () => {
    try {
      const response = await fetch('/api/register')
      if (response.ok) {
        const data = await response.json()
        setRegistrations(data)
      } else {
        setError('Failed to load registrations')
      }
    } catch (err) {
      setError('Connection error')
    } finally {
      setLoading(false)
    }
  }

  const downloadCSV = () => {
    const link = document.createElement('a')
    link.href = '/api/register?download=csv'
    link.download = 'techwaves-registrations.csv'
    link.click()
  }

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const logout = () => {
    localStorage.removeItem('techwaves_admin')
    setAuthenticated(false)
    window.location.reload()
  }

  // Si pas authentifié, montre un écran de chargement
  if (!authenticated) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 flex items-center justify-center">
          <div className="text-white text-xl">Checking access...</div>
        </main>
        <Footer />
      </>
    )
  }

  if (loading) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 flex items-center justify-center">
          <div className="text-white text-xl">Loading registrations...</div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
              <button
                onClick={logout}
                className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-2 rounded-xl hover:bg-red-500/30 transition-all"
              >
                Logout
              </button>
            </div>
            <p className="text-tech-200 text-lg">Techwaves Membership Applications</p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 mb-8">
              <div className="tech-card rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-tech-neon">{registrations.length}</div>
                <div className="text-tech-300 text-sm">Total Applications</div>
              </div>
              <div className="tech-card rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400">
                  {registrations.filter(r => r.status === 'approved').length}
                </div>
                <div className="text-tech-300 text-sm">Approved</div>
              </div>
              <div className="tech-card rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">
                  {registrations.filter(r => r.status === 'pending').length}
                </div>
                <div className="text-tech-300 text-sm">Pending</div>
              </div>
              <div className="tech-card rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-red-400">
                  {registrations.filter(r => r.status === 'rejected').length}
                </div>
                <div className="text-tech-300 text-sm">Rejected</div>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={downloadCSV}
              className="tech-gradient text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all duration-300 neon-glow mb-6"
            >
              📥 Download CSV Export
            </button>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-xl mb-6 text-center">
              {error}
            </div>
          )}

          {/* Registrations Table */}
          <div className="tech-card rounded-2xl p-6 backdrop-blur-md bg-slate-900/70 border border-tech-600/50">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Membership Applications ({registrations.length})
            </h2>

            {registrations.length === 0 ? (
              <div className="text-center text-tech-300 py-8">
                No applications yet
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-tech-200">
                  <thead className="text-xs uppercase bg-slate-800/50">
                    <tr>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">Email</th>
                      <th className="px-4 py-3">University</th>
                      <th className="px-4 py-3">Field</th>
                      <th className="px-4 py-3">Department</th>
                      <th className="px-4 py-3">Study Level</th>
                      <th className="px-4 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map((reg) => (
                      <tr key={reg.id} className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">
                        <td className="px-4 py-3 whitespace-nowrap">{formatDate(reg.timestamp)}</td>
                        <td className="px-4 py-3 font-medium">
                          {reg.firstName} {reg.lastName}
                        </td>
                        <td className="px-4 py-3">{reg.email}</td>
                        <td className="px-4 py-3">{reg.university}</td>
                        <td className="px-4 py-3">{reg.field}</td>
                        <td className="px-4 py-3">
                          <span className="bg-slate-800/50 px-2 py-1 rounded text-xs">
                            {reg.department}
                          </span>
                        </td>
                        <td className="px-4 py-3">{reg.studyLevel || '-'}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            reg.status === 'approved' ? 'bg-green-500/20 text-green-300' :
                            reg.status === 'rejected' ? 'bg-red-500/20 text-red-300' :
                            'bg-yellow-500/20 text-yellow-300'
                          }`}>
                            {reg.status || 'pending'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Raw Data Preview */}
          <div className="tech-card rounded-2xl p-6 backdrop-blur-md bg-slate-900/70 border border-tech-600/50 mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Raw Data (JSON)</h3>
              <button
                onClick={() => navigator.clipboard.writeText(JSON.stringify(registrations, null, 2))}
                className="bg-slate-800/50 text-tech-200 px-3 py-1 rounded text-sm hover:bg-slate-700/50 transition-all"
              >
                Copy JSON
              </button>
            </div>
            <pre className="bg-slate-900/50 p-4 rounded-xl overflow-x-auto text-tech-200 text-sm max-h-96 overflow-y-auto">
              {JSON.stringify(registrations, null, 2)}
            </pre>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
