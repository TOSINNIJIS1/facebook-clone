import React from 'react';
import '../style/style.scss';
import SidebarRow from './Row/SidebarRow';
import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';


function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow 
            src='https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/50522186_102817504162781_4263688290428780544_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=s9DVq1pP_NAAX-CLR1i&_nc_ht=scontent-iad3-1.xx&oh=852ebff07443a161351ef2b61b18a6cd&oe=60174D98' 
            title='Seth' 
            />

            <SidebarRow 
            Icon={LocalHospital}
            title='Covid-19 Information Center'
            />

            <SidebarRow
            Icon={EmojiFlags}
            title='Pages'
            />

            <SidebarRow 
            Icon={People}
            title='Friends'
            />

            <SidebarRow 
            Icon={Chat}
            title='Messanger'
            />

            <SidebarRow 
            Icon={Storefront}
            title='Marketplace'
            />

            <SidebarRow 
            Icon={VideoLibrary}
            title='Videos'
            />

            <SidebarRow 
            Icon={ExpandMoreOutlined}
            title='Marketplace'
            />
        </div>
    )
}

export default Sidebar
