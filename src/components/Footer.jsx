import Image from 'next/image'
import techwaveswhite from '../assets/techwaveslogowhite.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className=" pl-8 relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-white/5">
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image 
                src={techwaveswhite} 
                alt="Techwaves Logo" 
                width={160}
                height={50}
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">Dive Deep, Rise High</p>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed text-sm">
              Fondé le 5 octobre par Zertit Dorsane. Leader dans l'innovation technologique 
              et la formation des étudiants aux technologies modernes.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              {['F', 'I', 'L', 'G'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-300"
                >
                  <span className="text-sm font-medium">{social}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Navigation</h4>
            <ul className="space-y-3">
              {['Accueil', 'Équipe', 'Projets', 'Événements', 'Certificats'].map((item) => (
                <li key={item}>
                  <a 
                    href={`/${item === 'Accueil' ? '' : item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>contact@techwaves.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>ENSB, Université</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Algérie</span>
              </li>
            </ul>

            {/* Ambassadeurs */}
            <div className="mt-6">
              <h5 className="font-medium text-gray-300 mb-3 text-sm">Ambassadeurs</h5>
              <div className="flex flex-col gap-2">
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-xs">Skills Area Egypt</span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-xs">Huawei ICT</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Techwaves ENSB. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Mentions légales</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}