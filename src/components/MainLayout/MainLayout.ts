const MainLayout = () => {

    const  { currentModal } = useContext(RecModalContext)
    const { currentUser } = useContext(UserContext)
  
    return (
  
      <div className='main-layout'>
        {!currentUser &&
          <Navigate to="/login" />
        }
        {currentUser &&
          <>
            <NavBar />
            <div className='header-page-section'>
              <Header />
              <Outlet />
              {currentModal.openModal && <RecModal />}
            </div>
          </>
        }
      </div>
    )
  }