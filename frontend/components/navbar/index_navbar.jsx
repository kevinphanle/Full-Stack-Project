import React from 'react';
import { Link } from 'react-router-dom';

class IndexNav extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout().then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <header className="index-navbar-wrapper">
                <header className="index-navbar fade-dark-nav">

                    <section className="left-nav">
                        <Link to="/browse" className="main-logo-btn">
                            <img src={window.mainLogo} className="earthflix-logo" alt=""/>
                        </Link>
                        {/* <div className="left-nav-links"> */}
                            <Link to="/">Home</Link>
                            {/* <Link to="/shows">TV Shows</Link>
                            <Link to="/movies">Movies</Link>
                            <Link to="/">Recently Added</Link>
                            <Link to="/">My List</Link> */}

                        {/* </div> */}
                    </section>

                    <section className="right-nav">
                        <section className="search-bar">

                        </section>

                        <button onClick={this.handleLogout} className="logout-btn" >Log Out</button>
                    </section>
                </header>
            </header>
        );
    }

}

export default IndexNav;