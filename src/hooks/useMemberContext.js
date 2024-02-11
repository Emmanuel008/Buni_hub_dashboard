import { useContext } from 'react';
import { MemberContext} from '../context/MemberContext';


export const useMemberContext = () => {
  const context = useContext(MemberContext);

  if (!context) {
    throw new Error('useAreaContext must be used inside an MemberContextProvider');
  }

  return context; // Make sure you return the context object
};