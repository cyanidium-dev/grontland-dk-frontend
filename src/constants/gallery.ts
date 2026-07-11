/**
 * Gallery photo catalog — service-categorized work photos curated from the
 * client chat export (Preview/docs/ChatExport_2026-07-02). Powers the home
 * Gallery filter pills; designed to also power the future /galleri page.
 * Taxonomy matches SERVICES_MENU (facade folded under murerarbejde).
 */

export type GalleryServiceId =
  | "havearbejde"
  | "belaegning"
  | "murerarbejde"
  | "malerservice"
  | "tomrerarbejde"
  | "totalentreprise";

export type GalleryFilterId = "alle" | GalleryServiceId;

export type GalleryPhoto = {
  src: string;
  alt: string;
  service: GalleryServiceId;
};

export const GALLERY_FILTERS: readonly { id: GalleryFilterId; label: string }[] = [
  { id: "alle", label: "Alle" },
  { id: "havearbejde", label: "Havearbejde" },
  { id: "belaegning", label: "Belægning" },
  { id: "murerarbejde", label: "Murerarbejde" },
  { id: "malerservice", label: "Malerservice" },
  { id: "tomrerarbejde", label: "Tømrerarbejde" },
  { id: "totalentreprise", label: "Totalentreprise" },
] as const;

export const GALLERY_PHOTOS: readonly GalleryPhoto[] = [
  // Tømrerarbejde — terrasser, gulve, montering
  { src: "/images/gallery/tomrer-1.jpg", alt: "Færdig træterrasse i hårdttræ ved privat bolig", service: "tomrerarbejde" },
  { src: "/images/gallery/tomrer-2.jpg", alt: "Ny træterrasse under opbygning ved moderne villa", service: "tomrerarbejde" },
  { src: "/images/gallery/tomrer-3.jpg", alt: "Nyslebet og behandlet trægulv i bolig", service: "tomrerarbejde" },
  { src: "/images/gallery/tomrer-4.jpg", alt: "Opbygning af terrasse med bærende konstruktion", service: "tomrerarbejde" },
  { src: "/images/gallery/tomrer-5.jpg", alt: "Montering af nyt køkken", service: "tomrerarbejde" },
  { src: "/images/gallery/tomrer-6.jpg", alt: "Nyt gulv i bryggers", service: "tomrerarbejde" },
  // Murerarbejde — fliser, facade, tag, trapper
  { src: "/images/gallery/murer-1.jpg", alt: "Renoveret udvendig trappe med nye klinker", service: "murerarbejde" },
  { src: "/images/gallery/murer-2.jpg", alt: "Nylagte gulvfliser i naturstenslook", service: "murerarbejde" },
  { src: "/images/gallery/murer-3.jpg", alt: "Opsætning af fliser i badeværelse", service: "murerarbejde" },
  { src: "/images/gallery/murer-4.jpg", alt: "Murerarbejde med ny overligger i teglvæg", service: "murerarbejde" },
  { src: "/images/gallery/murer-5.jpg", alt: "Nylagt tegltag på bolig", service: "murerarbejde" },
  { src: "/images/gallery/murer-6.jpg", alt: "Tagterrasse med nye fliser og pudset værn", service: "murerarbejde" },
  // Havearbejde
  { src: "/images/gallery/have-1.jpg", alt: "Støttemur i natursten ved vandløb i have", service: "havearbejde" },
  { src: "/images/gallery/have-2.jpg", alt: "Havegang med stenbed og ny beplantning", service: "havearbejde" },
  { src: "/images/gallery/have-3.jpg", alt: "Klippede hække og plejet græsplæne", service: "havearbejde" },
  { src: "/images/gallery/have-4.jpg", alt: "Nyplantet bed med lyng og buske", service: "havearbejde" },
  { src: "/images/gallery/have-5.jpg", alt: "Anlagt stenbed med stauder i have", service: "havearbejde" },
  { src: "/images/gallery/have-6.jpg", alt: "Staudebed og brostensbelægning ved bolig", service: "havearbejde" },
  // Belægning — fliser, brosten, afvanding
  { src: "/images/gallery/belaegning-1.jpg", alt: "Ny belægning med granittrappe og støttemur", service: "belaegning" },
  { src: "/images/gallery/belaegning-2.jpg", alt: "Sandstensbelægning og græsarmering ved bolig nær vandet", service: "belaegning" },
  { src: "/images/gallery/belaegning-3.jpg", alt: "Teglbelægning i sildebensmønster ved indgang", service: "belaegning" },
  { src: "/images/gallery/belaegning-4.jpg", alt: "Terrassebelægning med kant i cortenstål", service: "belaegning" },
  { src: "/images/gallery/belaegning-5.jpg", alt: "Gangsti med støttemur og linjedræn", service: "belaegning" },
  { src: "/images/gallery/belaegning-6.jpg", alt: "Dræn- og afvandingsarbejde på byggeplads", service: "belaegning" },
  // Malerservice
  { src: "/images/gallery/maler-1.jpg", alt: "Udvendig maling af skur i sort", service: "malerservice" },
  { src: "/images/gallery/maler-2.jpg", alt: "Malerarbejde i trappeopgang med paneler", service: "malerservice" },
  { src: "/images/gallery/maler-3.jpg", alt: "Tapetsering af værelse", service: "malerservice" },
  { src: "/images/gallery/maler-4.jpg", alt: "Nymalet væg med stukloft", service: "malerservice" },
  { src: "/images/gallery/maler-5.jpg", alt: "Maling af specialrum med afdækning", service: "malerservice" },
  { src: "/images/gallery/maler-6.jpg", alt: "Færdigmalet stue i lyse toner med havudsigt", service: "malerservice" },
  // Totalentreprise — Skodsborg villa
  { src: "/images/gallery/total-1.jpg", alt: "Nyt bryggers med specialindrettede skabe", service: "totalentreprise" },
  { src: "/images/gallery/total-2.jpg", alt: "Specialbygget reolvæg i renoveret stue", service: "totalentreprise" },
  { src: "/images/gallery/total-3.jpg", alt: "Vinkælder med integreret belysning", service: "totalentreprise" },
  { src: "/images/gallery/total-4.jpg", alt: "Totalrenoveret stue med nye plankegulve", service: "totalentreprise" },
  { src: "/images/gallery/total-5.jpg", alt: "Ny trappe og snedkerløsninger i villa", service: "totalentreprise" },
  { src: "/images/gallery/total-6.jpg", alt: "Specialdesignede skabe med indbygget lys", service: "totalentreprise" },
] as const;

export function filterGalleryPhotos(filter: GalleryFilterId): readonly GalleryPhoto[] {
  if (filter === "alle") return GALLERY_PHOTOS;
  return GALLERY_PHOTOS.filter((p) => p.service === filter);
}
