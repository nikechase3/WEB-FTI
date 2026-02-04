import { Instagram, Youtube} from "lucide-react";
import { FaTiktok, FaLine, FaWhatsapp } from "react-icons/fa6";

const FOOTER_LINKS = {
  Features: [
    { label: "Library", href: "/library" },
    { label: "Jurusan & Major", href: "/major" },
    { label: "Kalkulator IP / IPK", href: "/gpa" },
    { label: "Layanan Akademik", href: "/services" },
    { label: "Survei FTI", href: "/survei" },
    { label: "Calendar", href: "/calendar"},
  ],
  Resources: [
    { label: "Website ITB", href: "https://itb.ac.id/" },
    { label: "Website FTI ITB", href: "https://fti.itb.ac.id/" },
    { label: "Kemahasiswaan ITB", href: "https://kemahasiswaan.itb.ac.id/" },
    { label: "DITSAMA ITB", href: "https://ditsama.itb.ac.id/id/" },
  ],
  Kemahasiswaan: [
    { label: "Konseling BK ITB", href: "https://kemahasiswaan.itb.ac.id/counseling" },
    { label: "Admission ITB", href: "https://admission.itb.ac.id/id/" },
    { label: "Beasiswa ITB", href: "https://finaid.itb.ac.id/" },
    { label: "Informasi Akademik ITB", href: "https://akademik.itb.ac.id/id" },
  ],
  Akademik: [
    { label: "SiX ITB", href: "https://six.itb.ac.id/" },
    { label: "Helpdesk SiX ITB", href: "https://helpdesk.six.itb.ac.id/#login" },
    { label: "Edunex ITB", href: "https://edunex.itb.ac.id/" },
    { label: "Library ITB", href: "https://lib.itb.ac.id/" },
  ],
};

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/fti25itb/",
    label: "Instagram",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@fti25itb",
    label: "TikTok",
  },
  {
    icon: FaLine,
    href: "mailto:admin.fti@example.ac.id",
    label: "Line",
  },
  {    
    icon: Youtube,
    href: "https://www.youtube.com/@AkademikBPAFTI25",
    label: "Youtube",
  }, 
  {
    icon: FaWhatsapp,
    href: "https://wa.me/6281234567890", 
    label: "WhatsApp",
  }, 
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-neutral-50 dark:bg-neutral-800 border-t">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_3fr]">

          {/* LEFT: Brand */}
          <div className="max-w-sm">
            <h3 className="text-lg font-semibold mb-4 dark:text-white">
              FTI Academic Hub
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              Platform terpusat untuk kebutuhan akademik mahasiswa FTI.
            </p>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-neutral-500 hover:text-neutral-900 transition"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Link Columns */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            <FooterColumn title="Akademik" links={FOOTER_LINKS.Features} />
            <FooterColumn title="Resources" links={FOOTER_LINKS.Resources} />
            <FooterColumn title="Kemahasiswaan" links={FOOTER_LINKS.Kemahasiswaan} />
            <FooterColumn title="Akademik" links={FOOTER_LINKS.Akademik} />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t pt-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} FTI Academic Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-white">
        {title}
      </h4>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 transition"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
