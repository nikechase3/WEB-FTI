import { FileX } from "lucide-react";
import {Embed} from '@/components/Section/fiturtest';
export default function Page() {
  return (
    <div>
      <h1> Nah ini </h1>
      <div>
        
            <div style ={{width: '50%', height: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '60px', margin:'0 auto'}}>
                <h1>Anzio</h1>
                <iframe 
                    src = "https://drive.google.com/file/d/1DTpNSrUdDPURwLivlQn0UfuenvZm7Hp0/preview"
                    width = '100%'
                    height = '100%'
                    style = {{border: 'none'}}
                />
            </div>
            <div>
            <Embed
              header = "Anchovy"
              embed = "https://drive.google.com/file/d/1DTpNSrUdDPURwLivlQn0UfuenvZm7Hp0/preview"
              footer = "AA"
            />
            </div>
      </div>
    </div>
  );
}

