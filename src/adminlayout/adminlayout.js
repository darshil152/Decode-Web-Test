import AdminSidebar from "./adminsidebar";
import AdminHeader from "./adminheader";
import AdminFooter from "./adminfooter"


function AdminLayout(props) {
    const removeLayer = () => {
        document.getElementById("root").classList.remove("dash-main-class-add");
    };

    return (
        <>
            <AdminHeader />
            <AdminSidebar />
            {props.children}
            <AdminFooter />
            <div className="overlay toggle-icon-main" onClick={removeLayer}></div>
        </>
    );
}

export default AdminLayout;
