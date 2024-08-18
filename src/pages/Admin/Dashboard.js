import React from 'react';
import './Dashboard.css';
import Products from './Products';

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <section className="dashboard-section">
                <nav className="dashboard-nav">
                    <h1>Admin Dashboard</h1>
                </nav>
            </section>
            <section className="dashboard-section">
                <Products />
            </section>
        </div>
    );
}
