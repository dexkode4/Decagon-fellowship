import React from 'react'
import Header from '../Header'
import  styles from './PageLayout.module.scss'
function PageLayout({children}) {
    return (
        <div className={styles.pageLayout}>
            <Header/>
            {children}
        </div>
    )
}

export default PageLayout
