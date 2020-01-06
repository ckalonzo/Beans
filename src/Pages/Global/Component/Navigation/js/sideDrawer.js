const sideDrawer = props => {
  let drawerClasses = "offcanvas-menu closed ";
  if (props.show) {
    drawerClasses = "offcanvas-menu";
  }
  return (
    <nav className={drawerClasses}>
      <ul>...</ul>
    </nav>
  );
};
