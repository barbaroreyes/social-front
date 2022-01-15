import './topbar.css';

const TopBar = () => {
  return (
    <div className="topBarContainer">
     <div className="topBar-left">
         <span className="logo">exampl-social</span>
         left</div>
     <div className="topBar-center">
         <div className="searchbar">
             <input type="text" className="" placeholder="Search"/>
         </div>
         center</div>
     <div className="topBar-rigth">
     <div>Notificaciones</div>
         rigth</div>
    </div>
  );
}

export default TopBar;
