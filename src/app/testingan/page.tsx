import { FileX } from "lucide-react";
import {Embed} from '@/components/Section/fiturtest';
export default function Page() {
  return (
    <div>
      <h1> Nah ini </h1>
      <div>
            <div>
            <Embed
              header = "Anchovy"
              embed = "https://drive.google.com/file/d/1DTpNSrUdDPURwLivlQn0UfuenvZm7Hp0/preview"
              footer = "Duce of Anzio"
            />
            <Embed
              header = 'Pepperoni'
              embed = "https://drive.google.com/file/d/1kmeHUF500owRJO9OuJENKH6xg-CO5o2t/preview"
              footer= 'Amba'
            />
            <Embed
              header = 'Try Youtube'
              embed = 'https://www.youtube.com/embed/PqJUTfxRS0M'
              footer = 'idk'
            />
            </div>
      </div>
    </div>
  );
}

