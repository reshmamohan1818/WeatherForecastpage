import React from 'react'
import Link from 'next/link'
import classes from './mainheader.module.css'

export default function MainHeader() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href="/">WeatherApp</Link>
            </div>
            <nav className={classes.navigation}>
                 <ui>
                   <Link href="/">Home</Link>
                    
                    <Link href="#">Settings</Link>
                </ui>
            </nav>
        </header>
    )
}
