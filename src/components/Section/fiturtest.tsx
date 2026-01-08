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
            backgroundColor: '#030712ff',
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            margin:'0 auto',
            marginLeft: '2%',
            marginRight: '2%',
            borderRadius: '16px',
            height: '100%'
        }}>
            <h1 style = {{color: 'white', margin: '8px'}}>{header}</h1>
           <iframe    
                src = {embed}
                style = {{border: 'none',flex: '1', height: '100%', width: '100%'}}
            />
            <p style = {{color: 'black', margin: '8px'}}>{footer}</p>
        </div>
    )
    
}

type forbox = {
    image: string;
    title: string;
    subtitle: string;
    button: string;
    kode: string;
    id: number;
}

export const Box = ({image, title, subtitle, button, kode, id}: forbox) => {
    return(
        <div style={{
            padding: '10px',
            backgroundColor: '#d8d8d8ff',
            display: 'flex',
            flexDirection: 'column', 
            borderRadius: '10px',
            height: 'auto',
            width: '100%',
        }}>
            <img className = "w-full h-48 object-cover object-top"src = {image}/>
            <h1 className = "text-black text-lg text-left mt-2">{kode} {title}</h1>
            <h1 className = "text-gray-500 text-sm text-left">{subtitle}</h1>
            <a href={button} className = "px-8 py-2 rounded-sm text-black bg-blue-600 w-full text-center text-bold mt-auto">Enter</a>
        </div>
    )
    
}