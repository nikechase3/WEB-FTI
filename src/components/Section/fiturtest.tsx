import { FileX } from "lucide-react";
import { Grenze } from "next/font/google";

type forembed = {
    header: string;
    embed: string;
    footer: string;
};

export const Embed = ({header,embed,footer}: forembed) => {
    return(
        <div style={{
            padding: '8px',
            backgroundColor: 'cyan',
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            margin:'0 auto',
            marginLeft: '20%',
            marginRight: '20%',
            borderRadius: '16px'
        }}>
            <h1 style = {{color: 'black', margin: '8px',backgroundColor:'green'}}>{header}</h1>
           <iframe    
                src = {embed}
                width = '75%'
                height = '400px'
                style = {{border: 'none'}}
            />
            <p style = {{color: 'black', margin: '8px'}}>{footer}</p>
        </div>
    )
    
}