import { Player } from './types';

// Using Roblox headshot-thumbnail endpoint which redirects to the CDN
const getRobloxAvatar = (userId: number) => `https://www.roblox.com/headshot-thumbnail/image?userId=${userId}&width=420&height=420&format=png`;

export const LEADERBOARD_DATA: Player[] = [
  // TOP 3 LENDÁRIO
  { 
    rank: 1, 
    username: "iBugou", 
    wealth: "18,2 Bilhões", 
    rawValue: 18200000000, 
    change: 'equal',
    avatarUrl: getRobloxAvatar(3730306385) // iBugou Real ID (Yellow Hat)
  },
  { 
    rank: 2, 
    username: "KreekCraft", 
    wealth: "16,5 Bilhões", 
    rawValue: 16500000000, 
    change: 'up',
    // Avatar ID representing the Mickey Ears/Black Hat image
    avatarUrl: getRobloxAvatar(3564972300) 
  },
  { rank: 3, username: "enzosa2023", wealth: "10 Bilhões", rawValue: 10000000000, change: 'up', isUser: true },
  
  // TOP 10
  { rank: 4, username: "Flamingo", wealth: "6,8 Bilhões", rawValue: 6800000000 },
  { rank: 5, username: "Preston", wealth: "6,2 Bilhões", rawValue: 6200000000 },
  { rank: 6, username: "Denis", wealth: "5,9 Bilhões", rawValue: 5900000000 },
  { rank: 7, username: "Sketch", wealth: "5,5 Bilhões", rawValue: 5500000000 },
  { rank: 8, username: "ItsFunneh", wealth: "5,1 Bilhões", rawValue: 5100000000 },
  { rank: 9, username: "RussoPlays", wealth: "4,8 Bilhões", rawValue: 4800000000 },
  { rank: 10, username: "LazarBeam", wealth: "4,5 Bilhões", rawValue: 4500000000 },

  // TOP 20
  { rank: 11, username: "TanqR", wealth: "4,2 Bilhões", rawValue: 4200000000 },
  { rank: 12, username: "iTemp", wealth: "3,95 Bilhões", rawValue: 3950000000 },
  { rank: 13, username: "ZacharyZaxor", wealth: "3,7 Bilhões", rawValue: 3700000000 },
  { rank: 14, username: "TypicalGamer", wealth: "3,4 Bilhões", rawValue: 3400000000 },
  { rank: 15, username: "InquisitorMaster", wealth: "3,15 Bilhões", rawValue: 3150000000 },
  { rank: 16, username: "AlbertStuff", wealth: "2,9 Bilhões", rawValue: 2900000000 },
  { rank: 17, username: "MeganPlays", wealth: "2,65 Bilhões", rawValue: 2650000000 },
  { rank: 18, username: "Poke", wealth: "2,4 Bilhões", rawValue: 2400000000 },
  { rank: 19, username: "Hyper", wealth: "2,2 Bilhões", rawValue: 2200000000 },
  { rank: 20, username: "Ant", wealth: "2,0 Bilhões", rawValue: 2000000000 },

  // TOP 30
  { rank: 21, username: "Sub", wealth: "1,85 Bilhões", rawValue: 1850000000 },
  { rank: 22, username: "Foltyn", wealth: "1,7 Bilhões", rawValue: 1700000000 },
  { rank: 23, username: "NightFoxx", wealth: "1,55 Bilhões", rawValue: 1550000000 },
  { rank: 24, username: "Bloxburg", wealth: "1,4 Bilhões", rawValue: 1400000000 },
  { rank: 25, username: "Dued1", wealth: "1,3 Bilhões", rawValue: 1300000000 },
  { rank: 26, username: "GoldenNinja", wealth: "1,2 Bilhões", rawValue: 1200000000 },
  { rank: 27, username: "Linkmon99", wealth: "1,1 Bilhões", rawValue: 1100000000 },
  { rank: 28, username: "RoCitizen", wealth: "1,0 Bilhões", rawValue: 1000000000 },
  { rank: 29, username: "GamingWithKev", wealth: "950 Milhões", rawValue: 950000000 },
  { rank: 30, username: "OfficialObby", wealth: "900 Milhões", rawValue: 900000000 },

  // TOP 40
  { rank: 31, username: "RobloxianDev", wealth: "850 Milhões", rawValue: 850000000 },
  { rank: 32, username: "CodeMasterRBX", wealth: "800 Milhões", rawValue: 800000000 },
  { rank: 33, username: "ProGamerX", wealth: "760 Milhões", rawValue: 760000000 },
  { rank: 34, username: "DarkPlayerRBX", wealth: "720 Milhões", rawValue: 720000000 },
  { rank: 35, username: "SpeedRunKid", wealth: "690 Milhões", rawValue: 690000000 },
  { rank: 36, username: "MegaNoob", wealth: "650 Milhões", rawValue: 650000000 },
  { rank: 37, username: "BrainrotKing", wealth: "620 Milhões", rawValue: 620000000 },
  { rank: 38, username: "UltraTycoon", wealth: "590 Milhões", rawValue: 590000000 },
  { rank: 39, username: "PixelHunter", wealth: "560 Milhões", rawValue: 560000000 },
  { rank: 40, username: "ObbyLegend", wealth: "530 Milhões", rawValue: 530000000 },

  // TOP 50
  { rank: 41, username: "CoinFarmer", wealth: "500 Milhões", rawValue: 500000000 },
  { rank: 42, username: "TycoonMaster", wealth: "470 Milhões", rawValue: 470000000 },
  { rank: 43, username: "NinjaCash", wealth: "440 Milhões", rawValue: 440000000 },
  { rank: 44, username: "RBXShadow", wealth: "410 Milhões", rawValue: 410000000 },
  { rank: 45, username: "FastClicker", wealth: "380 Milhões", rawValue: 380000000 },
  { rank: 46, username: "TradeLord", wealth: "350 Milhões", rawValue: 350000000 },
  { rank: 47, username: "RichNoob", wealth: "320 Milhões", rawValue: 320000000 },
  { rank: 48, username: "VaultBreaker", wealth: "290 Milhões", rawValue: 290000000 },
  { rank: 49, username: "BrainrotFan", wealth: "260 Milhões", rawValue: 260000000 },
  { rank: 50, username: "StarterPro", wealth: "230 Milhões", rawValue: 230000000 },
];
