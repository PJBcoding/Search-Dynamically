import React, { useState, useEffect } from 'react'
import styles from './Items.module.css'
import Item from './Item';
const Items = () => {
    const names = ["Rahul", "Rakesh", "Binod", "Steven", "Thomas", "Pat"];

    const [users, setusers] = useState(names);

    const [searchedUser, setsearchedUser] = useState('');

    useEffect(() => {
        console.log('serach user : ' + searchedUser);
        console.log(names);
        setusers(names.filter((item) => { return (item.toLowerCase().includes(searchedUser.toLowerCase().trim())) }));
    }, [searchedUser]);

    const searchUserHandler = (event) => {

        setsearchedUser(event.target.value);
    }



    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Enter Your Search Here</h3>
            <input type="search" onChange={searchUserHandler} />
            <div className={styles.innercontainer}>
                <ul>
                    {users.length > 0 &&

                        users.map((item) => {
                            return (

                                <Item name={item} key={Math.random().toString()} />

                            )
                        })
                    }
                    {
                        users.length <= 0 && <Item name="No Users Found" key={Math.random().toString()} />
                    }
                </ul>

            </div>
        </div>
    )
}

export default Items;