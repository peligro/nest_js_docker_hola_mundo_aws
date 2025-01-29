
import { Outlet } from "react-router-dom";
const Frontend = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Ejemplo Nestjs</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/colas-bullmq">Colas Bullmq</a>
                                    </li> 
                                    <li className="nav-item">
                                        <a className="nav-link" href="/excel">Excel</a>
                                    </li> 
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div>
                <Outlet />
                </div>
            </div>
           
        </>
    )
}

export default Frontend