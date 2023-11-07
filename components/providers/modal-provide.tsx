"use client"
import { CreateSeverModal } from "../modals/create-server-modal";
import { useEffect, useState } from "react";
import { InviteModal } from "@/components/modals/invite-modal";
import { EditSeverModal } from "@/components/modals/edit-server-modal";
import { MembersModal } from "@/components/modals/members-modal";
import { CreateChannelModal } from "@/components/modals/create-channel-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true);
    },[]);  
    if(!isMounted){
        return null;
    }
    return(
        <>
            <CreateSeverModal/>
            <InviteModal/>
            <EditSeverModal/>
            <MembersModal/>
            <CreateChannelModal/>
        </>
    )
}   