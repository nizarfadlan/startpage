let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Yogyakarta, ID",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ed8796",
  },
  disabled: [],
  fastlink: "https://linktr.ee/matt_ftw",
  openLastVisitedTab: false,
  tabs: [
    {
      name: "personal",
      background_url: "src/img/banners/window-room.png",
      categories: [
        {
          name: "media/rrss",
          links: [
            {
              name: "mastodon",
              url: "https://mastodon.social",
              icon: "brand-mastodon",
              icon_color: "#a6da95",
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: "#f5a97f",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: "#ed8796",
            },
            {
              name: "twitch",
              url: "https://www.twitch.tv/",
              icon: "brand-twitch",
              icon_color: "#8aadf4",
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "mail",
              url: "https://mail.proton.me",
              icon: "brand-campaignmonitor",
              icon_color: "#a6da95",
            },
            {
              name: "calendar",
              url: "https://calendar.proton.me",
              icon: "calendar-filled",
              icon_color: "#f5a97f",
            },
            {
              name: "vault",
              url: "https://vault.bitwarden.com",
              icon: "lock",
              icon_color: "#ed8796",
            },
            {
              name: "drive",
              url: "https://drive.proton.me",
              icon: "cloud",
              icon_color: "#8aadf4",
            },
          ],
        },
        {
          name: "job",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/",
              icon: "brand-linkedin",
              icon_color: "#a6da95",
            },
          ],
        },
        {
          name: "shopping",
          links: [
            {
              name: "pccomponentes",
              url: "https://www.pccomponentes.com/",
              icon: "device-desktop",
              icon_color: "#a6da95",
            },
            {
              name: "amazon",
              url: "https://www.amazon.es/",
              icon: "brand-amazon",
              icon_color: "#f5a97f",
            },
            {
              name: "amazon-tracker",
              url: "https://camelcamelcamel.com/",
              icon: "chart-area",
              icon_color: "#ed8796",
            },
            {
              name: "chollometro",
              url: "https://www.chollometro.com/",
              icon: "basket",
              icon_color: "#8aadf4",
            },
            {
              name: "kimovil",
              url: "https://www.kimovil.com/en/",
              icon: "cell-signal-5",
              icon_color: "#c6a0f6",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/retro-mario.png",
      categories: [
        {
          name: "media",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: "#a6da95",
            },
            {
              name: "dev-community",
              url: "https://dev.to/",
              icon: "article",
              icon_color: "#f5a97f",
            },
            {
              name: "wakatime",
              url: "https://wakatime.com/dashboard",
              icon: "24-hours",
              icon_color: "#ed8796",
            },
            {
              name: "dotfyle",
              url: "https://dotfyle.com/",
              icon: "puzzle",
              icon_color: "#8aadf4",
            },
          ],
        },
        {
          name: "learn",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: "#a6da95",
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: "#f5a97f",
            },
            {
              name: "w3schools",
              url: "https://www.w3schools.com/",
              icon: "school",
              icon_color: "#ed8796",
            },
          ],
        },
        {
          name: "tools",
          links: [
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "brand-openai",
              icon_color: "#a6da95",
            },
            {
              name: "hoopscotch",
              url: "https://hoppscotch.io/",
              icon: "api",
              icon_color: "#f5a97f",
            },
            {
              name: "searchcode",
              url: "https://searchcode.com/",
              icon: "zoom-code",
              icon_color: "#ed8796",
            },
            {
              name: "codepen",
              url: "https://codepen.io/",
              icon: "brand-codepen",
              icon_color: "#8aadf4",
            },
            {
              name: "readme.so",
              url: "https://readme.so/editor",
              icon: "book-2",
              icon_color: "#c6a0f6",
            },
            {
              name: "postgres-new",
              url: "https://postgres.new/",
              icon: "database",
              icon_color: "#91d7e3",
            },
            {
              name: "penpot",
              url: "https://penpot.app/",
              icon: "edit-circle",
              icon_color: "#b7bdf8",
            },
            {
              name: "jsoncrack",
              url: "https://jsoncrack.com/editor",
              icon: "info-square-rounded",
              icon_color: "#f0c6c6",
            },
            {
              name: "it-tools",
              url: "https://it-tools.tech/",
              icon: "tools",
              icon_color: "#f5bde6",
            },
            {
              name: "regex101",
              url: "https://regex101.com/",
              icon: "regex",
              icon_color: "#8087a2",
            },
          ],
        },
        {
          name: "docs",
          links: [
            {
              name: "devdocs",
              url: "https://devdocs.io/",
              icon: "books",
              icon_color: "#a6da95",
            },
            {
              name: "mdn",
              url: "https://developer.mozilla.org/en-US/",
              icon: "brand-firefox",
              icon_color: "#f5a97f",
            },
            {
              name: "cheatsheets",
              url: "https://cheatsheets.zip/",
              icon: "file-spreadsheet",
              icon_color: "#ed8796",
            },
          ],
        },
      ],
    },
    {
      name: "gaming",
      background_url: "src/img/banners/doom-slayer.png",
      categories: [
        {
          name: "stores",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com/",
              icon: "brand-steam",
              icon_color: "#a6da95",
            },
            {
              name: "epic",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: "#f5a97f",
            },
            {
              name: "gog",
              url: "https://www.gog.com",
              icon: "brand-appgallery",
              icon_color: "#ed8796",
            },
          ],
        },
        {
          name: "deals",
          links: [
            {
              name: "GG Deals",
              url: "https://gg.deals/",
              icon: "cash",
              icon_color: "#a6da95",
            },
            {
              name: "r/gameDeals",
              url: "https://www.reddit.com/r/GameDeals/",
              icon: "currency-euro",
              icon_color: "#f5a97f",
            },
          ],
        },
        {
          name: "discussion",
          links: [
            {
              name: "r/gaming",
              url: "https://www.reddit.com/r/gaming/",
              icon: "device-gamepad",
              icon_color: "#a6da95",
            },
            {
              name: "r/indiegaming",
              url: "https://www.reddit.com/r/IndieGaming/",
              icon: "device-gamepad-2",
              icon_color: "#f5a97f",
            },
            {
              name: "r/nintendo",
              url: "https://www.reddit.com/r/nintendo/",
              icon: "device-nintendo",
              icon_color: "#ed8796",
            },
            {
              name: "r/playstation",
              url: "https://www.reddit.com/r/playstation/",
              icon: "playstation-square",
              icon_color: "#8aadf4",
            },
            {
              name: "r/xbox",
              url: "https://www.reddit.com/r/xbox/",
              icon: "brand-xbox",
              icon_color: "#c6a0f6",
            },
          ],
        },
        {
          name: "emulation/download",
          links: [
            {
              name: "vimm's lair",
              url: "https://vimm.net/",
              icon: "door",
              icon_color: "#a6da95",
            },
            {
              name: "roms megathread",
              url: "https://r-roms.github.io/",
              icon: "archive",
              icon_color: "#f5a97f",
            },
            {
              name: "r/emulation",
              url: "https://www.reddit.com/r/emulation/",
              icon: "pacman",
              icon_color: "#ed8796",
            },
          ],
        },
        {
          name: "mods",
          links: [
            {
              name: "nexus mods",
              url: "https://www.nexusmods.com/",
              icon: "hexagons",
              icon_color: "#a6da95",
            },
            {
              name: "modrinth",
              url: "https://modrinth.com/",
              icon: "brand-minecraft",
              icon_color: "#f5a97f",
            },
            {
              name: "moddb",
              url: "https://www.moddb.com",
              icon: "file-type-sql",
              icon_color: "#ed8796",
            },
          ],
        },
        {
          name: "rating/tracking",
          links: [
            {
              name: "opencritic",
              url: "https://opencritic.com/",
              icon: "numbers",
              icon_color: "#a6da95",
            },
            {
              name: "HowLongToBeat",
              url: "https://www.howlongtobeat.com",
              icon: "books",
              icon_color: "#f5a97f",
            },
            {
              name: "steamdb",
              url: "https://steamdb.info/",
              icon: "database-search",
              icon_color: "#ed8796",
            },
          ],
        },
      ],
    },
    {
      name: "music",
      background_url: "src/img/banners/lofi.jpg",
      categories: [
        {
          name: "listen",
          links: [
            {
              name: "spotify",
              url: "https://open.spotify.com",
              icon: "brand-spotify",
              icon_color: "#a6da95",
            },
            {
              name: "soundcloud",
              url: "https://www.soundcloud.com",
              icon: "brand-soundcloud",
              icon_color: "#f5a97f",
            },
            {
              name: "youtube-music",
              url: "https://music.youtube.com/",
              icon: "brand-youtube",
              icon_color: "#ed8796",
            },
            {
              name: "tidal",
              url: "https://listen.tidal.com/",
              icon: "brand-tidal",
              icon_color: "#8aadf4",
            },
          ],
        },
        {
          name: "rating/tracking",
          links: [
            {
              name: "AOTY",
              url: "https://www.albumoftheyear.org/",
              icon: "calendar-time",
              icon_color: "#a6da95",
            },
            {
              name: "rateyourmusic",
              url: "https://rateyourmusic.com/",
              icon: "stars-off",
              icon_color: "#f5a97f",
            },
            {
              name: "lastfm",
              url: "https://www.last.fm",
              icon: "brand-lastfm",
              icon_color: "#ed8796",
            },
            {
              name: "genius",
              url: "https://genius.com/",
              icon: "abc",
              icon_color: "#8aadf4",
            },
          ],
        },
        {
          name: "discussion",
          links: [
            {
              name: "r/musicproduction",
              url: "https://www.reddit.com/r/musicproduction/",
              icon: "device-speaker",
              icon_color: "#a6da95",
            },
            {
              name: "r/hiphopheads",
              url: "https://www.reddit.com/r/hiphopheads/",
              icon: "headphones",
              icon_color: "#f5a97f",
            },
            {
              name: "r/audiophile",
              url: "https://www.reddit.com/r/audiophile/",
              icon: "ear",
              icon_color: "#ed8796",
            },
            {
              name: "r/music",
              url: "https://www.reddit.com/r/music/",
              icon: "music-heart",
              icon_color: "#8aadf4",
            },
            {
              name: "r/metal",
              url: "https://www.reddit.com/r/metal/",
              icon: "guitar-pick",
              icon_color: "#c6a0f6",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "freesound",
              url: "https://freesound.org/",
              icon: "volume",
              icon_color: "#a6da95",
            },
            {
              name: "pluginboutique",
              url: "https://www.pluginboutique.com/",
              icon: "building-store",
              icon_color: "#f5a97f",
            },
            {
              name: "pianobook",
              url: "https://www.pianobook.co.uk",
              icon: "piano",
              icon_color: "#ed8796",
            },
            {
              name: "musescore",
              url: "https://musescore.com/",
              icon: "numbers",
              icon_color: "#8aadf4",
            },
            {
              name: "songsterr",
              url: "https://www.songsterr.com/",
              icon: "vinyl",
              icon_color: "#c6a0f6",
            },
          ],
        },
      ],
    },
    {
      name: "art",
      background_url: "src/img/banners/sky.png",
      categories: [
        {
          name: "media",
          links: [
            {
              name: "unsplash",
              url: "https://unsplash.com",
              icon: "brand-unsplash",
              icon_color: "#a6da95",
            },
            {
              name: "pixiv",
              url: "https://www.pixiv.net/en/",
              icon: "artboard",
              icon_color: "#f5a97f",
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.com/",
              icon: "brand-pinterest",
              icon_color: "#ed8796",
            },
            {
              name: "artstation",
              url: "https://www.artstation.com",
              icon: "pencil-heart",
              icon_color: "#8aadf4",
            },
          ],
        },
        {
          name: "palettes",
          links: [
            {
              name: "catppuccin",
              url: "https://catppuccin.com/",
              icon: "heart",
              icon_color: "#a6da95",
            },
            {
              name: "nord",
              url: "https://www.nordtheme.com/",
              icon: "brand-nord-vpn",
              icon_color: "#f5a97f",
            },
            {
              name: "dracula",
              url: "https://draculatheme.com/",
              icon: "bat",
              icon_color: "#ed8796",
            },
            {
              name: "rose-pine",
              url: "https://rosepinetheme.com/",
              icon: "flower",
              icon_color: "#8aadf4",
            },
          ],
        },
        {
          name: "tools",
          links: [
            {
              name: "convert-image-palette",
              url: "https://farbenfroh.io/",
              icon: "adjustments",
              icon_color: "#a6da95",
            },
            {
              name: "excalidraw",
              url: "https://excalidraw.com/",
              icon: "pencil",
              icon_color: "#f5a97f",
            },
            {
              name: "squoosh",
              url: "https://squoosh.app/",
              icon: "aspect-ratio",
              icon_color: "#ed8796",
            },
            {
              name: "palette-generator",
              url: "https://rosepinetheme.com/",
              icon: "palette",
              icon_color: "#8aadf4",
            },
            {
              name: "color-picker",
              url: "https://12ft.io/",
              icon: "color-picker",
              icon_color: "#c6a0f6",
            },
          ],
        },
      ],
    },
    {
      name: "tools",
      background_url: "src/img/banners/tokyo.png",
      categories: [
        {
          name: "general",
          links: [
            {
              name: "alternative-to",
              url: "https://alternativeto.net/",
              icon: "box-multiple",
              icon_color: "#a6da95",
            },
            {
              name: "lingva",
              url: "https://lingva.ml/",
              icon: "language",
              icon_color: "#f5a97f",
            },
            {
              name: "monkeytype",
              url: "https://monkeytype.com/",
              icon: "keyboard",
              icon_color: "#ed8796",
            },
            {
              name: "dub",
              url: "https://dub.co/",
              icon: "external-link",
              icon_color: "#8aadf4",
            },
            {
              name: "cleanurl",
              url: "https://12ft.io/",
              icon: "spray",
              icon_color: "#c6a0f6",
            },
            {
              name: "speed-test",
              url: "https://librespeed.org/",
              icon: "brand-speedtest",
              icon_color: "#91d7e3",
            },
          ],
        },
        {
          name: "piracy",
          links: [
            {
              name: "fmhy",
              url: "https://fmhy.net/",
              icon: "barrier-block",
              icon_color: "#a6da95",
            },
            {
              name: "megathread",
              url: "https://rentry.org/megathread",
              icon: "skull",
              icon_color: "#f5a97f",
            },
            {
              name: "gaming",
              url: "https://rentry.org/pgames",
              icon: "device-gamepad",
              icon_color: "#ed8796",
            },
            {
              name: "mobilism",
              url: "https://forum.mobilism.me/",
              icon: "device-mobile",
              icon_color: "#8aadf4",
            },
          ],
        },
        {
          name: "privacy",
          links: [
            {
              name: "adblock-test",
              url: "https://d3ward.github.io/toolz/adblock.html",
              icon: "lock-access",
              icon_color: "#a6da95",
            },
            {
              name: "privacy-guides",
              url: "https://www.privacyguides.org/en/",
              icon: "arrow-guide",
              icon_color: "#f5a97f",
            },
            {
              name: "r/privacy",
              url: "https://www.reddit.com/r/privacy/",
              icon: "door-off",
              icon_color: "#ed8796",
            },
            {
              name: "guerrilla-mail",
              url: "https://www.guerrillamail.com",
              icon: "trash",
              icon_color: "#8aadf4",
            },
          ],
        },
        {
          name: "security",
          links: [
            {
              name: "r/cybersecurity",
              url: "https://www.reddit.com/r/cybersecurity/",
              icon: "fingerprint",
              icon_color: "#a6da95",
            },
            {
              name: "virus-total",
              url: "https://www.virustotal.com",
              icon: "virus-search",
              icon_color: "#f5a97f",
            },
            {
              name: "hackthebox",
              url: "https://www.hackthebox.com/",
              icon: "biohazard",
              icon_color: "#ed8796",
            },
            {
              name: "triage",
              url: "https://tria.ge/",
              icon: "dna-2",
              icon_color: "#8aadf4",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config);
