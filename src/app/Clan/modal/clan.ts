export interface Clan {
  tag: string,
  name: string,
  type: string,
  badgeId: number,
  clanScore: number,
  clanWarTrophies: number,
  location: {
    id: number,
    name: string,
    isCountry: boolean,
    countryCode: string
  },
  requiredTrophies: number,
  donationsPerWeek: number,
  clanChestLevel: number,
  clanChestMaxLevel: number,
  members: number,
  clanChestStatus: string,
  description: string,
  clanChestPoints: number,
  badgeUrls: string,
  memberList: [
    {
      arena: {
        name: string,
        id: number,
        iconUrls: string
      },
      clanChestPoints: number,
      lastSeen: string,
      tag: string,
      name: string,
      role: string,
      expLevel: number,
      trophies: number,
      clanRank: number,
      previousClanRank: number,
      donations: number,
      donationsReceived: number
    }
  ]
}