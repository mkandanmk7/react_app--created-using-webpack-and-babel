import React, { useContext, useState } from 'react'
import { Theme } from './ThemeContext'

const ThemeComp = (props) => {
    const [background, setBackground] = useState(theme);
    const theme = useContext(Theme);
    console.log('background', background)
    const handleBg = () => {
        console.log("in bg change")
        setBackground(
            setBackground(background.background = '#ffcdbd')
        );
    }

    console.log("in theme comp:", theme)
    return (
        <button onClick={handleBg} {...props} className={"btn " + theme} style={{ backgroundColor: theme.background }}>Theme button </button>
    )
}

export default ThemeComp