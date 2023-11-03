import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface InviteCodePageProps {
    params:{
        invitecode: string
    
    };
};


const InviteCodePage = async({
    params
}: InviteCodePageProps) => {
    const profile = await currentProfile();
    if(!profile){
        return redirectToSignIn();
    }
    if(!params.invitecode){
        return redirect("/");
    }
    const existingServer = await db.server.findFirst({
        where:{
            inviteCode: params.invitecode,
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });
    if(existingServer){
        return redirect(`/servers/${existingServer.id}`);
    }
    const server = await db.server.update({
        where:{
            inviteCode: params.invitecode
        },
        data:{
            members:{
                create:{
                    profileId: profile.id
                }
            }
        }
    });
    if(server){
        return redirect(`/servers/${server.id}`);
    }
    return null;
}

export default InviteCodePage;