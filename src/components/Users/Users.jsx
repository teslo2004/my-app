import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {
    if(props.users.length === 0){
    props.setUsers([
        {
            id: '1',
            photoUrl:'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        }, {
            id: '2',
            photoUrl:'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
            followed: true,
            fullName: 'Sasha',
            status: 'I am a boss too',
            location: {
                city: 'Moscow',
                country: 'Russia'
            }
        }, {
            id: '3',
            photoUrl:'http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
            followed: false,
            fullName: 'Lena',
            status: 'I am a boss',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            }
        }
    ])
}
    return <div>
        {
            props.users.map(u => <div key={u.is}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                        }                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;