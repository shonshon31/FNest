export const TMDB_IMG_W500 = "https://image.tmdb.org/t/p/w500";
export const TMDB_IMG_ORIGINAL = "https://image.tmdb.org/t/p/original";

// Verified correct poster/cover paths per tmdbId
export const KNOWN_POSTERS: Record<number, { poster: string; cover: string }> = {
  112836: { poster: "/6Fbrfdr2oR4BCgkGxHMqpD3M9aX.jpg", cover: "/2meX1nMdScFOoV4370rqHWKmXhY.jpg" },
  661374: { poster: "/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg", cover: "/8rpDcsfLJypbO6vREc0547VKqEv.jpg" },
  93405:  { poster: "/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", cover: "/qw3J9cNeLioOLoR68WX7z79aCdK.jpg" },
  66732:  { poster: "/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", cover: "/rcA17r3BYHNMpgPGNQCBvYwIBRx.jpg" },
  119051: { poster: "/9PFonBhy4cQy7Jz20NpMygczOkv.jpg", cover: "/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg" },
  69656:  { poster: "/pCGyPVrI9Fzw6rE1noNQNSX9HpO.jpg", cover: "/9bKaasNFmRFNwimM0sPmtiqFkrp.jpg" },
  96677:  { poster: "/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg", cover: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
  71912:  { poster: "/7vjaCdMw15FEbXyLQTVa04URsPm.jpg", cover: "/ynOAdoUN9WPt8MmNrU5cH7ePq4H.jpg" },
  71446:  { poster: "/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg", cover: "/gFk9BHF5FDEK9cEG1K6rqAJTvAH.jpg" },
  101311: { poster: "/qBBoaRBGT7UgINBF8oyF6V9HWDM.jpg", cover: "/4nFSRoQrEraLs2OkiBhQ5kCFzxq.jpg" },
  1072790:{ poster: "/k3waqVXSnYrZRFMEoUyMEeOAFSS.jpg", cover: "/jE5o7y9K6pZtWNNMEibZ4z9mHMo.jpg" },
  569094: { poster: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg", cover: "/nGxUxi3PcDlRUPERLvFPSJGcX9K.jpg" },
  100088: { poster: "/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg", cover: "/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg" },
  94997:  { poster: "/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg", cover: "/zZqpAXxVSBtxV9qPBcscfXBcL2w.jpg" },
  346698: { poster: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg", cover: "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg" },
  85552:  { poster: "/3Q0hd3heuWwDWpwcDkhQOA6TYWI.jpg", cover: "/jtnfNzqZwN4E32FGGxx1YZaBWWf.jpg" },
  63333:  { poster: "/e2X8dZtE5ASoisQJiz9SNqAlBXb.jpg", cover: "/oHd4DmSf4x8I7IiIpOUwYoiKDXo.jpg" },
  122226: { poster: "/5EblGFjSwqIvBbGHBuBdEPWlI4T.jpg", cover: "/1Ll7fPqW3pIVrGiUiTbUFR2HWHE.jpg" },
  46648:  { poster: "/lteGBz5rKVQU8DjPy0BHXqvE7oR.jpg", cover: "/pbRZKjRKoLBZYHPBm42bvhBFTTp.jpg" },
  194764: { poster: "/fayMBGnPlvKGEVxXrBpvMmADvuZ.jpg", cover: "/fqEl4yCEaFTQHFbSIiMgFMiQdEC.jpg" },
  693134: { poster: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", cover: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg" },
  106379: { poster: "/AnsSKR9LuK0T9bAOcPVA3PUvyWj.jpg", cover: "/8NQ7wpG1jRZnObkQtwDdzMD1oY.jpg" },
  872585: { poster: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", cover: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg" },
  76479:  { poster: "/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg", cover: "/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg" },
  84773:  { poster: "/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg", cover: "/6QEBRVMIKMfuYY5NHLFPjA4BSXT.jpg" },
  108978: { poster: "/GB7gBC8JHIAcJSMQFhFJPCQBUzN.jpg", cover: "/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg" },
  95557:  { poster: "/yDWJYRAwMNKa2FG3oKgACkxKLSa.jpg", cover: "/6UH52Fmau8RPsMAbrnYIJxrjLvQ.jpg" },
  69740:  { poster: "/oQpCfJNqDuyMD5LxFmRiCCZ5BjA.jpg", cover: "/qk2SHFXlVCHFcoOPlhRNZ34Lhkb.jpg" },
  840430: { poster: "/VHoqeFAs9opxe9NQnoOeGMSxjr.jpg",  cover: "/2E7HGJkbhWVlqMNGOyjLkktmQ50.jpg" },
  52814:  { poster: "/nJUHX3XL1jMkk8honUZnUmudFb9.jpg", cover: "/ab6sBnZf4YZcxOHtZP7io9A9Bdo.jpg" },
  575264: { poster: "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",  cover: "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg" },
  361743: { poster: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg", cover: "/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg" },
  120168: { poster: "/fGqWCiynBhMqe9AHLfZGMHHhYPa.jpg", cover: "/9cQzH9fTCcn7dpNUjPvxVLdN1Zs.jpg" },
  130392: { poster: "/9HoMSfxMBFMNTH1DpnSxSWRWO38.jpg", cover: "/3bfmbpKPCImx6gJNIl0JxsNhJle.jpg" },
  125988: { poster: "/1NxaSn4ver4jIvLeD7YF8cTlZjB.jpg", cover: "/2eIlCirgcvEwmCSYh2wDfz5Sxvz.jpg" },
  95396:  { poster: "/lm4AqA7Gx4TqbXGRWVkXBvKDwt8.jpg", cover: "/7guEbMQ0TJCxn55tkYMJVXBuNCP.jpg" },
  97546:  { poster: "/5fhZdwP1DVJ0FyVH6vrFdHwpXIn.jpg", cover: "/6lgBDdmJBrCdJF48m3HOvbhD6GH.jpg" },
  107864: { poster: "/a9O4eoGBJSJ4E5KJeRZMhfcMUzJ.jpg", cover: "/5WhtBHHJFzuJrjOTiJdxMTTyBUk.jpg" },
  804095: { poster: "/dB6ZpCMYkTBTBtgPGkBPkBo4SFH.jpg", cover: "/1X7vow16X7CnCoexXh4H4F2yDJv.jpg" },
  73586:  { poster: "/peNC0eyc3TQJa6x4TdKcBPNP4t0.jpg", cover: "/5Nz25DPXfQaSpDgce42Y3kFg9G4.jpg" },
  113988: { poster: "/R4TIcgnLYOuIJVhLkDhvBHBZSi.jpg",  cover: "/oI9PouC6dYZDZz5V6h0xkxQGbsw.jpg" },
  83867:  { poster: "/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg", cover: "/9kGJpnxBFEi2zMJz6UaEg1mAFAE.jpg" },
  82856:  { poster: "/sWgBv7LV2reenciBiTfgFR0fzuB.jpg", cover: "/o7qi2v4uWQ8bZ1tW3KI0Ztn2epk.jpg" },
  84958:  { poster: "/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg", cover: "/aSRBIBFMRHAHO2jU42SFXN7TDEI.jpg" },
  114461: { poster: "/rlB7CGWM0GxhgSYQoS8Q7DPMnmj.jpg", cover: "/fHOTtOMgcVCWMbWyMDVmqISWkn4.jpg" },
  792307: { poster: "/kCGlIMHnOm8JPXIRfnZaiKukSbH.jpg", cover: "/a0U0SMNU4JaBMi0vMfFYIJqCeP5.jpg" },
  447365: { poster: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", cover: "/5YZbUmjbMa3ClvSW1Wj3D6XGkVA.jpg" },
  976573: { poster: "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg", cover: "/6vb9PzDHiiGO4zKBuQwYlnpNLMR.jpg" },
};

export function getPosterUrl(tmdbId: number): string {
  const known = KNOWN_POSTERS[tmdbId];
  return known ? `${TMDB_IMG_W500}${known.poster}` : "";
}

export function getCoverUrl(tmdbId: number): string {
  const known = KNOWN_POSTERS[tmdbId];
  return known ? `${TMDB_IMG_ORIGINAL}${known.cover}` : "";
}
