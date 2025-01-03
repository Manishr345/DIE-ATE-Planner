import { useContext } from 'react';
import { ActionCard } from './ActionCard';
import { 
  Calendar, 
  UserIcon as UserMd, 
  Clipboard, 
  Heart, 
  User, 
  CreditCard, 
  FileText 
} from 'lucide-react';
import ThemeContext from '../../contexts/theme/ThemeContext';

const PatientProfileActionCard = () => {
  const contextTheme = useContext(ThemeContext);
  
  const cardClassName = `
    w-full
    ${contextTheme?.theme === 'light' ? 'bg-neutral-200' : 'bg-gray-900'}
     shadow-input border-2 border-blue-500 shadow-blue-500/50 hover:shadow-[0_0_10px_5px_rgba(0,119,255,1)] hover:border-blue-500 transition-all duration-300 
    p-4
  `;

  const actions = [
    { icon: Calendar, title: "Personal Details" },
    { icon: UserMd, title: "Health Details" },
    { icon: Clipboard, title: "Goal Details" },
    { icon: FileText, title: "Food Details" },
    { icon: Heart, title: "Daily Activity Details" },
    { icon: User, title: "AI Diet Plans" },
    { icon: CreditCard, title: "Graph Representation" },
    { icon: FileText, title: "ETC." }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
        {actions.map((action, index) => (
          <div key={index} className="w-full">
            <ActionCard
              icon={action.icon}
              title={action.title}
              className={cardClassName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientProfileActionCard;