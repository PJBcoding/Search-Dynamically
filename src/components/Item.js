import React from 'react'
import styles from './Item.module.css'

const Item = (props) => {

    return (

        <li className={styles.li}>{props.name}</li>
    )
}

export default Item;