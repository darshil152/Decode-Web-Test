
const menu = "https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fmenu.png?alt=media&token=fa92a152-457c-4807-b96f-50f26a9731e2&_gl=1*5janv0*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTgzNjEuMC4wLjA."

function AdminHeader(props) {
    const addmainclass = () => {

        document.getElementById("root").classList.toggle("dash-main-class-add");
        document.getElementById("sidebar-back").classList.remove("d-none");
    };

    const openUserinfo = () => {
        document.getElementById("user-detail").classList.toggle("active-user-info");
    };

    return (
        <>
            <header className="header-fix-top-section">
                <div onClick={addmainclass} className="d-xl-none abce">
                    <img src={menu} className="me-3 me-3 imgmenu" alt="arrow" />
                </div>
                {/* <div className="hdr-top-info d-flex align-items-center">
                    <span className="me-2">
                        <img src={HeaderLogo} className="w-100 h-100" alt="logo" />
                    </span>
                    lorem ipsum llc
                </div> */}
                {/* <div className="ms-auto mobile-responsive-info" id="user-detail">
                    <div className="d-flex align-items-center mobile-responsive-info-inr">

                        <div className="dropdown-header p-0 ms-3">
                            <Dropdown >
                                <Dropdown.Toggle id="dropdown" >
                                    <img src={Profile} alt="profile" />

                                    <div className="ps-3 text-start">
                                        <span className="d-block">Heaven Kapopara</span>
                                        <bdi className="d-block">heaven@decodesofttech.com</bdi>
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div> */}
                {/* <div className="d-md-none" onClick={openUserinfo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                    </svg>
                </div> */}
            </header>
        </>
    );
}

export default AdminHeader;
