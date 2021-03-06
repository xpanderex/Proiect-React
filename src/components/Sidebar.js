import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIocn from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import {useCollection} from "react-firebase-hooks/firestore";
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


function Sidebar() {
    const [channels] = useCollection(db.collection("rooms"));
    const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarInfo>
                <h2>PLF Lab</h2>
                <h3>
                    <FiberManualRecordIcon />
                    {user.displayName}
                </h3>
            </SidebarInfo>
            <CreateIcon />
        </SidebarHeader>

        <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
        <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
        <SidebarOption Icon={DraftsIcon} title="Saved items"/>
        <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
        <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
        <SidebarOption Icon={AppsIocn} title="Apps"/>
        <SidebarOption Icon={FileCopyIcon} title="File browser"/>
        <SidebarOption Icon={ExpandLessIcon} title="Show less"/>

        <hr/>
        <SidebarOption Icon={ExpandMoreIcon} title="Channles "/>
        <hr/>
        <SidebarOption Icon={AddIcon} addChannelOption title="Create Channel"/>

        {channels?.docs.map((doc) => (
            <SidebarOption k
            ey={doc.id} 
            id ={doc.id} 
            title={doc.data().name}
            />
        ))}


    </SidebarContainer>
  )
}

export default Sidebar;
const SidebarContainer = styled.div`
    color:var(--beige);
    background-color: var(--bg-color);
    flex:0.3;
    border-top: 1px solid var(--bg-color-light);
    max-width: 260px;
    margin-top:60px;

    >hr{
        margin-top:10px;
        margin-bottom:10px;
        border: 1px solid var(--bg-color-light);
    }
`;
const SidebarHeader = styled.div`
    display:flex;
    border-bottom: 1px solid var(--bg-color-light);
    padding:13px;
    
    > .MuiSvgIcon-root{
        padding:8px;
        color:var(--bg-color-light);
        font-size:18px;
        background-color:var(--beige);
        border-radius:999px;
    }`;
const SidebarInfo = styled.div`
    flex:1;
    
    > h2{
        font-size:15px;
        font-weight:900;
        margin-bottom:5px;
    }
    
    > h3{
        display:flex;
        align-items:center;
        font-size:13px;
        font-weight:400;
    }
    
    > h3 > .MuiSvgIcon-root{
        font-size:14px;
        margin-top:1px;
        margin-right:2px;
        color:green;
    }
    `;