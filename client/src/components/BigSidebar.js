import { useAppContext } from '../context/AppContext'
import NavLinks from './NavLinks'
import Logo from '../components/Logo'
import Wrapper from '../assets/wrappers/BigSidebar'

const BigSidebar = () => {
  const {showSidebar}= useAppContext()
  return (
    <Wrapper>
      <div className={showSidebar? 'sidebar-container':'sidebar-container show-sidebar'}>
        <div className='content'>
          <header>
            <Logo/>
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
