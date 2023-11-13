"use client"

import {useSocket} from "@/components/providers/socket-provider";
import {Badge} from "@/components/ui/badge";
import { BarChart } from "lucide-react";
import { ActionTooltip } from "./action-tooltip";

export const SocketIndicator = () => {
    const {isConnected} = useSocket();
    if(!isConnected){
        return (
            <>
                <ActionTooltip label="Fallback: Polling every 1s">
                    <BarChart className="h-8 w-8 mr-2 text-rose-500"/>
                </ActionTooltip>
            </>
            
        )
    }
    return (
        <>
            <ActionTooltip label="Live: Real-time updates">
                <BarChart className="h-8 w-8 mr-2 text-emerald-600"/>
            </ActionTooltip>
        </>
        
    )
}