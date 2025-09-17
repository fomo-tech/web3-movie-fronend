'use client'

import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

interface MainLayoutProps {
    children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Sidebar />
            <main className="main">
                <Header />
                <div className="main__content">
                    {children}
                    <Footer />
                </div>
            </main>


        </>
    )
}

export default MainLayout