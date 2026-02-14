import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../constants';
import { Language } from '../types';
import { Link } from 'react-router-dom';

interface StickyCTAProps {
  lang: Language;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ lang }) => {
  const prefix = lang === 'ar' ? '/ar' : '';

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-3 md:hidden z-40 flex justify-around items-center pb-safe">
      <a 
        href={`tel:${PHONE_NUMBER}`}
        className="flex flex-col items-center text-gray-700 hover:text-medical-600"
      >
        <div className="w-10 h-10 bg-medical-50 rounded-full flex items-center justify-center text-medical-600 mb-1">
          <Phone size={20} />
        </div>
        <span className="text-xs font-medium">{lang === 'fr' ? 'Appeler' : 'اتصال'}</span>
      </a>

      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-gray-700 hover:text-green-600"
      >
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mb-1 shadow-md -mt-6 border-4 border-white">
          <MessageCircle size={24} />
        </div>
        <span className="text-xs font-medium">WhatsApp</span>
      </a>

      <Link 
        to={`${prefix}/contact`}
        className="flex flex-col items-center text-gray-700 hover:text-medical-600"
      >
        <div className="w-10 h-10 bg-medical-50 rounded-full flex items-center justify-center text-medical-600 mb-1">
          <Calendar size={20} />
        </div>
        <span className="text-xs font-medium">{lang === 'fr' ? 'RDV' : 'موعد'}</span>
      </Link>
    </div>
  );
};

export default StickyCTA;