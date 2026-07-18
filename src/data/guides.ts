export type Fact = { label: string; value: string; status?: "confirmed" | "unknown" };
export type FAQ = { question: string; answer: string };
export type Section = { id: string; title: string; paragraphs?: string[]; bullets?: string[] };
export type Source = { name: string; url: string; note: string };

export type Guide = {
  slug: string;
  eyebrow: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  heroImage?: string;
  imageSource?: string;
  facts: Fact[];
  sections: Section[];
  faq: FAQ[];
  internalLinks: string[];
  sources: Source[];
};

const steamGame = "https://store.steampowered.com/app/2735850/Wilderdark/";
const steamDemo = "https://store.steampowered.com/app/2735900/Wilderdark_Demo/";
const gematsu = "https://www.gematsu.com/2026/07/wilderdark-launches-november-3";
const steamImage = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2735850/header.jpg";

export const guides: Guide[] = [
  {
    slug: "release-date",
    eyebrow: "Launch tracker",
    title: "Wilderdark Release Date: When Is Wilderdark Coming Out?",
    h1: "Wilderdark Release Date",
    description: "Wilderdark is listed for November 3, 2026 on PC via Steam. Console versions, pre-orders, and other platforms have not been announced.",
    intro: "The current Steam listing gives Wilderdark a November 3, 2026 release date. This page separates that confirmed listing from details that remain unannounced.",
    image: steamImage,
    imageAlt: "Wilderdark official Steam store artwork",
    heroImage: steamImage,
    imageSource: "Official Steam store listing",
    facts: [
      { label: "Release date", value: "November 3, 2026", status: "confirmed" },
      { label: "Confirmed platform", value: "PC via Steam", status: "confirmed" },
      { label: "Pre-order", value: "Not announced", status: "unknown" },
      { label: "Console release", value: "Not announced", status: "unknown" },
      { label: "Demo", value: "Available separately on Steam", status: "confirmed" }
    ],
    sections: [
      { id: "short-answer", title: "Short answer", paragraphs: ["Wilderdark is currently listed to launch on November 3, 2026. The only confirmed launch platform in the current source set is PC via Steam. Release information can change before launch, so the Steam listing remains the primary reference."] },
      { id: "source", title: "Where the date comes from", paragraphs: ["The date appears on the Wilderdark Steam store page, which is the primary source used by this guide. Gematsu also reported the November 3 date after Team Junkfish's announcement, providing a useful secondary confirmation."] },
      { id: "launch-type", title: "Is this Early Access or full launch?", paragraphs: ["The current source set lists a November 3, 2026 launch date, but this page does not separately label an Early Access plan. We will update this if Team Junkfish or Steam adds more detail."] },
      { id: "platforms", title: "Platforms at launch", paragraphs: ["PC via Steam is confirmed. PS5, Xbox Series X|S, Nintendo Switch, and other console versions have not been announced. That means they should be treated as unknown—not ruled out."] },
      { id: "preorder", title: "Can you pre-order Wilderdark?", paragraphs: ["A pre-order is not announced in the current source set. Steam currently offers a wishlist option, which can notify interested players when availability changes."] }
    ],
    faq: [
      { question: "Is Wilderdark coming to console?", answer: "No console version has been announced. PC via Steam is the only confirmed platform in the current source set." },
      { question: "Can I pre-order Wilderdark?", answer: "A pre-order has not been announced. You can currently wishlist the game on Steam." },
      { question: "Was Wilderdark delayed?", answer: "The current source set does not establish a delay. Earlier coverage sometimes used a broader 2026 window; Steam now lists November 3, 2026." },
      { question: "Is the demo available before release?", answer: "Yes. A free PC demo is available through its separate Steam page." }
    ],
    internalLinks: ["platforms", "demo", "system-requirements"],
    sources: [
      { name: "Steam — Wilderdark", url: steamGame, note: "Primary release date and platform listing." },
      { name: "Gematsu launch report", url: gematsu, note: "Secondary report of the November 3 launch announcement." }
    ]
  },
  {
    slug: "demo",
    eyebrow: "Play before launch",
    title: "Wilderdark Demo Guide: How to Play and What to Expect",
    h1: "Wilderdark Demo Guide",
    description: "A free Wilderdark demo is available on Steam. Learn how to play it, what the demo appears to cover, and whether progress carry-over has been confirmed.",
    intro: "The free Wilderdark demo is available on PC via Steam. Its store description establishes the premise and core framing, but does not specify length, download size, or progress carry-over.",
    image: steamImage,
    imageAlt: "Wilderdark official Steam store artwork",
    heroImage: steamImage,
    imageSource: "Official Steam store listing",
    facts: [
      { label: "Demo", value: "Free on Steam", status: "confirmed" },
      { label: "Demo release date", value: "May 7, 2026", status: "confirmed" },
      { label: "Progress carry-over", value: "Not confirmed", status: "unknown" },
      { label: "Demo size", value: "Not specified", status: "unknown" },
      { label: "Platform", value: "PC via Steam", status: "confirmed" }
    ],
    sections: [
      { id: "availability", title: "Is there a Wilderdark demo?", paragraphs: ["Yes. Steam lists a free Wilderdark demo released on May 7, 2026. It is a separate Steam entry linked from the full game's store page."] },
      { id: "how-to-play", title: "How to play the demo", paragraphs: ["Open the Wilderdark Demo page on Steam, sign in to Steam if needed, and use the Install Demo option. This guide links directly to the store page and does not embed Steam." ] },
      { id: "contents", title: "What the demo appears to include", paragraphs: ["Based on the current Steam description, the demo uses the same first-person survival-horror setup: a strange island, ectoparasitic dinosaurs and organisms, exploration, investigation, stealth, sample collection, and crafted tools."], bullets: ["No exact demo length is listed.", "No complete content or creature list is published.", "The description should not be read as a promise that every full-game system appears in the demo."] },
      { id: "carry-over", title: "Does demo progress carry over?", paragraphs: ["Progress carry-over is not confirmed in the current Steam listings. Until Team Junkfish or Steam publishes a clear statement, plan on the demo as a standalone preview."] },
      { id: "should-play", title: "Should you play the demo before launch?", paragraphs: ["The demo is the clearest way to test the atmosphere and how the current PC build feels on your hardware. Keep expectations focused on a pre-release sample, and check the store page for updates before downloading."] }
    ],
    faq: [
      { question: "Is the Wilderdark demo free?", answer: "Yes. Steam currently labels the Wilderdark demo as free." },
      { question: "Where can I download the Wilderdark demo?", answer: "Download it from the separate Wilderdark Demo page on Steam." },
      { question: "Does demo progress carry over?", answer: "Carry-over to the full game has not been confirmed." },
      { question: "Is the demo on console?", answer: "No console demo has been announced. The confirmed demo is on PC via Steam." }
    ],
    internalLinks: ["gameplay", "system-requirements", "release-date"],
    sources: [{ name: "Steam — Wilderdark Demo", url: steamDemo, note: "Primary demo availability, date, premise, and PC requirements." }]
  },
  {
    slug: "gameplay",
    eyebrow: "Confirmed mechanics",
    title: "Wilderdark Gameplay Guide: Survival, Stealth, Tools & Exploration",
    h1: "Wilderdark Gameplay Guide",
    description: "Wilderdark is a first-person survival horror game about exploration, survival, ectoparasitic dinosaurs, and island investigation. Here is what we know so far.",
    intro: "Wilderdark combines first-person survival horror with stealth, environmental investigation, photography, sample collection, and crafted tools. The complete mechanics list is not yet available.",
    image: steamImage,
    imageAlt: "Wilderdark official Steam store artwork",
    heroImage: steamImage,
    imageSource: "Official Steam store listing",
    facts: [
      { label: "Genre", value: "First-person survival horror", status: "confirmed" },
      { label: "Perspective", value: "First-person", status: "confirmed" },
      { label: "Core framing", value: "Survive, explore, investigate", status: "confirmed" },
      { label: "Main threat concept", value: "Ectoparasitic dinosaurs and organisms", status: "confirmed" },
      { label: "Full mechanics list", value: "Not yet announced", status: "unknown" }
    ],
    sections: [
      { id: "core", title: "Core concept", paragraphs: ["The Steam description places the player on an unnatural island after a crash landing, with minimal resources and tools. The assignment involves documenting the ecosystem, collecting samples, and investigating vanished expeditions while surviving infected wildlife."] },
      { id: "survival", title: "Survival horror structure", paragraphs: ["The official description emphasizes careful resource use, stealth, and hiding from apex predators. These details establish survival pressure, but do not yet provide a full inventory, damage, difficulty, or save-system breakdown."] },
      { id: "exploration", title: "Exploration and investigation", paragraphs: ["Environmental storytelling and photographic documentation are explicitly described. The island is both the threat and the subject of the investigation, so observation appears to matter alongside movement and avoidance."] },
      { id: "tools", title: "Tools and crafting", paragraphs: ["Crafted tools are confirmed, and the premise begins with limited equipment. A full tool list, recipe catalog, crafting tree, or claim about the best equipment would go beyond the current source material."] },
      { id: "samples", title: "Sample collection and documentation", paragraphs: ["Steam says the player is tasked with collecting samples and documenting discoveries through photography. The source does not yet explain exact sample categories, rewards, or progression systems."] },
      { id: "story", title: "Story setup", paragraphs: ["The player works for an organization searching for immortality and investigates an island where earlier expeditions vanished, including one led by the protagonist's parents. Endings, twists, and the full narrative structure remain unknown."] }
    ],
    faq: [
      { question: "What kind of game is Wilderdark?", answer: "It is described as a first-person survival horror exploration game." },
      { question: "Is Wilderdark first-person?", answer: "Yes. The Steam listing explicitly describes it as first-person." },
      { question: "Is Wilderdark more survival or horror?", answer: "Both are central to its current description, with stealth, scarce resources, investigation, and dangerous creatures all emphasized." },
      { question: "Does Wilderdark have crafting?", answer: "Crafted tools are confirmed, but the full crafting system and recipes have not been announced." }
    ],
    internalLinks: ["dinosaurs", "demo", "system-requirements"],
    sources: [{ name: "Steam — Wilderdark", url: steamGame, note: "Primary gameplay premise and mechanic descriptions." }]
  },
  {
    slug: "dinosaurs",
    eyebrow: "Creature tracker",
    title: "Wilderdark Dinosaurs and Ectoparasites: What We Know So Far",
    h1: "Wilderdark Dinosaurs & Ectoparasites",
    description: "A mysterious ectoparasite affects dinosaurs and organisms in Wilderdark. Here is what is confirmed, what is unknown, and what not to assume yet.",
    intro: "Dinosaurs corrupted by a mysterious ectoparasitic organism are central to Wilderdark's premise. Steam explicitly mentions a T-rex, but no full species list or bestiary exists yet.",
    image: steamImage,
    imageAlt: "Wilderdark official Steam store artwork",
    heroImage: steamImage,
    imageSource: "Official Steam store listing",
    facts: [
      { label: "Dinosaurs", value: "Major confirmed concept", status: "confirmed" },
      { label: "Ectoparasites", value: "Confirmed concept", status: "confirmed" },
      { label: "Exact species list", value: "Not yet announced", status: "unknown" },
      { label: "T-rex", value: "Mentioned on the Steam page", status: "confirmed" },
      { label: "Full bestiary", value: "Not available before launch", status: "unknown" }
    ],
    sections: [
      { id: "ectoparasites", title: "What are the ectoparasites?", paragraphs: ["The official premise describes a mysterious ectoparasitic organism infecting the island and corrupting dinosaurs and plant life. Its origin and effects are deliberately presented as unknown, including possible effects on humans."] },
      { id: "confirmed", title: "Are dinosaurs confirmed?", paragraphs: ["Yes. Dinosaurs are part of the official Steam description and a central source of danger in the game's survival-horror setup."] },
      { id: "species", title: "Which dinosaurs are confirmed?", paragraphs: ["Steam's mature-content note specifically tells players to beware carnivorous dinosaurs such as the T-rex. Beyond that reference, the exact species list has not been announced, so this guide does not extrapolate a roster from trailers or silhouettes."] },
      { id: "unknown", title: "What we do not know yet", bullets: ["The full creature list", "Detailed enemy behavior", "Whether boss creatures exist", "Whether humans are infected", "The full ecosystem mechanics"] },
      { id: "misinformation", title: "How this guide avoids misinformation", paragraphs: ["This page tracks only details stated in the current source set. Unnamed creatures, visual guesses, fan theories, and assumed boss encounters are not treated as confirmed information."] }
    ],
    faq: [
      { question: "Are there dinosaurs in Wilderdark?", answer: "Yes. Dinosaurs are explicitly part of Wilderdark's official premise." },
      { question: "What are ectoparasites in Wilderdark?", answer: "They are a mysterious organism described as corrupting dinosaurs and plant life on the island. Their origin and full effects remain unknown." },
      { question: "Is there a T-rex in Wilderdark?", answer: "The current Steam page explicitly mentions carnivorous dinosaurs such as the T-rex." },
      { question: "Is the full monster list known?", answer: "No. A complete creature or monster list has not been announced." }
    ],
    internalLinks: ["gameplay", "system-requirements"],
    sources: [{ name: "Steam — Wilderdark", url: steamGame, note: "Primary dinosaur, ectoparasite, and T-rex references." }]
  },
  {
    slug: "system-requirements",
    eyebrow: "PC specifications",
    title: "Wilderdark System Requirements: Minimum and Recommended Specs",
    h1: "Wilderdark System Requirements",
    description: "Official PC system requirements for Wilderdark, including Windows 10 64-bit, 16 GB RAM minimum, RTX 2070 minimum, and recommended RTX 3060-class hardware.",
    intro: "Steam lists DirectX 12 PC requirements with 16 GB RAM and an RTX 2070-class minimum GPU. Storage space and Steam Deck compatibility are not currently specified.",
    image: steamImage,
    imageAlt: "Wilderdark official Steam store artwork",
    heroImage: steamImage,
    imageSource: "Official Steam store listing",
    facts: [
      { label: "Minimum memory", value: "16 GB RAM", status: "confirmed" },
      { label: "Recommended memory", value: "32 GB RAM", status: "confirmed" },
      { label: "Minimum GPU", value: "RTX 2070 or AMD equivalent", status: "confirmed" },
      { label: "Storage", value: "Not specified", status: "unknown" },
      { label: "Steam Deck", value: "Not officially confirmed", status: "unknown" }
    ],
    sections: [
      { id: "minimum", title: "Official minimum specs", bullets: ["OS: Windows 10 64-bit or later", "Processor: Intel Core i5-8400 / AMD Ryzen 5 2600", "Memory: 16 GB RAM", "Graphics: Nvidia GeForce RTX 2070 or AMD equivalent", "DirectX: Version 12"] },
      { id: "recommended", title: "Official recommended specs", bullets: ["OS: Windows 10 64-bit or later", "Processor: Intel Core i7-8700 / AMD Ryzen 5 3600", "Memory: 32 GB RAM", "Graphics: Nvidia GeForce RTX 3060 or AMD equivalent", "DirectX: Version 12"] },
      { id: "storage", title: "Storage space", paragraphs: ["Not specified in the current Steam listing. Leave extra room for the download and updates, but no exact figure should be presented as an official requirement."] },
      { id: "deck", title: "Steam Deck status", paragraphs: ["Steam Deck verification is not officially confirmed on the current store listing. The presence of controller support or Deck-based user reviews would not, by itself, establish Verified or Playable status."] },
      { id: "interpretation", title: "What the specs suggest", paragraphs: ["Interpretation: the listed 16 GB minimum RAM and RTX 2070-class minimum graphics requirement suggest a relatively demanding PC game. Steam does not currently state a target resolution, frame rate, graphics preset, or final optimization profile, and requirements may change before launch."] }
    ],
    faq: [
      { question: "Can my PC run Wilderdark?", answer: "Compare your hardware with the official minimum specs: Windows 10 64-bit, an i5-8400 or Ryzen 5 2600, 16 GB RAM, an RTX 2070 or AMD equivalent, and DirectX 12." },
      { question: "Does Wilderdark require Windows 10?", answer: "The current Steam listing specifies Windows 10 64-bit or later." },
      { question: "Is Wilderdark Steam Deck verified?", answer: "Steam Deck verification is not officially confirmed in the current listing." },
      { question: "How much storage does Wilderdark need?", answer: "Storage space is not specified in the current Steam listing." }
    ],
    internalLinks: ["demo", "platforms", "gameplay"],
    sources: [{ name: "Steam — Wilderdark", url: steamGame, note: "Primary minimum and recommended PC specifications." }]
  },
  {
    slug: "platforms",
    eyebrow: "Availability tracker",
    title: "Is Wilderdark on PS5, Xbox, Switch or PC?",
    h1: "Wilderdark Platforms",
    description: "Wilderdark is confirmed for PC via Steam. PS5, Xbox Series X|S, and Nintendo Switch versions have not been announced.",
    intro: "PC via Steam is the only confirmed Wilderdark platform in the current source set. No PS5, Xbox Series X|S, Nintendo Switch, or Steam Deck status has been announced.",
    image: steamImage,
    imageAlt: "Wilderdark official Steam store artwork",
    heroImage: steamImage,
    imageSource: "Official Steam store listing",
    facts: [
      { label: "PC via Steam", value: "Confirmed", status: "confirmed" },
      { label: "PS5", value: "Not announced", status: "unknown" },
      { label: "Xbox Series X|S", value: "Not announced", status: "unknown" },
      { label: "Nintendo Switch", value: "Not announced", status: "unknown" },
      { label: "Steam Deck", value: "Not confirmed", status: "unknown" }
    ],
    sections: [
      { id: "pc", title: "PC", paragraphs: ["Wilderdark is confirmed for PC through Steam. The store page lists the full game for November 3, 2026, and a separate free PC demo is already available."] },
      { id: "playstation", title: "PlayStation", paragraphs: ["A PS5 version has not been announced. This does not mean Wilderdark is never coming to PlayStation; it means there is no confirmed version in the current source set."] },
      { id: "xbox", title: "Xbox", paragraphs: ["An Xbox Series X|S version has not been announced. No Xbox release date or console demo should be inferred from the PC announcement."] },
      { id: "switch", title: "Nintendo Switch", paragraphs: ["A Nintendo Switch version has not been announced. The same applies to any other Nintendo hardware not named in the current source set."] },
      { id: "steam-deck", title: "Steam Deck", paragraphs: ["Steam Deck Verified or Playable status is not confirmed. Compatibility should remain listed as unknown until the Steam store displays an official result."] },
      { id: "future", title: "Could more platforms be added later?", paragraphs: ["It is possible, but there is no official announcement in the current source set. Future platform decisions belong to Team Junkfish and Junkfish Limited, so this guide will update only when a reliable source does."] }
    ],
    faq: [
      { question: "Is Wilderdark on PS5?", answer: "A PS5 version has not been announced." },
      { question: "Is Wilderdark on Xbox?", answer: "An Xbox Series X|S version has not been announced." },
      { question: "Is Wilderdark on Nintendo Switch?", answer: "A Nintendo Switch version has not been announced." },
      { question: "Is Wilderdark only on PC?", answer: "PC via Steam is the only currently confirmed platform. Other platforms have not been announced." },
      { question: "Is Wilderdark Steam Deck verified?", answer: "No official Steam Deck verification status is confirmed in the current listing." }
    ],
    internalLinks: ["release-date", "system-requirements", "demo"],
    sources: [
      { name: "Steam — Wilderdark", url: steamGame, note: "Primary PC platform and release listing." },
      { name: "Steam — Wilderdark Demo", url: steamDemo, note: "Confirmed PC demo availability." }
    ]
  }
];

export const guideBySlug = Object.fromEntries(guides.map((guide) => [guide.slug, guide])) as Record<string, Guide>;
