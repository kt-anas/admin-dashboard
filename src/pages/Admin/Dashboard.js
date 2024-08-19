import React from 'react';
 import  styles from './Dashboard.module.css'
 import Products from '../../components/Products';

export default function Dashboard() {
    return (
        <div className={styles["dashboard-container"]}>
            <section className={styles["dashboard-header"]}>
                <nav className={styles["dashboard-nav"]}>
                    <h1>Admin Dashboard</h1>
                </nav>
            </section>
            <section className={styles["dashboard-content"]}>
                <Products/>
            </section>
        </div>
    );
}
